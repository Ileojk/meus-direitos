import { SECTIONS } from './site.js';
import { RESOURCES } from './resources.js';
import { EDITORIAL } from './editorial.js';

const STOP_WORDS = new Set([
  'a', 'as', 'o', 'os', 'um', 'uma', 'uns', 'umas', 'de', 'da', 'das', 'do', 'dos',
  'em', 'no', 'na', 'nos', 'nas', 'por', 'para', 'com', 'e', 'ou', 'que', 'qual',
  'quais', 'como', 'onde', 'me', 'meu', 'minha', 'meus', 'minhas', 'preciso', 'quero', 'sem', 'alguem', 'nao',
]);

// Sinônimos de busca ajudam quando a pessoa descreve a situação com outras palavras.
const SYNONYMS = {
  assedio: ['trabalho', 'mpt', 'denúncia trabalhista'],
  contracheque: ['salário', 'trabalho', 'pagamento'],
  advogado: ['defensoria', 'orientação jurídica', 'atendimento jurídico'],
  advogada: ['defensoria', 'orientação jurídica', 'atendimento jurídico'],
  aluguel: ['moradia', 'habitação', 'casa'],
  aposentadoria: ['benefício', 'bpc', 'idoso'],
  atrasado: ['salário', 'trabalho', 'pagamento', 'benefício'],
  banco: ['golpe', 'fraude', 'consumidor'],
  beneficio: ['bolsa família', 'bpc', 'cadastro único', 'assistência social'],
  beneficioassistencial: ['bpc', 'benefício', 'idoso'],
  casa: ['moradia', 'habitação'],
  carteira: ['trabalho', 'emprego', 'documentação'],
  carteiraidentidade: ['cin', 'documentação', 'identidade'],
  cras: ['assistência social', 'cadastro único'],
  creche: ['educação', 'escola', 'matrícula'],
  demitido: ['demissão', 'trabalho', 'emprego'],
  demissao: ['trabalho', 'emprego', 'carteira'],
  denuncia: ['relato', 'disque 100', 'ligue 180'],
  desemprego: ['emprego', 'trabalho', 'seguro desemprego'],
  documentacao: ['documento', 'cpf', 'cin', 'identidade'],
  emprego: ['trabalho', 'vaga', 'sine', 'carteira de trabalho'],
  fgts: ['trabalho', 'salário', 'demissão'],
  escola: ['educação', 'ensino', 'matrícula'],
  estelionato: ['golpe', 'fraude'],
  fraude: ['golpe', 'estelionato'],
  gratis: ['gratuita', 'gratuito', 'defensoria', 'orientação jurídica'],
  golpe: ['fraude', 'estelionato', 'pix', 'consumidor'],
  gratuita: ['gratis', 'gratuito', 'defensoria', 'orientação jurídica'],
  gratuito: ['gratis', 'gratuita', 'defensoria', 'orientação jurídica'],
  identidade: ['documentação', 'cin', 'cpf'],
  justica: ['defensoria', 'orientação jurídica', 'atendimento jurídico'],
  medico: ['saúde', 'sus', 'consulta'],
  moradia: ['casa', 'habitação', 'aluguel'],
  popular: ['moradia', 'habitação', 'minha casa minha vida'],
  ong: ['organização', 'organizações da sociedade civil'],
  ongs: ['organização', 'organizações da sociedade civil'],
  pensao: ['benefício', 'bpc', 'idoso'],
  pagamento: ['salário', 'trabalho', 'benefício', 'consumidor'],
  registro: ['carteira de trabalho', 'trabalho', 'vínculo'],
  registrado: ['carteira de trabalho', 'trabalho', 'vínculo'],
  rescisao: ['demissão', 'trabalho', 'seguro desemprego'],
  pagaram: ['salário', 'trabalho', 'emprego'],
  pagam: ['salário', 'trabalho', 'emprego'],
  procon: ['consumidor', 'empresa', 'reclamação'],
  reclamar: ['consumidor', 'empresa', 'procon'],
  reembolso: ['consumidor', 'empresa', 'procon', 'reclamação'],
  recebi: ['salário', 'trabalho', 'benefício', 'pagamento'],
  saude: ['sus', 'hospital'],
  sus: ['saúde', 'consulta', 'meu sus digital'],
  trabalho: ['emprego', 'vaga', 'clt', 'sine', 'carteira de trabalho'],
  salario: ['trabalho', 'emprego', 'clt'],
  ferias: ['trabalho', 'emprego', 'clt'],
  roubou: ['golpe', 'fraude', 'pix', 'crime'],
  roubaram: ['golpe', 'fraude', 'pix', 'crime'],
  invadiram: ['golpe', 'fraude', 'crime'],
  violencia: ['doméstica', 'agressão', 'ameaça'],
  delegacia: ['polícia', 'delegacia da mulher', 'perto', 'localização'],
  cras: ['perto', 'endereço', 'localização', 'assistência social'],
  perto: ['localização', 'mapa', 'endereço'],
};

