import { ResourceLinkList } from './Cards.jsx';
import { EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { GuideActions, LawCitation } from './GuideEvidence.jsx';

const SITUATIONS = [
  {
    title: 'Fui demitido',
    description: 'Se a dispensa foi sem justa causa, confira se você atende aos requisitos do Seguro-Desemprego e como pedir o benefício. A FAQ oficial informa que o trabalhador formal pode solicitar do 7º ao 120º dia após a demissão; há regras próprias para trabalhador doméstico.',
    law: { name: 'Constituição Federal', article: 'art. 7º, incisos II e III', summary: 'Reconhece o seguro-desemprego em caso de desemprego involuntário e o FGTS. A modalidade da demissão e os requisitos legais determinam o que pode ser solicitado.', source: 'constituicao' },
    actions: [{ id: 'seguro-desemprego', label: 'Solicitar ou acompanhar o Seguro-Desemprego' }, { id: 'seguro-desemprego-faq', label: 'Consultar prazos e requisitos' }],
  },
  {
    title: 'Não recebi salário, férias ou depósitos do FGTS',
    description: 'Anote as datas e guarde comprovantes, como contracheques, extratos, escalas e mensagens. Para informação sobre direitos e serviços, fale com o Alô Trabalho. Para relatar uma irregularidade à fiscalização, consulte o canal do Ministério do Trabalho.',
    law: { name: 'Consolidação das Leis do Trabalho (CLT)', article: 'arts. 459 e 464', summary: 'Estabelece regras sobre prazo e comprovação do pagamento de salário. A apuração de valores e atrasos depende do contrato, das datas e dos registros do caso.', source: 'clt' },
    actions: [{ id: 'mte-denuncia-trabalhista', label: 'Denunciar irregularidade ao Ministério do Trabalho' }, { id: 'mte-alo-trabalho', label: 'Ligar 158 para orientação' }, { id: 'mpt-pe-denuncia', label: 'Denunciar ao MPT em Pernambuco' }],
  },
  {
    title: 'Meu trabalho não aparece ou está errado na Carteira Digital',
    description: 'Consulte as informações da Carteira de Trabalho Digital (CTPS Digital) e veja a FAQ oficial. Ela explica quais tipos de vínculo aparecem no aplicativo e o que fazer com dados incorretos.',
    law: { name: 'Consolidação das Leis do Trabalho (CLT)', article: 'art. 29', summary: 'Prevê a anotação de informações do contrato de trabalho na carteira profissional. O procedimento de correção varia conforme o dado e o tipo de vínculo.', source: 'clt' },
    actions: [{ id: 'ctps-digital-faq', label: 'Consultar como corrigir dados da Carteira Digital' }, { id: 'mte-alo-trabalho', label: 'Ligar 158 para orientação' }],
  },
  {
    title: 'Estou sofrendo assédio, discriminação ou outra irregularidade',
    description: 'O MPT em Pernambuco recebe denúncias sobre irregularidades no trabalho. Para esclarecer dúvidas sobre direitos e serviços, o próprio MPT orienta procurar o Alô Trabalho, do Ministério do Trabalho e Emprego.',
    law: { name: 'Constituição Federal', article: 'art. 5º, incisos V e X', summary: 'Protege direitos de resposta, honra, imagem, intimidade e vida privada. Assédio e discriminação podem envolver outras normas e exigem análise dos fatos.', source: 'constituicao' },
    actions: [{ id: 'mpt-pe-denuncia', label: 'Registrar denúncia no MPT-PE' }, { id: 'mte-denuncia-trabalhista', label: 'Denunciar ao Ministério do Trabalho' }, { id: 'mte-alo-trabalho', label: 'Ligar 158 para tirar dúvidas' }],
  },
];

export function WorkRightsGuide() {
  return (
    <>
      <div className="editorial work-intro">
        <p>Escolha a situação mais parecida com a sua. Os próximos passos mudam conforme o tipo de trabalho e os detalhes do caso; esta página não calcula valores nem confirma se você tem direito a um pagamento.</p>
      </div>
      <section className="work-guide" aria-labelledby="work-guide-title">
        <h2 id="work-guide-title" className="h2">O que aconteceu?</h2>
        <div className="work-scenarios">
          {SITUATIONS.map((situation) => (
            <article className="work-scenario" key={situation.title}>
              <h3>{situation.title}</h3>
              <p>{situation.description}</p>
              <LawCitation law={situation.law} />
              <GuideActions actions={situation.actions} />
            </article>
          ))}
        </div>
      </section>
      <section className="work-references" aria-labelledby="work-references-title">
        <h2 id="work-references-title" className="h2">Referências gerais</h2>
        <ResourceLinkList ids={['clt', 'trabalho-servicos']} />
        <p className="source-date">Links e orientações revisados em {new Date(`${EDITORIAL_REVIEWED_AT}T12:00:00`).toLocaleDateString('pt-BR')}. Confirme prazos e requisitos nos canais oficiais.</p>
      </section>
    </>
  );
}
