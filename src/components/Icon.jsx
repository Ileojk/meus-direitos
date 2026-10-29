const DRAWINGS = {
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M8 7h8M8 11h7"/></>,
  sprout: <><path d="M12 21v-9"/><path d="M12 12C8 12 5 9 5 5c4 0 7 3 7 7Z"/><path d="M12 15c0-4 3-7 7-7 0 4-3 7-7 7Z"/></>,
  health: <><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/><path d="M5 12h4l2-3 2.2 6 1.8-3h4"/></>,
  education: <><path d="m2.5 9 9.5-5 9.5 5-9.5 5z"/><path d="M6 11v5c3.8 3 8.2 3 12 0v-5M21.5 9v6"/><circle cx="21.5" cy="17" r="1"/></>,
  work: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
  consumer: <><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0M9 13h.01M15 13h.01"/></>,
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z"/><path d="M8 21v-7h8"/></>,
  women: <><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></>,
  child: <><circle cx="12" cy="6" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M9 13l3 2 3-2"/></>,
  elderly: <><circle cx="11" cy="5" r="2.5"/><path d="m9 9 4 2 2 4h3M10 11l-2 5 4 2 1 3M7 16l-3 4"/></>,
  accessibility: <><circle cx="12" cy="4" r="2"/><path d="M5 9h9l2 4h4M12 9l-2 6 4 2 2 4M10 15l-4 5"/></>,
  people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1zM17 5a3 3 0 0 1 0 6M19 14a5 5 0 0 1 2 4v2"/></>,
  support: <><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/><path d="M12 9v6M9 12h6"/></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
  megaphone: <><path d="m3 11 14-5v12L3 14zM17 10h3a2 2 0 0 1 0 4h-3M6 15l2 6h4l-2-5"/></>,
  government: <><path d="m3 9 9-6 9 6zM5 10v9M9 10v9M15 10v9M19 10v9M3 20h18"/></>,
  location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  idea: <><path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-.8.6-1 1.4-1 2H9c0-.6-.2-1.4-1-2Z"/><path d="M12 2v2M4.9 5l1.4 1.4M19.1 5l-1.4 1.4"/></>,
  backpack: <><rect x="5" y="7" width="14" height="14" rx="3"/><path d="M9 7V5a3 3 0 0 1 6 0v2M5 12h14M9 16h6"/></>,
  justice: <><path d="M12 3v17M5 7h14M4 21h16M7 7l-4 7h8L7 7ZM17 7l-4 7h8l-4-7Z"/></>,
  id: <><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16a3 3 0 0 1 5 0M13 10h5M13 14h5"/></>,
  tools: <><path d="m14 7 3-3 3 3-3 3M4 20l9-9M5 5l4 4M3 7l4-4 4 4-4 4zM13 13l4 4-4 4-4-4"/></>,
  gift: <><rect x="3" y="9" width="18" height="12" rx="1"/><path d="M2 6h20v4H2zM12 6v15M12 6H8a2 2 0 1 1 2-2c0 1.1 2 2 2 2ZM12 6h4a2 2 0 1 0-2-2c0 1.1-2 2-2 2Z"/></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  guide: <><path d="M5 4h14v17H5zM8 8h8M8 12h8M8 16h5"/><path d="M3 7V2h14"/></>,
  question: <><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.3 2c-1 .9-1.8 1.2-1.8 2.7M12 17h.01"/></>,
  text: <><path d="M4 5h16M4 10h16M4 15h10M4 20h8"/></>,
  law: <><path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h7M9 16h7"/></>,
  link: <><path d="M10 13a5 5 0 0 0 7 .2l2-2a5 5 0 0 0-7-7l-1.2 1.2M14 11a5 5 0 0 0-7-.2l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></>,
  phone: <><path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-8-8l3-2z"/></>,
  message: <><path d="M21 11.5a8.5 8.5 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.8L3 21l1.8-4.2A8.3 8.3 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></>,
};

export function Icon({ name = 'question', size = 26, className = '' }) {
  const drawing = DRAWINGS[name] || DRAWINGS.question;
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{drawing}</svg>;
}
