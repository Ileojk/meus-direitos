const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
let placesLibraryPromise;

function loadPlacesLibrary() {
  if (!API_KEY) return Promise.reject(new Error('MISSING_API_KEY'));
  if (window.google?.maps?.importLibrary) return window.google.maps.importLibrary('places');
  if (placesLibraryPromise) return placesLibraryPromise;

  placesLibraryPromise = new Promise((resolve, reject) => {
    const callbackName = `__meusDireitosMapsReady_${Date.now()}`;
    const script = document.createElement('script');
    const params = new URLSearchParams({
      key: API_KEY,
      v: 'weekly',
      loading: 'async',
      callback: callbackName,
      language: 'pt-BR',
      region: 'BR',
    });
    const timeout = window.setTimeout(() => finish(new Error('Google Maps carregou fora do tempo.')), 15000);

    function finish(error) {
      window.clearTimeout(timeout);
      delete window[callbackName];
      script.onerror = null;
      if (error) {
        placesLibraryPromise = null;
        reject(error);
      } else {
        window.google.maps.importLibrary('places').then(resolve, (libraryError) => {
          placesLibraryPromise = null;
          reject(libraryError);
        });
      }
    }

    window[callbackName] = () => finish();
    script.onerror = () => finish(new Error('Não foi possível carregar o Google Maps.'));
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });

  return placesLibraryPromise;
}

function distanceBetweenMeters(from, to) {
  const radians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadius = 6371000;
  const dLat = radians(to.lat - from.latitude);
  const dLng = radians(to.lng - from.longitude);
  const lat1 = radians(from.latitude);
  const lat2 = radians(to.lat);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export async function findNearbyPlaces({ serviceName, location, city }) {
  const { Place, SearchByTextRankPreference } = await loadPlacesLibrary();
  const request = {
    textQuery: location ? serviceName : `${serviceName} em ${city}, Pernambuco, Brasil`,
    fields: ['displayName', 'formattedAddress', 'location', 'googleMapsURI'],
    maxResultCount: 10,
    language: 'pt-BR',
    region: 'BR',
  };

  if (location) {
    request.locationBias = {
      center: { lat: location.latitude, lng: location.longitude },
      radius: 25000,
    };
    request.rankPreference = SearchByTextRankPreference.DISTANCE;
  }

  const { places = [] } = await Place.searchByText(request);
  return places
    .filter((place) => !location || place.location)
    .map((place) => ({
      id: place.id,
      name: place.displayName || 'Serviço sem nome',
      address: place.formattedAddress,
      googleMapsURI: place.googleMapsURI,
      distanceMeters: location && place.location ? distanceBetweenMeters(location, place.location) : null,
    }))
    .filter((place) => place.distanceMeters == null || place.distanceMeters <= 25000)
    .sort((a, b) => (a.distanceMeters ?? Infinity) - (b.distanceMeters ?? Infinity));
}
