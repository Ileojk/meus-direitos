import { useState } from 'react';
import { SECTIONS } from '../data/site.js';

export function Logo({ compact = false }) {
  return (
    <a className="logo" href="#/" aria-label="Meus Direitos — página inicial">
      <svg viewBox="0 0 40 40" width="40" height="40" role="img" aria-label="Logo Meus Direitos">
        <rect width="40" height="40" rx="11" fill="#164A5B" />
        <path d="M11 27 L18 19 L24 23 L30 12" fill="none" stroke="#2A7F7F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="27" r="3.4" fill="#fff" /><circle cx="18" cy="19" r="3.4" fill="#fff" /><circle cx="24" cy="23" r="3.4" fill="#fff" />
        <circle cx="30" cy="12" r="4.4" fill="#F2C94C" />
      </svg>
      {!compact && <span className="logo-text">Meus <b>Direitos</b></span>}
    </a>
  );
}

export function Header({ current }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: '', label: 'Início', href: '#/' },
    { id: 'busca', label: 'Pesquisar', href: '#/busca' },
    ...SECTIONS.map((s) => ({ id: s.id, label: s.label, href: `#/${s.id}` })),
  ];
  return (
    <header className="header">
      <div className="container header-in">
        <Logo />
        <nav className="nav" aria-label="Principal">
          {links.map((l) => <a key={l.id} href={l.href} aria-current={current === l.id ? 'page' : undefined}>{l.label}</a>)}
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Menu móvel" onClick={() => setOpen(false)}>
          {links.map((l) => <a key={l.id} href={l.href} aria-current={current === l.id ? 'page' : undefined}>{l.label}</a>)}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <p>Projeto voltado a Pernambuco e seus municípios. Reúne informação geral e links para fontes oficiais; confirme endereço, horário e atendimento diretamente com o serviço. Não substitui orientação jurídica individual. Em emergência policial, ligue 190.</p>
        <nav aria-label="Rodapé" className="footer-nav">
          {SECTIONS.map((s) => <a key={s.id} href={`#/${s.id}`}>{s.label}</a>)}
        </nav>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav className="crumbs" aria-label="Você está em">
      <ol>
        <li><a href="#/">Início</a></li>
        {items.map((it, i) => <li key={i}>{it.href ? <a href={it.href}>{it.label}</a> : <span aria-current="page">{it.label}</span>}</li>)}
      </ol>
    </nav>
  );
}

export const BackHome = () => <a className="btn btn-ghost" href="#/">← Voltar ao início</a>;
