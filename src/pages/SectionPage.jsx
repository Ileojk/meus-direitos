import { Breadcrumb, BackHome } from '../components/Layout.jsx';
import { CategoryCard, SectionHeader, EmergencyCard } from '../components/Cards.jsx';

export default function SectionPage({ section }) {
  return (
    <div className="container page">
      <Breadcrumb items={[{ label: section.label }]} />
      <SectionHeader title={section.heading} sub={section.sub} />
      {section.emergency && <EmergencyCard />}
      <div className="grid">
        {section.topics.map((tp) => <CategoryCard key={tp.id} href={`#/${section.id}/${tp.id}`} icon={tp.icon} title={tp.title} desc={tp.desc} />)}
      </div>
      <div className="actions"><BackHome /></div>
    </div>
  );
}
