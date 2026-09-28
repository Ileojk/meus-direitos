import { useState } from 'react';
export default function SearchBar({ initial = '', large = false }) {
  const [q, setQ] = useState(initial);
  const go = (e) => { e.preventDefault(); if (q.trim()) location.hash = `#/busca?q=${encodeURIComponent(q.trim())}`; };
  return (
    <form className={`search ${large ? 'search-lg' : ''}`} role="search" onSubmit={go}>
      <label htmlFor="q" className="sr-only">O que você precisa?</label>
      <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="O que você precisa? Ex.: violência, golpe, trabalho" autoComplete="off" />
      <button className="btn btn-yellow" type="submit">Buscar</button>
    </form>
  );
}
