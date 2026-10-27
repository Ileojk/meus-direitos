import { useEffect, useState } from 'react';
export default function SearchBar({ initial = '', large = false }) {
  const [q, setQ] = useState(initial);
  useEffect(() => setQ(initial), [initial]);
  const go = (e) => {
    e.preventDefault();
    const query = q.trim();
    location.hash = query ? `#/busca?q=${encodeURIComponent(query)}` : '#/busca';
  };
  return (
    <form className={`search ${large ? 'search-lg' : ''}`} role="search" onSubmit={go}>
      <label htmlFor="q" className="sr-only">O que você precisa?</label>
      <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Digite um assunto ou uma situação" autoComplete="off" />
      <button className="btn btn-yellow" type="submit">Buscar</button>
    </form>
  );
}
