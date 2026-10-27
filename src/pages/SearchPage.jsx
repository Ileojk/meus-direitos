import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { CategoryCard, ExternalLinkCard, SectionHeader } from '../components/Cards.jsx';
import { searchSite } from '../data/search.js';

function ResultGroup({ title, items, renderItem, limit = 8 }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, limit);

  return (
    <section className="search-results-group">
      <h2 className="h2">{title} <span className="result-count">({items.length})</span></h2>
      <div className="grid">{visibleItems.map(renderItem)}</div>
      {items.length > limit && (
        <button className="show-more" type="button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Mostrar menos' : `Ver todos os ${items.length} resultados`}
        </button>
      )}
    </section>
  );
}

export default function SearchPage({ q }) {
  const { sections, topics, resources, total } = searchSite(q);
  return (
    <div className="container page">
      <Breadcrumb items={[{ label: 'Busca' }]} />
      <SectionHeader title="Pesquisa" sub={q ? `${total} resultado${total === 1 ? '' : 's'} para “${q}”` : 'Pesquise por um assunto ou descreva sua situação.'}><SearchBar initial={q} /></SectionHeader>
      {q && total === 0 && <div className="notice" role="status"><strong>Não encontrei resultados para essa busca.</strong><p>Tente palavras mais curtas, como aluguel, escola, golpe, emprego ou saúde.</p></div>}
      {sections.length > 0 && <ResultGroup key={`${q}-areas`} title="Áreas" items={sections} limit={6} renderItem={(section) => <CategoryCard key={section.id} href={section.href} icon={section.icon} title={section.title} desc={section.subtitle} />} />}
      {topics.length > 0 && <ResultGroup key={`${q}-temas`} title="Páginas e temas" items={topics} renderItem={(topic) => <CategoryCard key={topic.id} href={topic.href} icon={topic.icon} title={topic.title} desc={topic.subtitle} />} />}
      {resources.length > 0 && <ResultGroup key={`${q}-fontes`} title="Fontes e serviços" items={resources} renderItem={(resource) => <ExternalLinkCard key={resource.id} id={resource.id} />} />}
      <div className="actions"><BackHome /></div>
    </div>
  );
}
