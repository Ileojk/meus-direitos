import { RESOURCES } from '../data/resources.js';

export function LawCitation({ law }) {
  if (!law) return null;
  const resource = RESOURCES[law.source];
  if (!resource) return null;
  return (
    <aside className="guide-law" aria-label="Base legal">
      <span className="guide-law-label">O que diz a lei</span>
      <strong>{law.name} · {law.article}</strong>
      <span className="guide-law-explainer">Como isso pode se aplicar</span>
      <p>{law.summary}</p>
      <a href={resource.url} target="_blank" rel="noopener noreferrer">Ler o texto completo<span className="sr-only"> (abre em nova aba)</span> →</a>
    </aside>
  );
}

export function GuideActions({ actions = [] }) {
  if (!actions.length) return null;
  return (
    <div className="guide-actions" aria-label="Canais para buscar ajuda">
      <strong>Próximo passo</strong>
      <div>
        {actions.map(({ id, label }) => {
          const resource = RESOURCES[id];
          if (!resource) return null;
          return <a key={id} className="guide-action" href={resource.url} {...(resource.kind === 'tel' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
            {label}<span aria-hidden="true"> →</span>{resource.kind !== 'tel' && <span className="sr-only"> (abre em nova aba)</span>}
          </a>;
        })}
      </div>
    </div>
  );
}