const ROUTE_KEYWORDS = {
  'preciso-de-ajuda/problema-empresa': 'compra produto serviço cobrança conta cancelamento defeito reclamação procon reembolso devolução garantia estorno',
  'preciso-de-ajuda/orientacao-juridica': 'advogado advogada defensoria assistência gratuita federal estado df',
  'preciso-de-ajuda/golpe': 'fraude estelionato pix banco dinheiro falso roubo roubaram furtaram assalto',
  'servicos-publicos/assistencia-social': 'cras cadunico cadastro único benefício assistência social',
  'servicos-publicos/documentacao': 'cpf identidade cin rg documento pernambuco',
  'meus-direitos/trabalho': 'trabalho vaga carteira clt sine emprego salário salário férias demissão demitido hora extra',
  'preciso-de-ajuda/trabalho': 'trabalho salário atrasado salário não pago férias fgts demitido demissão seguro desemprego registro carteira sem carteira assédio discriminação irregularidade horas extras vínculo rescisão contracheque',
  'servicos-publicos/emprego': 'trabalho vaga carteira clt sine emprego salário desemprego seguro demissão',
  'servicos-publicos/beneficios': 'bpc bolsa família cadastro único idoso benefício assistência social baixa renda pobreza pessoa deficiência',
  'encontre-um-local/atendimento-juridico': 'advogado advogada defensoria gratuita assistência jurídica',
  'encontre-um-local/ongs': 'ong organização organização social associação instituto',
  'encontre-um-local/mapa': 'local endereço perto próximo localização mapa atendimento delegacia da mulher cras defensoria pública hospital município pernambuco',
  'denuncias/violencia': 'doméstica agressão ameaça proteção mulher disque ligue',
  'denuncias/crimes': 'crime roubo furto assalto polícia disque denúncia registro boletim',
  'preciso-de-ajuda/violencia': 'doméstica agressão ameaça proteção mulher disque ligue',
  'informacao/leis': 'constituição legislação lei norma texto oficial linguagem simples',
};

const normalize = (value = '') => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const terms = (value) => normalize(value).split(/\s+/).filter((term) => term && !STOP_WORDS.has(term));

function expand(term) {
  const variants = new Set([term]);
  if (term.endsWith('oes') && term.length > 4) variants.add(`${term.slice(0, -3)}ao`);
  if (term.endsWith('aes') && term.length > 4) variants.add(`${term.slice(0, -3)}ao`);
  if (term.endsWith('es') && term.length > 4) variants.add(term.slice(0, -2));
  if (term.endsWith('s') && term.length > 3) variants.add(term.slice(0, -1));
  for (const synonym of SYNONYMS[term] || []) variants.add(normalize(synonym));
  return [...variants];
}

const wordForms = (word) => {
  const forms = new Set([word]);
  if (word.endsWith('oes') && word.length > 4) forms.add(`${word.slice(0, -3)}ao`);
  if (word.endsWith('aes') && word.length > 4) forms.add(`${word.slice(0, -3)}ao`);
  if (word.endsWith('es') && word.length > 4) forms.add(word.slice(0, -2));
  if (word.endsWith('s') && word.length > 3) forms.add(word.slice(0, -1));
  return [...forms];
};

function createRecords() {
  const records = [];
  for (const section of SECTIONS) {
    records.push({
      type: 'section',
      id: section.id,
      title: section.heading || section.label,
      subtitle: section.desc,
      href: `#/${section.id}`,
      icon: section.icon,
      fields: {
        title: section.heading || section.label,
        // Áreas não herdam termos de todos os temas: isso evitava que buscas específicas
        // como "advogado grátis" retornassem uma seção genérica como falso positivo.
        keywords: `${section.label} ${section.desc}`,
        details: section.sub || '',
      },
    });

    for (const topic of section.topics) {
      const route = `${section.id}/${topic.id}`;
      const editorial = EDITORIAL[route];
      const relatedResources = Array.isArray(topic.res)
        ? topic.res.map((id) => RESOURCES[id]).filter(Boolean)
        : [];
      const resourceText = relatedResources.map((resource) => `${resource.title} ${resource.desc} ${resource.tags}`).join(' ');
      records.push({
        type: 'topic',
        id: route,
        title: topic.title,
        subtitle: `${section.label} · ${topic.desc}`,
        href: `#/${route}`,
        icon: topic.icon,
        fields: {
          title: topic.title,
          keywords: `${section.label} ${topic.desc} ${ROUTE_KEYWORDS[route] || ''} ${resourceText}`,
          details: `${editorial?.summary || ''} ${editorial?.note || ''}`,
        },
      });
    }
  }

  for (const [id, resource] of Object.entries(RESOURCES)) {
    records.push({
      type: 'resource',
      id,
      title: resource.title,
      subtitle: resource.desc,
      group: resource.group,
      fields: {
        title: resource.title,
        keywords: `${resource.tags || ''} ${resource.group || ''}`,
        details: resource.desc,
      },
    });
  }
  return records;
}

const SEARCH_RECORDS = createRecords();

function rankRecord(record, queryTerms, normalizedQuery) {
  const fields = Object.fromEntries(
    Object.entries(record.fields).map(([key, value]) => [key, normalize(value)]),
  );
  let score = fields.title.includes(normalizedQuery) ? 14 : 0;

  for (const queryTerm of queryTerms) {
    const variants = expand(queryTerm);
    const contains = (text) => variants.some((variant) => {
      if (variant.includes(' ')) return (` ${text} `).includes(` ${variant} `);
      return text.split(' ').some((word) => wordForms(word).includes(variant));
    });
    const inTitle = contains(fields.title);
    const inKeywords = contains(fields.keywords);
    const inDetails = contains(fields.details);
    if (!inTitle && !inKeywords && !inDetails) return 0;
    score += (inTitle ? 8 : 0) + (inKeywords ? 5 : 0) + (inDetails ? 3 : 0);
  }
  return score;
}

export function searchSite(query) {
  const queryTerms = terms(query);
  if (!queryTerms.length) return { sections: [], topics: [], resources: [], total: 0 };

  const normalizedQuery = normalize(query);
  const matches = SEARCH_RECORDS
    .map((record) => ({ ...record, score: rankRecord(record, queryTerms, normalizedQuery) }))
    .filter((record) => record.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'pt-BR'));

  const sections = matches.filter((record) => record.type === 'section');
  const topics = matches.filter((record) => record.type === 'topic');
  const resources = matches.filter((record) => record.type === 'resource');
  return { sections, topics, resources, total: matches.length };
}
