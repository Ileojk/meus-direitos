import { useState } from 'react';
import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { SectionHeader, ExternalLinkCard, EmergencyCard, EmptyNotice } from '../components/Cards.jsx';
import { RESOURCES } from '../data/resources.js';
import { EDITORIAL, EDITORIAL_REVIEWED_AT } from '../data/editorial.js';

function LocalServiceSearch() {
  const [service, setService] = useState('delegacia da mulher');
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [message, setMessage] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  function submit(event) {
    event.preventDefault();
    if (!service.trim()) {
      setMessage('Escreva qual serviço você procura.');
      setSearchUrl('');
      return;
    }
    if (!coordinates && !city.trim()) {
      setMessage('Informe um município de Pernambuco ou use sua localização aproximada.');
      setSearchUrl('');
      return;
    }
    const query = coordinates
      ? `${service.trim()} perto de ${coordinates.latitude},${coordinates.longitude}, Pernambuco`
      : `${service.trim()}, ${city.trim()}, Pernambuco, Brasil`;
    setSearchUrl(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`);
    setMessage('Busca preparada. Confira os resultados e confirme o atendimento com o local antes de sair.');
  }

  function locate() {
    setMessage('');
    setCoordinates(null);
    setSearchUrl('');
    if (!navigator.geolocation) {
      setMessage('Este navegador não oferece localização. Informe o município para pesquisar.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates({ latitude: coords.latitude, longitude: coords.longitude });
        setCity('');
        setSearchUrl('');
        setMessage('Localização aproximada obtida neste dispositivo. Ela só será enviada ao Google Maps se você abrir a busca.');
      },
      () => setMessage('Não foi possível obter sua localização. Você pode informar o município manualmente.'),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
    );
  }

  return (
    <div className="local-search">
      <p>Escolha o serviço e informe sua cidade. A busca abre no Google Maps, que pode mostrar locais próximos em Pernambuco.</p>
      <form onSubmit={submit}>
        <label htmlFor="local-service">Qual serviço você procura?</label>
        <input id="local-service" list="local-service-options" value={service} onChange={(event) => { setService(event.target.value); setSearchUrl(''); }} placeholder="Ex.: delegacia da mulher, CRAS, Defensoria Pública" />
        <datalist id="local-service-options">
          <option value="Delegacia da mulher" />
          <option value="Delegacia de polícia" />
          <option value="CRAS" />
          <option value="Defensoria Pública" />
          <option value="Conselho tutelar" />
          <option value="Unidade de saúde" />
        </datalist>
        <label htmlFor="local-city">Município de Pernambuco</label>
        <input id="local-city" value={city} onChange={(event) => { setCity(event.target.value); setCoordinates(null); setSearchUrl(''); }} placeholder="Ex.: Caruaru, Petrolina ou Recife" />
        <div className="local-search-actions">
          <button className="btn" type="button" onClick={locate}>Usar minha localização aproximada</button>
          <button className="btn btn-yellow" type="submit">Buscar serviço</button>
        </div>
        {coordinates && <p className="location-state">Localização aproximada pronta para esta busca.</p>}
      </form>
      <p className="local-search-note">Sua localização não é salva por este site. Só será compartilhada com o Google Maps quando você abrir os resultados. A disponibilidade e a distância dos serviços precisam ser confirmadas diretamente.</p>
      <p className="local-search-status" role="status" aria-live="polite">{message}</p>
      {searchUrl && <a className="btn map-results" href={searchUrl} target="_blank" rel="noopener noreferrer">Abrir resultados no Google Maps<span className="sr-only"> (abre em nova aba)</span></a>}
    </div>
  );
}

export default function TopicPage({ section, topic }) {
  const editorial = EDITORIAL[`${section.id}/${topic.id}`];
  const r = topic.res;
  let body;
  if (r === 'EMERGENCY') body = <EmergencyCard />;
  else if (r === 'MAP') body = <LocalServiceSearch />;
  else if (r === 'GROUPED') {
    const ids = Object.keys(RESOURCES).filter((id) => RESOURCES[id].kind !== 'tel');
    const groups = [...new Set(ids.map((id) => RESOURCES[id].group))];
    body = groups.map((g) => (
      <section key={g}><h2 className="h2">{g}</h2>
        <div className="grid">{ids.filter((id) => RESOURCES[id].group === g).map((id) => <ExternalLinkCard key={id} id={id} />)}</div>
      </section>
    ));
  } else if (editorial) body = (
    <>
      <div className="editorial">
        <p className="territory-note"><strong>Foco do projeto:</strong> Pernambuco, com orientação para os municípios do estado. Fontes federais também são incluídas quando se aplicam.</p>
        <p>{editorial.summary}</p>
        <p className="editorial-note">{editorial.note}</p>
        <p className="source-date">Referências revisadas em {new Date(`${EDITORIAL_REVIEWED_AT}T12:00:00`).toLocaleDateString('pt-BR')}. Confirme a informação atualizada no órgão responsável.</p>
      </div>
      <div className="grid">{editorial.sources.map((id) => <ExternalLinkCard key={id} id={id} />)}</div>
    </>
  );
  else if (topic.id === 'outros-grupos') body = (
    <div className="notice" role="note">
      <strong>Definição editorial pendente</strong>
      <p>O projeto ainda não definiu quais grupos esta categoria deve abranger nem quais necessidades pretende atender. É preciso definir esses pontos e confirmar a fonte competente antes de publicar orientações ou links.</p>
    </div>
  );
  else if (r.length) body = <div className="grid">{r.map((id) => <ExternalLinkCard key={id} id={id} />)}</div>;
  else body = <EmptyNotice title={topic.title} />;

  return (
    <div className="container page">
      <Breadcrumb items={[{ label: section.label, href: `#/${section.id}` }, { label: topic.title }]} />
      <SectionHeader title={topic.title} sub={topic.desc} />
      {body}
      <div className="actions"><a className="btn" href={`#/${section.id}`}>← {section.label}</a><BackHome /></div>
    </div>
  );
}
