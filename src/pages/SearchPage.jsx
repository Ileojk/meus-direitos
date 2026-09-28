import SearchBar from '../components/SearchBar.jsx';
import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { CategoryCard, ExternalLinkCard, SectionHeader } from '../components/Cards.jsx';
import { SECTIONS } from '../data/site.js';
import { RESOURCES } from '../data/resources.js';

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
// Aceita plural/singular simples: compara pelo radical de cada palavra da busca
const stem = (w) => w.replace(/(es|s)$/, '');
const match = (text, q) => { const t = norm(text); return norm(q).split(/\s+/).filter(Boolean).every((w) => t.includes(w) || t.includes(stem(w))); };

export default function SearchPage({ q }) {
  const topics = SECTIONS.flatMap((s) => s.topics.map((tp) => ({ s, tp })));
  const secHits = SECTIONS.filter((s) => match(`${s.label} ${s.desc} ${s.heading}`, q));
  const topicHits = topics.filter(({ s, tp }) => match(`${tp.title} ${tp.desc} ${s.label}`, q));
  const resHits = Object.keys(RESOURCES).filter((id) => match(`${RESOURCES[id].title} ${RESOURCES[id].desc} ${RESOURCES[id].tags}`, q));
  const total = secHits.length + topicHits.length + resHits.length;
  return (
    <div className="container page">
      <Breadcrumb items={[{ label: 'Busca' }]} />
      <SectionHeader title="Busca" sub={q ? `${total} resultado(s) para “${q}”` : 'Digite o que você precisa.'}><SearchBar initial={q} /></SectionHeader>
      {q && total === 0 && <div className="notice" role="status"><strong>Nada encontrado.</strong><p>Tente outra palavra ou navegue pelas áreas do menu.</p></div>}
      {secHits.length > 0 && <><h2 className="h2">Áreas</h2><div className="grid">{secHits.map((s) => <CategoryCard key={s.id} href={`#/${s.id}`} icon={s.icon} title={s.label} desc={s.desc} />)}</div></>}
      {topicHits.length > 0 && <><h2 className="h2">Temas</h2><div className="grid">{topicHits.map(({ s, tp }) => <CategoryCard key={s.id + tp.id} href={`#/${s.id}/${tp.id}`} icon={tp.icon} title={tp.title} desc={`${s.label} · ${tp.desc}`} />)}</div></>}
      {resHits.length > 0 && <><h2 className="h2">Instituições e canais</h2><div className="grid">{resHits.map((id) => <ExternalLinkCard key={id} id={id} />)}</div></>}
      <div className="actions"><BackHome /></div>
    </div>
  );
}
