import { useRef, useState } from 'react';
import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { SectionHeader, ExternalLinkCard, EmergencyCard, EmptyNotice } from '../components/Cards.jsx';
import { RESOURCES } from '../data/resources.js';
import { EDITORIAL, EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { WorkRightsGuide } from '../components/WorkRightsGuide.jsx';
import { EducationRightsGuide } from '../components/EducationRightsGuide.jsx';
import { MeusDireitosGuide } from '../components/MeusDireitosGuide.jsx';

const DEAM_SERVICE = 'Delegacia Especializada de Atendimento à Mulher (DEAM)';
const POLICE_SERVICE = 'Delegacia de polícia';
const KNOWN_MAP_SERVICES = [DEAM_SERVICE, POLICE_SERVICE, 'Conselho Tutelar', 'Centro de Referência de Assistência Social (CRAS)', 'Unidade Básica de Saúde (UBS)'];

function LocalServiceSearch({ requestedService }) {
  const requestedName = requestedService === 'police' ? POLICE_SERVICE : requestedService === 'council' ? 'Conselho Tutelar' : requestedService === 'deam' ? DEAM_SERVICE : requestedService;
  const [service, setService] = useState(!requestedName || KNOWN_MAP_SERVICES.includes(requestedName) ? (requestedName || DEAM_SERVICE) : 'Outro serviço');
  const [otherService, setOtherService] = useState(KNOWN_MAP_SERVICES.includes(requestedName) ? '' : requestedName || '');
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [message, setMessage] = useState('');
  const [searchUrl, setSearchUrl] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const locationRequest = useRef(0);
  const activeService = service === 'Outro serviço' ? otherService.trim() : service;
  const womenPoliceSearch = /mulher|delegacia/i.test(activeService);

  function makeMapsUrl(serviceName, location) {
    const query = location.coordinates
      ? `${serviceName} perto de ${location.coordinates.latitude},${location.coordinates.longitude}`
      : `${serviceName}, ${location.city}, Pernambuco, Brasil`;
    const params = new URLSearchParams({ api: '1', query });
    return `https://www.google.com/maps/search/?${params.toString()}`;
  }

  function cancelLocationRequest() {
    locationRequest.current += 1;
    setIsLocating(false);
  }

  function submit(event) {
    event.preventDefault();
    if (!activeService) {
      setMessage('Escreva qual serviço você procura.');
      setSearchUrl('');
      return;
    }
    if (!coordinates && !city.trim()) {
      setMessage('Informe um município de Pernambuco ou use sua localização aproximada.');
      setSearchUrl('');
      return;
    }
    setSearchUrl(makeMapsUrl(activeService, { coordinates, city: city.trim() }));
    setMessage('Busca preparada. Abra os resultados no Google Maps e confirme endereço e atendimento antes de sair.');
  }

  function locate() {
    if (!activeService) {
      setMessage('Escreva qual serviço você procura antes de usar sua localização.');
      return;
    }
    setCoordinates(null);
    setSearchUrl('');
    if (!navigator.geolocation) {
      setMessage('Este navegador não oferece localização. Informe o município para pesquisar.');
      return;
    }
    const requestId = ++locationRequest.current;
    setIsLocating(true);
    setMessage('Obtendo localização aproximada. Autorize o acesso no aviso do navegador, se solicitado.');
    try {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          if (requestId !== locationRequest.current) return;
          const currentCoordinates = { latitude: coords.latitude, longitude: coords.longitude };
          setIsLocating(false);
          setCoordinates(currentCoordinates);
          setCity('');
          setSearchUrl(makeMapsUrl(activeService, { coordinates: currentCoordinates }));
          setMessage('Localização obtida. Abra os resultados no Google Maps e confirme o endereço e o atendimento antes de sair.');
        },
        (error) => {
          if (requestId !== locationRequest.current) return;
          setIsLocating(false);
          if (error.code === 1) {
            setMessage('A localização foi bloqueada. Libere a permissão deste site nas configurações do navegador ou informe o município.');
          } else if (error.code === 2) {
            setMessage('O dispositivo não conseguiu determinar a localização. Tente novamente ou informe o município.');
          } else if (error.code === 3) {
            setMessage('A localização demorou mais que o esperado. Verifique se o serviço de localização do dispositivo está ativo ou informe o município.');
          } else {
            setMessage('Não foi possível obter sua localização. Tente novamente ou informe o município.');
          }
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 60000 },
      );
    } catch {
      if (requestId === locationRequest.current) {
        setIsLocating(false);
        setMessage('Este navegador não conseguiu iniciar a localização. Informe o município para pesquisar.');
      }
    }
  }

  return (
    <div className="local-search">
      <p>Escolha um serviço e pesquise por município ou localização. A busca abre no Google Maps, que pode não mostrar todos os serviços públicos ou informações atualizadas.</p>
      <form onSubmit={submit}>
        <label htmlFor="local-service">Qual serviço você procura?</label>
        <select id="local-service" value={service} onChange={(event) => { cancelLocationRequest(); setService(event.target.value); setSearchUrl(''); setMessage(''); }}>
          <optgroup label="Proteção e segurança">
            <option value="Delegacia Especializada de Atendimento à Mulher (DEAM)">Delegacia Especializada de Atendimento à Mulher (DEAM)</option>
            <option value="Delegacia de polícia">Delegacia de polícia</option>
            <option value="Conselho Tutelar">Conselho Tutelar</option>
            <option value="Centro de Referência de Atendimento à Mulher">Centro de Referência de Atendimento à Mulher</option>
          </optgroup>
          <optgroup label="Assistência social">
            <option value="Centro de Referência de Assistência Social (CRAS)">Centro de Referência de Assistência Social (CRAS)</option>
            <option value="Centro de Referência Especializado de Assistência Social (CREAS)">Centro de Referência Especializado de Assistência Social (CREAS)</option>
            <option value="Atendimento do Cadastro Único (CadÚnico)">Atendimento do Cadastro Único (CadÚnico)</option>
          </optgroup>
          <optgroup label="Orientação jurídica">
            <option value="Defensoria Pública de Pernambuco">Defensoria Pública de Pernambuco</option>
            <option value="Defensoria Pública da União (DPU)">Defensoria Pública da União (DPU)</option>
          </optgroup>
          <optgroup label="Saúde">
            <option value="Unidade Básica de Saúde (UBS)">Unidade Básica de Saúde (UBS)</option>
            <option value="Unidade de Pronto Atendimento (UPA)">Unidade de Pronto Atendimento (UPA)</option>
            <option value="Hospital público">Hospital público</option>
            <option value="Centro de Atenção Psicossocial (CAPS)">Centro de Atenção Psicossocial (CAPS)</option>
          </optgroup>
          <optgroup label="Trabalho e consumidor">
            <option value="Agência do Trabalho — Sistema Nacional de Emprego (Sine)">Agência do Trabalho — Sistema Nacional de Emprego (Sine)</option>
            <option value="Programa de Proteção e Defesa do Consumidor (Procon)">Programa de Proteção e Defesa do Consumidor (Procon)</option>
          </optgroup>
          <option value="Outro serviço">Outro serviço…</option>
        </select>
        {service === 'Outro serviço' && (
          <>
            <label htmlFor="other-local-service">Escreva o nome do serviço</label>
            <input id="other-local-service" value={otherService} onChange={(event) => { cancelLocationRequest(); setOtherService(event.target.value); setSearchUrl(''); setMessage(''); }} placeholder="Ex.: Centro de Referência em Direitos Humanos" />
          </>
        )}
        <label htmlFor="local-city">Município de Pernambuco</label>
        <input id="local-city" value={city} onChange={(event) => { cancelLocationRequest(); setCity(event.target.value); setCoordinates(null); setSearchUrl(''); setMessage(''); }} placeholder="Ex.: Caruaru, Petrolina ou Recife" />
        <div className="local-search-actions">
          <button className="btn" type="button" onClick={locate} disabled={isLocating} aria-busy={isLocating}>{isLocating ? 'Obtendo localização…' : 'Usar minha localização atual'}</button>
          <button className="btn btn-yellow" type="submit" disabled={isLocating}>Buscar serviço</button>
        </div>
        {coordinates && <p className="location-state">Localização aproximada pronta para esta busca.</p>}
      </form>
      <p className="local-search-note">Sua localização só é compartilhada com o Google Maps quando você abre os resultados. Confirme endereço, horário e atendimento antes de sair.</p>
      {searchUrl && womenPoliceSearch && (
        <div className="official-local-source" role="note">
          <strong>Vai procurar uma Delegacia da Mulher?</strong>
          <p>O Google Maps pode mostrar endereço antigo. Confira também a <a href={RESOURCES['deams-pe-directory'].url} target="_blank" rel="noopener noreferrer">lista de endereços e telefones do MPPE</a>. Se não houver unidade especializada no município, a orientação do MPPE é procurar uma delegacia comum próxima.</p>
        </div>
      )}
      <p className="local-search-status" role="status" aria-live="polite">{message}</p>
      {searchUrl && <a className="btn map-results" href={searchUrl} target="_blank" rel="noopener noreferrer">Abrir resultados no Google Maps<span className="sr-only"> (abre em nova aba)</span></a>}
    </div>
  );
}

