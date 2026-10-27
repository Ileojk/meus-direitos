import SearchBar from '../components/SearchBar.jsx';
import { CategoryCard, EmergencyCard } from '../components/Cards.jsx';
import { SECTIONS } from '../data/site.js';

const HOME_ORDER = ['preciso-de-ajuda', 'meus-direitos', 'servicos-publicos', 'denuncias', 'encontre-um-local', 'informacao'];

export default function Home() {
  const startingPoints = HOME_ORDER.map((id) => SECTIONS.find((section) => section.id === id));
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero-kicker">Direitos e serviços em Pernambuco</p>
          <h1>Entenda seus direitos e descubra onde buscar ajuda</h1>
          <p className="lead">Escolha um assunto ou conte o que aconteceu. Encontre informações e caminhos de atendimento nos municípios pernambucanos.</p>
          <SearchBar large />
        </div>
      </section>
      <div className="container">
        <div className="home-section-heading">
          <p className="eyebrow">Escolha por onde começar</p>
          <h2>O que você precisa agora?</h2>
          <p>Você não precisa saber o nome do seu direito. Escolha a situação ou o assunto mais próximo.</p>
        </div>
        <div className="grid">
          {startingPoints.map((s) => <CategoryCard key={s.id} href={`#/${s.id}`} icon={s.icon} title={s.label} desc={s.desc} />)}
        </div>
        <h2 className="h2 quick-access-title">Precisa de um canal de apoio?</h2>
        <EmergencyCard />
      </div>
    </>
  );
}
