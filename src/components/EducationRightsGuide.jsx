import { EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { RESOURCES } from '../data/resources.js';

const SITUATIONS = [
  {
    title: 'Não consegui vaga ou preciso transferir de escola',
    description: 'Peça orientação à secretaria da escola e confirme se a vaga pertence à rede municipal ou estadual. Para crianças e adolescentes, o Estatuto da Criança e do Adolescente prevê acesso à escola pública e gratuita próxima da residência. Se você é adulto e quer voltar a estudar, pergunte à rede sobre Educação de Jovens e Adultos (EJA). Calendário e procedimento de matrícula são definidos pela rede responsável.',
    links: [['eca', 'Consultar direito à educação'], ['see-pe-ouvidoria', 'Falar com a rede estadual de Pernambuco']],
  },
  {
    title: 'Meu filho sofre bullying, discriminação ou violência na escola',
    description: 'Registre datas e o que aconteceu, comunique a gestão escolar e pergunte quais medidas de proteção e prevenção serão adotadas. A legislação prevê ações de prevenção ao bullying. Se houver violação de direitos de criança ou adolescente, procure o Disque 100 ou o Conselho Tutelar do município.',
    links: [['lei-bullying', 'Consultar a lei de prevenção ao bullying'], ['d100-tel', 'Ligar para o Disque 100']],
    mapLink: true,
  },
  {
    title: 'A escola não oferece o apoio de que um aluno com deficiência precisa',
    description: 'Peça uma conversa com a direção e descreva por escrito as barreiras e os apoios necessários. A Lei Brasileira de Inclusão prevê um sistema educacional inclusivo e condições de acesso, permanência, participação e aprendizagem.',
    links: [['lbi-educacao', 'Consultar educação inclusiva'], ['see-pe-ouvidoria', 'Falar com a rede estadual de Pernambuco']],
  },
  {
    title: 'Discordo de uma nota ou do tratamento recebido',
    description: 'Peça à escola os critérios usados e qual é o procedimento para revisão. O ECA prevê que crianças e adolescentes possam contestar critérios de avaliação e recorrer às instâncias escolares superiores.',
    links: [['eca', 'Consultar direitos do estudante'], ['ldb', 'Consultar a LDB']],
  },
];

export function EducationRightsGuide() {
  return (
    <>
      <div className="editorial education-intro">
        <p>Comece pela escola. Se a questão não for resolvida, procure a Secretaria de Educação responsável pela rede: municipal para escolas municipais, estadual para escolas estaduais. Os canais e prazos não são iguais em todas as cidades.</p>
      </div>
      <section className="education-guide" aria-labelledby="education-guide-title">
        <h2 id="education-guide-title" className="h2">O que aconteceu?</h2>
        <div className="education-scenarios">
          {SITUATIONS.map((situation) => (
            <article className="education-scenario" key={situation.title}>
              <h3>{situation.title}</h3>
              <p>{situation.description}</p>
              <div className="education-scenario-links">
                {situation.links.map(([id, label]) => (
                  <a key={id} href={RESOURCES[id].url} {...(RESOURCES[id].kind === 'tel' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                    {label} →{RESOURCES[id].kind !== 'tel' && <span className="sr-only"> (abre em nova aba)</span>}
                  </a>
                ))}
                {situation.mapLink && <a href="#/encontre-um-local/mapa?service=council">Buscar o Conselho Tutelar do município →</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="education-network" aria-labelledby="education-network-title">
        <h2 id="education-network-title" className="h2">Canal da rede estadual em Pernambuco</h2>
        <p>Para reclamações, solicitações ou denúncias sobre escolas estaduais, consulte a Ouvidoria da Secretaria de Educação de Pernambuco. Em escolas municipais, procure a Secretaria de Educação do próprio município.</p>
        <a className="btn" href={RESOURCES['see-pe-ouvidoria'].url} target="_blank" rel="noopener noreferrer">Acessar a Ouvidoria da SEE-PE<span className="sr-only"> (abre em nova aba)</span></a>
      </section>
      <p className="source-date">Referências revisadas em {new Date(`${EDITORIAL_REVIEWED_AT}T12:00:00`).toLocaleDateString('pt-BR')}.</p>
    </>
  );
}
