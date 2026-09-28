import { useEffect, useRef, useState } from 'react';
import { Header, Footer, Breadcrumb, BackHome } from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import SectionPage from './pages/SectionPage.jsx';
import TopicPage from './pages/TopicPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import { getSection, getTopic } from './data/site.js';

function useRoute() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const f = () => setHash(location.hash);
    addEventListener('hashchange', f);
    return () => removeEventListener('hashchange', f);
  }, []);
  const [path, query = ''] = hash.replace(/^#\/?/, '').split('?');
  return { parts: path.split('/').filter(Boolean), q: new URLSearchParams(query).get('q') || '', key: hash };
}

export default function App() {
  const { parts, q, key } = useRoute();
  const main = useRef(null);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.scrollTo(0, 0);
    main.current?.focus();
  }, [key]);

  const [a, b] = parts;
  const section = getSection(a);
  const topic = getTopic(section, b);
  let page;
  if (!a) page = <Home />;
  else if (a === 'busca') page = <SearchPage q={q} />;
  else if (section && !b) page = <SectionPage section={section} />;
  else if (section && topic) page = <TopicPage section={section} topic={topic} />;
  else page = <div className="container page"><Breadcrumb items={[{ label: 'Página não encontrada' }]} /><h1>Página não encontrada</h1><p>O endereço não existe. Volte ao início e escolha uma área.</p><BackHome /></div>;

  return (
    <>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); main.current?.focus(); }}>Ir para o conteúdo</a>
      <Header current={a || ''} />
      <main id="main" ref={main} tabIndex={-1}>{page}</main>
      <Footer />
    </>
  );
}
