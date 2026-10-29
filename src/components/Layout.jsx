import { useState } from 'react';
import { SECTIONS } from '../data/site.js';

export function Logo({ compact = false }) {
  return (
    <a className="logo" href="#/" aria-label="Meus Direitos — página inicial">
      <svg className="logo-mark" viewBox="0 0 56 40" width="56" height="40" aria-hidden="true" focusable="false">
        <path d="m2 14 5-2 4-4 7 2 4-3 7 2 6-2 6 2 5-1 5 3 4 1-2 4 2 3-4 3-3 4-4-1-3 4-4-1-4 3-4-2-4 2-3-3-4 1-2-4-4-1-1-4-4-1Z" fill="#164A5B" />
        <circle cx="28" cy="13.5" r="3.5" fill="#fff" />
        <path d="M21 26c.5-4.2 3-6.2 7-6.2s6.5 2 7 6.2c-2 1.9-4.3 2.9-7 2.9s-5-1-7-2.9Z" fill="#fff" />
      </svg>
      {!compact && <span className="logo-text"><span>Meus</span><b>Direitos</b></span>}
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
