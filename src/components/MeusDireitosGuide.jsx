import { EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { ExternalLinkCard } from './Cards.jsx';

const GUIDES = {
  'direitos-basicos': {
    intro: 'Direitos fundamentais valem para todas as pessoas. Se uma situação concreta estiver acontecendo, comece pelo tema correspondente (saúde, escola, trabalho, moradia ou proteção) para encontrar orientações mais específicas.',
    note: 'Quando um órgão público não responder, peça o número de protocolo e pergunte qual ouvidoria recebe manifestações. O canal adequado depende do assunto e do órgão.',
    situations: [
      { title: 'Um serviço público negou atendimento ou não respondeu', text: 'Anote o órgão, a data e o que foi solicitado. Peça a justificativa e o protocolo; depois procure a ouvidoria responsável pelo serviço ou pela esfera de governo.' },
      { title: 'Não sei por onde começar', text: 'Escolha o assunto mais próximo do problema. Em risco imediato à vida ou à segurança, procure o serviço de emergência adequado.' },
    ],
    sources: ['constituicao', 'udhr-unicef', 'govbr-cotidiano', 'mdh-ondh'],
  },
  saude: {
    intro: 'No Sistema Único de Saúde (SUS), você pode buscar informações sobre atendimento, pedir serviços e registrar reclamação ou denúncia. A rede e os fluxos de encaminhamento variam conforme o município e o serviço.',
    note: 'A Ouvidoria-Geral do SUS recebe manifestações sobre o SUS; ela não substitui atendimento médico nem serviço de emergência. Em urgência, procure atendimento imediato.',
    situations: [
      { title: 'Preciso encontrar uma unidade de saúde', text: 'Procure a Unidade Básica de Saúde (UBS) de referência do seu município. Para localizar uma unidade ou outro serviço, use a busca de locais e confirme horário, endereço e tipo de atendimento antes de sair.', map: 'Unidade Básica de Saúde (UBS)' },
      { title: 'Não consegui consulta, exame, medicamento ou atendimento', text: 'Peça orientação à unidade ou à Secretaria Municipal de Saúde e guarde protocolos, receitas e comprovantes. Para solicitar informação ou registrar manifestação sobre o SUS, fale com a OuvSUS.' },
      { title: 'Quero reclamar ou elogiar um atendimento do SUS', text: 'A Ouvidoria-Geral do SUS recebe solicitações, reclamações, denúncias, sugestões e elogios e encaminha a manifestação à área competente.' },
    ],
    sources: ['sus-direitos', 'ouvsus', 'meu-sus-digital'],
  },
  consumidor: {
    intro: 'Se um produto veio com defeito, uma cobrança parece errada ou um serviço não foi cumprido, reúna comprovantes e tente registrar o pedido de solução com a empresa. Guarde protocolos e respostas.',
    note: 'O Consumidor.gov.br atende somente empresas cadastradas e não garante acordo. Em Pernambuco, o ReclamaProcon é um canal estadual; confirme no portal as regras e documentos necessários.',
    situations: [
      { title: 'Produto com defeito, serviço malfeito ou compra não entregue', text: 'Guarde nota, contrato, fotos, comprovante de pagamento e protocolos. Registre o problema com a empresa e descreva claramente a solução que está pedindo.' },
      { title: 'Cobrança indevida, cancelamento ou reembolso', text: 'Salve faturas, comprovantes, contrato e pedido de cancelamento. Reclame primeiro com a empresa e mantenha o número de protocolo.' },
      { title: 'A empresa não resolveu', text: 'Confira se ela participa do Consumidor.gov.br. Você também pode consultar o ReclamaProcon de Pernambuco ou o Procon do seu município, se houver.' },
    ],
    sources: ['cdc', 'consumidor-gov', 'consumidor-limites', 'procon-pe-reclamaprocon'],
  },
  moradia: {
    intro: 'Problemas de moradia podem envolver aluguel, risco de perder a casa, falta de habitação adequada ou busca por programa habitacional. O primeiro passo depende de quem administra o imóvel ou programa e da urgência da situação.',
    note: 'Programas habitacionais têm modalidades e critérios diferentes. Inscrição, oferta e atendimento podem depender do município ou do estado; consultar uma página não confirma elegibilidade nem garante moradia.',
    situations: [
      { title: 'Quero saber se há programa habitacional', text: 'Consulte as modalidades e regras oficiais. Para linhas subsidiadas que usam cadastro local, procure o órgão de habitação do seu município ou do estado e confirme se há inscrição aberta.' },
      { title: 'Tenho problema com aluguel, contrato ou despejo', text: 'Guarde contrato, recibos e mensagens. Procure orientação jurídica antes de assinar acordo ou sair do imóvel; a Defensoria competente depende do tipo de caso.' },
      { title: 'Minha casa está em risco ou foi atingida', text: 'Se houver perigo imediato, saia do local e acione a Defesa Civil ou os serviços de emergência do município. Para abrigo e assistência, procure a assistência social local.' },
    ],
    sources: ['habitacao', 'mcmv', 'mcmv-faq', 'cnj-defensoria'],
  },
  mulheres: {
    intro: 'Mulheres têm direito a atendimento sem violência e discriminação. Em situação de violência, a rede pode envolver saúde, assistência social, segurança pública, Justiça e serviços especializados.',
    note: 'O Ligue 180 orienta sobre direitos, recebe denúncias e informa serviços próximos, 24 horas por dia. Em perigo imediato, ligue 190. A busca em mapas pode ter endereços desatualizados; confirme também nos canais oficiais.',
    situations: [
      { title: 'Estou em perigo agora', text: 'Se for seguro, vá para um local protegido e ligue 190. Para orientação e encaminhamento à rede de atendimento, ligue 180.' },
      { title: 'Quero orientação ou denunciar violência', text: 'O Ligue 180 funciona gratuitamente, todos os dias, e informa sobre direitos e serviços próximos. Você pode pedir orientação sem começar pela delegacia.' },
      { title: 'Preciso de atendimento presencial', text: 'Pesquise uma Delegacia Especializada de Atendimento à Mulher (DEAM) ou um Centro de Referência próximo. Confirme endereço e atendimento antes de se deslocar.' , map: 'Delegacia Especializada de Atendimento à Mulher (DEAM)'},
    ],
    sources: ['lei-maria-penha', 'mulheres-ligue180', 'deams-pe-directory', 'd180-tel', 'tel190'],
  },
  criancas: {
    intro: 'Crianças e adolescentes têm direito à proteção integral. Família, comunidade e poder público compartilham responsabilidades; o Conselho Tutelar do município atua na proteção desses direitos.',
    note: 'A página de Conselho Tutelar da Prefeitura do Recife vale para Recife. Para os demais municípios de Pernambuco, procure o Conselho Tutelar local ou a Secretaria Municipal responsável. Em perigo imediato, acione o serviço de emergência.',
    situations: [
      { title: 'Uma criança ou adolescente está sofrendo violência ou negligência', text: 'Se houver perigo imediato, busque ajuda emergencial. Para comunicar violação de direitos, qualquer pessoa pode procurar o Disque 100 ou o Conselho Tutelar do município.' },
      { title: 'Preciso falar com o Conselho Tutelar', text: 'Busque o Conselho Tutelar responsável pelo município onde a criança ou adolescente está. O serviço é municipal; a página abaixo traz somente a referência de Recife.', map: 'Conselho Tutelar' },
      { title: 'Quero entender os direitos previstos em lei', text: 'Consulte o Estatuto da Criança e do Adolescente (ECA), que reúne direitos e medidas de proteção.' },
    ],
    sources: ['eca-texto', 'd100-tel', 'ct-recife'],
  },
  idosos: {
    intro: 'A lei reconhece direitos específicos da pessoa idosa, incluindo prioridade em situações previstas e proteção contra negligência, discriminação e violência. Para um caso concreto, procure o serviço público responsável na sua cidade.',
    note: 'O Disque 100 recebe denúncias de violações de direitos humanos. Benefícios e documentos têm critérios próprios; consulte o canal oficial antes de tomar decisões.',
    situations: [
      { title: 'Uma pessoa idosa está sofrendo violência ou abandono', text: 'Se houver perigo imediato, procure os serviços de emergência. Para comunicar uma violação de direitos, ligue para o Disque 100.' },
      { title: 'Quero saber sobre prioridade e direitos', text: 'Consulte o Estatuto da Pessoa Idosa e peça ao serviço público que explique como solicitar o atendimento prioritário.' },
      { title: 'Quero saber sobre BPC ou Carteira da Pessoa Idosa', text: 'Consulte os critérios vigentes diretamente nas páginas oficiais. A idade, renda e outros requisitos variam de acordo com o benefício ou documento.' },
    ],
    sources: ['estatuto-idoso', 'carteira-idosa', 'bpc-pcd-idoso', 'd100-tel'],
  },
  pcd: {
    intro: 'A Lei Brasileira de Inclusão protege direitos da pessoa com deficiência e trata de igualdade, acessibilidade e inclusão. Barreiras podem ocorrer em serviços, transporte, escola, trabalho e atendimento.',
    note: 'O BPC é um benefício assistencial com critérios próprios; deficiência, por si só, não confirma a concessão. Para denunciar violação de direitos humanos, existe o Disque 100.',
    situations: [
      { title: 'Fui impedido de acessar um local ou serviço', text: 'Registre o que ocorreu, quando e onde, e peça a justificativa do estabelecimento ou órgão. Consulte seus direitos na Lei Brasileira de Inclusão e procure a ouvidoria ou órgão competente.' },
      { title: 'Preciso de apoio ou adaptação na escola', text: 'Converse com a direção e descreva as barreiras e os apoios necessários. A rede responsável é municipal ou estadual conforme a escola.' },
      { title: 'Quero saber se posso solicitar o BPC', text: 'Confira os critérios de renda, cadastro e avaliação na fonte oficial. O CRAS pode orientar sobre Cadastro Único; a análise do benefício é feita pelos canais oficiais do governo federal.' },
      { title: 'Quero denunciar discriminação ou violação de direitos', text: 'O Disque 100 recebe relatos de violações de direitos humanos, inclusive contra pessoas com deficiência.' },
    ],
    sources: ['lbi', 'bpc-pcd-idoso', 'cras', 'd100-tel', 'mdh-ondh'],
  },
  'outros-grupos': {
    intro: 'Povos indígenas, comunidades quilombolas e tradicionais, pessoas LGBTQIA+ e pessoas em situação de rua podem enfrentar violações específicas. Esta página oferece uma porta de entrada e não substitui orientações próprias de cada grupo ou comunidade.',
    note: 'O Disque 100 recebe denúncias de violações de direitos humanos e qualquer pessoa pode relatar. Em risco imediato, procure o serviço de emergência. Para demandas coletivas ou culturais, busque também o órgão público especializado.',
    situations: [
      { title: 'Sofri discriminação, ameaça ou violência', text: 'Guarde, se puder, informações sobre o ocorrido e procure uma rede de apoio segura. O Disque 100 recebe denúncias de violações de direitos humanos.' },
      { title: 'Preciso de orientação sobre direitos indígenas', text: 'Consulte os materiais institucionais da Funai e procure o órgão ou organização de confiança que atende a comunidade.' },
      { title: 'Preciso de orientação sobre direitos LGBTQIA+', text: 'Consulte informações oficiais sobre o atendimento do Disque 100 a pessoas LGBTQIA+.' },
      { title: 'Preciso de atendimento social perto de mim', text: 'A assistência social é organizada localmente. Procure o Centro de Referência de Assistência Social (CRAS) do município e confirme os serviços disponíveis.' , map: 'Centro de Referência de Assistência Social (CRAS)'},
    ],
    sources: ['d100-tel', 'd100-wa', 'mdh-ondh', 'funai-cidadania', 'lgbtqia-disque100', 'cras'],
  },
};

export function MeusDireitosGuide({ topicId }) {
  const guide = GUIDES[topicId];
  if (!guide) return null;
  return (
    <>
      <div className="editorial rights-guide-intro">
        <p className="territory-note"><strong>Foco do projeto:</strong> Pernambuco. A disponibilidade e o canal de atendimento podem variar por município.</p>
        <p>{guide.intro}</p>
        <p className="editorial-note">{guide.note}</p>
      </div>
      <section className="rights-guide" aria-labelledby="rights-guide-title">
        <h2 id="rights-guide-title" className="h2">O que aconteceu?</h2>
        <div className="rights-situations">
          {guide.situations.map((situation) => (
            <article className="rights-situation" key={situation.title}>
              <h3>{situation.title}</h3>
              <p>{situation.text}</p>
              {situation.map && <a href={`#/encontre-um-local/mapa?service=${encodeURIComponent(situation.map)}`}>Buscar {situation.map} perto de mim →</a>}
            </article>
          ))}
        </div>
      </section>
      <section className="rights-references" aria-labelledby="rights-references-title">
        <h2 id="rights-references-title" className="h2">Fontes oficiais e canais</h2>
        <div className="grid">
          {guide.sources.map((id) => <ExternalLinkCard key={id} id={id} />)}
        </div>
        <p className="source-date">Referências revisadas em {new Date(`${EDITORIAL_REVIEWED_AT}T12:00:00`).toLocaleDateString('pt-BR')}. Confirme regras, requisitos e atendimento diretamente na fonte.</p>
      </section>
    </>
  );
}
