import SearchBar from '../components/SearchBar.jsx';
import { CategoryCard, EmergencyCard } from '../components/Cards.jsx';
import { SECTIONS } from '../data/site.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Seus direitos, de forma simples.</h1>
          <p className="lead">Encontre informações, serviços e lugares que podem ajudar você.</p>
          <SearchBar large />
          <p className="hint">Tente: <a href="#/busca?q=viol%C3%AAncia">violência</a>, <a href="#/busca?q=golpe">golpe</a>, <a href="#/busca?q=trabalho">trabalho</a>, <a href="#/busca?q=sa%C3%BAde">saúde</a></p>
        </div>
      </section>
      <div className="container">
        <h2 className="h2">Como podemos ajudar?</h2>
        <div className="grid">
          {SECTIONS.map((s) => <CategoryCard key={s.id} href={`#/${s.id}`} icon={s.icon} title={s.label} desc={s.desc} />)}
        </div>
        <h2 className="h2">Acesso rápido</h2>
        <EmergencyCard />
      </div>
    </>
  );
}
