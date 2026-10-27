import { EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { RESOURCES } from '../data/resources.js';
import { GuideActions, LawCitation } from './GuideEvidence.jsx';

const SITUATIONS = [
  {
    title: 'Não consegui vaga ou preciso transferir de escola',
    description: 'Peça orientação à secretaria da escola e confirme se a vaga pertence à rede municipal ou estadual. Para crianças e adolescentes, o Estatuto da Criança e do Adolescente prevê acesso à escola pública e gratuita próxima da residência. Se você é adulto e quer voltar a estudar, pergunte à rede sobre Educação de Jovens e Adultos (EJA). Calendário e procedimento de matrícula são definidos pela rede responsável.',
    law: { name: 'Estatuto da Criança e do Adolescente (ECA)', article: 'art. 53, incisos I e V', summary: 'Garante igualdade de condições para acesso e permanência na escola e acesso à escola pública e gratuita próxima da residência, observadas as regras legais.', source: 'eca' },
    actions: [{ id: 'eca', label: 'Consultar o ECA' }, { id: 'see-pe-ouvidoria', label: 'Falar com a Ouvidoria da SEE-PE (rede estadual)' }],
  },
  {
    title: 'Meu filho sofre bullying, discriminação ou violência na escola',
    description: 'Registre datas e o que aconteceu, comunique a gestão escolar e pergunte quais medidas de proteção e prevenção serão adotadas. A legislação prevê ações de prevenção ao bullying. Se houver violação de direitos de criança ou adolescente, procure o Disque 100 ou o Conselho Tutelar do município.',
    law: { name: 'Lei nº 13.185/2015', article: 'arts. 4º e 5º', summary: 'Institui ações de prevenção e combate à intimidação sistemática e determina que escolas e clubes assegurem medidas de conscientização, prevenção, diagnose e combate.', source: 'lei-bullying' },
    actions: [{ id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }, { id: 'see-pe-ouvidoria', label: 'Falar com a SEE-PE (rede estadual)' }],
    mapLink: true,
  },
  {
    title: 'A escola não oferece o apoio de que um aluno com deficiência precisa',
    description: 'Peça uma conversa com a direção e descreva por escrito as barreiras e os apoios necessários. A Lei Brasileira de Inclusão prevê um sistema educacional inclusivo e condições de acesso, permanência, participação e aprendizagem.',
    law: { name: 'Lei Brasileira de Inclusão (Lei nº 13.146/2015)', article: 'arts. 27 e 28', summary: 'Garante sistema educacional inclusivo em todos os níveis e prevê medidas para acesso, permanência, participação e aprendizagem da pessoa com deficiência.', source: 'lbi-educacao' },
    actions: [{ id: 'lbi-educacao', label: 'Consultar educação inclusiva na LBI' }, { id: 'see-pe-ouvidoria', label: 'Falar com a SEE-PE (rede estadual)' }],
  },
  {
    title: 'Discordo de uma nota ou do tratamento recebido',
    description: 'Peça à escola os critérios usados e qual é o procedimento para revisão. O ECA prevê que crianças e adolescentes possam contestar critérios de avaliação e recorrer às instâncias escolares superiores.',
    law: { name: 'Estatuto da Criança e do Adolescente (ECA)', article: 'art. 53, inciso III', summary: 'Garante ao estudante o direito de contestar critérios avaliativos e recorrer às instâncias escolares superiores. O procedimento de recurso deve ser consultado na rede de ensino.', source: 'eca' },
    actions: [{ id: 'eca', label: 'Consultar o direito de contestar avaliação' }, { id: 'see-pe-ouvidoria', label: 'Falar com a SEE-PE (rede estadual)' }],
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
                <LawCitation law={situation.law} />
                <GuideActions actions={situation.actions} />
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