export default function TopicPage({ section, topic, searchService = '' }) {
  const editorial = EDITORIAL[`${section.id}/${topic.id}`];
  const r = topic.res;
  let body;
  if (r === 'EMERGENCY') body = <EmergencyCard />;
  else if (r === 'MAP') body = <LocalServiceSearch key={searchService} requestedService={searchService} />;
  else if (topic.id === 'trabalho' && ['meus-direitos', 'preciso-de-ajuda'].includes(section.id)) body = <WorkRightsGuide />;
  else if (topic.id === 'educacao' && ['meus-direitos', 'preciso-de-ajuda'].includes(section.id)) body = <EducationRightsGuide />;
  else if (section.id === 'meus-direitos' && topic.id !== 'trabalho' && topic.id !== 'educacao') body = <MeusDireitosGuide topicId={topic.id} />;
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

  const nearbyService = section.id === 'denuncias' && topic.id === 'crimes'
    || section.id === 'servicos-publicos' && topic.id === 'seguranca'
    ? 'police'
    : (section.id === 'preciso-de-ajuda' && topic.id === 'violencia'
      || section.id === 'denuncias' && topic.id === 'violencia'
      || section.id === 'meus-direitos' && topic.id === 'mulheres')
      ? 'deam'
      : '';

  return (
    <div className="container page">
      <Breadcrumb items={[{ label: section.label, href: `#/${section.id}` }, { label: topic.title }]} />
      <SectionHeader title={topic.title} sub={topic.desc} />
      {body}
      {nearbyService && <aside className="contextual-local-search">
        <h2>{nearbyService === 'deam' ? 'Precisa de atendimento presencial?' : 'Quer procurar uma delegacia perto de você?'}</h2>
        <p>{nearbyService === 'deam'
          ? 'A busca de locais abrirá com Delegacia da Mulher selecionada. Informe seu município ou use sua localização; se não houver unidade especializada, considere uma delegacia comum próxima.'
          : 'A busca de locais abrirá com delegacia selecionada. Informe seu município ou use sua localização e confirme o endereço antes de se deslocar.'}</p>
        <a className="btn btn-yellow" href={`#/encontre-um-local/mapa?service=${nearbyService}`}>{nearbyService === 'deam' ? 'Buscar Delegacia da Mulher' : 'Buscar uma delegacia'}</a>
      </aside>}
      <div className="actions"><a className="btn" href={`#/${section.id}`}>← {section.label}</a><BackHome /></div>
    </div>
  );
}
