import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { SectionHeader, ExternalLinkCard, EmergencyCard, EmptyNotice } from '../components/Cards.jsx';
import { RESOURCES } from '../data/resources.js';
import { EDITORIAL } from '../data/editorial.js';

export default function TopicPage({ section, topic }) {
  const editorial = EDITORIAL[`${section.id}/${topic.id}`];
  const r = topic.res;
  let body;
  if (r === 'EMERGENCY') body = <EmergencyCard />;
  else if (r === 'MAP') body = (
    <div className="map-ph" role="region" aria-label="Área do mapa">
      <strong>Mapa em preparação</strong>
      <p>Nenhuma localização verificada foi cadastrada. A cobertura geográfica, os tipos de locais e a origem e atualização dos dados ainda precisam ser definidos.</p>
    </div>
  );
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
        <p>{editorial.summary}</p>
        <p className="editorial-note">{editorial.note}</p>
        <p className="source-date">Referências oficiais consultadas em 27/10/2026. Confirme a informação atualizada no órgão responsável.</p>
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
