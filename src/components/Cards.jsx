import { RESOURCES, EMERGENCY_IDS, EMERGENCY_LABELS } from '../data/resources.js';
import { Icon } from './Icon.jsx';

export function SectionHeader({ title, sub, children }) {
  return <div className="section-header"><h1>{title}</h1>{sub && <p className="lead">{sub}</p>}{children}</div>;
}

export function CategoryCard({ href, icon, title, desc, cta = 'Ver opções' }) {
  return (
    <a className="card" href={href}>
      <span className="icon"><Icon name={icon} /></span>
      <h3>{title}</h3><p>{desc}</p>
      <span className="cta">{cta} →</span>
    </a>
  );
}

const ACTIONS = { site: 'Acessar site', tel: 'Ligar agora', whatsapp: 'Abrir WhatsApp' };
const ICONS = { site: 'link', tel: 'phone', whatsapp: 'message' };

export function ExternalLinkCard({ id }) {
  const r = RESOURCES[id];
  if (!r) return null;
  const ext = r.kind !== 'tel';
  return (
    <a className="card link-card" href={r.url} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      <span className="icon"><Icon name={ICONS[r.kind]} /></span>
      <h3>{r.title}</h3><p>{r.desc}</p>
      <span className="cta">{ACTIONS[r.kind]} →{ext && <span className="sr-only"> (abre em nova aba)</span>}</span>
    </a>
  );
}

export function EmergencyCard() {
  return (
    <section className="emergency" aria-labelledby="emerg-title">
      <h2 id="emerg-title">Emergência e canais de apoio</h2>
      <p className="emergency-note">Em uma emergência policial, ligue 190. Os canais 100 e 180 tratam de situações específicas; em emergência de violência contra mulheres, o Ligue 180 orienta acionar o 190.</p>
      <ul>
        {EMERGENCY_IDS.map((id) => (
          <li key={id}>
            <a href={RESOURCES[id].url} aria-label={`Ligar para ${RESOURCES[id].number}, ${EMERGENCY_LABELS[id]}`}>
              <strong>{RESOURCES[id].number}</strong><span>{EMERGENCY_LABELS[id]}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EmptyNotice({ title }) {
  return (
    <div className="notice" role="note">
      <strong>Em construção</strong>
      <p>A seção “{title}” está preparada para receber conteúdo verificado. Enquanto isso, use a <a href="#/denuncias">página de denúncias</a> ou a <a href="#/informacao">área de informação</a>.</p>
    </div>
  );
}
