import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { SectionHeader, ExternalLinkCard, EmergencyCard, EmptyNotice } from '../components/Cards.jsx';
import { RESOURCES } from '../data/resources.js';

export default function TopicPage({ section, topic }) {
  const r = topic.res;
  let body;
  if (r === 'EMERGENCY') body = <EmergencyCard />;
  else if (r === 'MAP') body = (
    <div className="map-ph" role="region" aria-label="Área do mapa">
      <strong>Mapa em preparação</strong>
      <p>Esta área receberá o mapa com instituições e serviços. Nenhuma localização foi cadastrada ainda.</p>
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
  } else if (r.length) body = <div className="grid">{r.map((id) => <ExternalLinkCard key={id} id={id} />)}</div>;
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
