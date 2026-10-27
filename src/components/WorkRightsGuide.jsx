import { ExternalLinkCard } from './Cards.jsx';
import { EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { RESOURCES } from '../data/resources.js';

const SITUATIONS = [
  {
    title: 'Fui demitido',
    description: 'Se a dispensa foi sem justa causa, confira se você atende aos requisitos do Seguro-Desemprego e como pedir o benefício. A FAQ oficial informa que o trabalhador formal pode solicitar do 7º ao 120º dia após a demissão; há regras próprias para trabalhador doméstico.',
    links: [
      ['seguro-desemprego', 'Ver requisitos e solicitar'],
      ['seguro-desemprego-faq', 'Conferir prazo e dúvidas'],
    ],
  },
  {
    title: 'Não recebi salário, férias ou depósitos do FGTS',
    description: 'Anote as datas e guarde comprovantes, como contracheques, extratos, escalas e mensagens. Para informação sobre direitos e serviços, fale com o Alô Trabalho. Para relatar uma irregularidade à fiscalização, consulte o canal do Ministério do Trabalho.',
    links: [
      ['mte-alo-trabalho', 'Ligar 158 para tirar dúvidas'],
      ['mte-denuncia-trabalhista', 'Denunciar irregularidade ao MTE'],
    ],
  },
  {
    title: 'Meu trabalho não aparece ou está errado na Carteira Digital',
    description: 'Consulte as informações da Carteira de Trabalho Digital (CTPS Digital) e veja a FAQ oficial. Ela explica quais tipos de vínculo aparecem no aplicativo e o que fazer com dados incorretos.',
    links: [
      ['ctps-digital-faq', 'Ver dúvidas sobre a Carteira Digital'],
      ['mte-alo-trabalho', 'Ligar 158 para orientação'],
    ],
  },
  {
    title: 'Estou sofrendo assédio, discriminação ou outra irregularidade',
    description: 'O MPT em Pernambuco recebe denúncias sobre irregularidades no trabalho. Para esclarecer dúvidas sobre direitos e serviços, o próprio MPT orienta procurar o Alô Trabalho, do Ministério do Trabalho e Emprego.',
    links: [
      ['mpt-pe-denuncia', 'Consultar canal de denúncias do MPT-PE'],
      ['mte-denuncia-trabalhista', 'Acessar denúncia trabalhista do MTE'],
    ],
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
              <div className="work-scenario-links">
                {situation.links.map(([id, label]) => (
                  <a key={id} href={RESOURCES[id].url} {...(RESOURCES[id].kind === 'tel' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
                    {label} →{RESOURCES[id].kind !== 'tel' && <span className="sr-only"> (abre em nova aba)</span>}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="work-references" aria-labelledby="work-references-title">
        <h2 id="work-references-title" className="h2">Referências gerais</h2>
        <div className="grid">
          <ExternalLinkCard id="clt" />
          <ExternalLinkCard id="trabalho-servicos" />
        </div>
        <p className="source-date">Links e orientações revisados em {new Date(`${EDITORIAL_REVIEWED_AT}T12:00:00`).toLocaleDateString('pt-BR')}. Confirme prazos e requisitos nos canais oficiais.</p>
      </section>
    </>
  );
}
