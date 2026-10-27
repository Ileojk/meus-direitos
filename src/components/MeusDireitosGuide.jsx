import { EDITORIAL_REVIEWED_AT } from '../data/editorial.js';
import { ExternalLinkCard } from './Cards.jsx';
import { GuideActions, LawCitation } from './GuideEvidence.jsx';

const GUIDES = {
  'direitos-basicos': {
    intro: 'Direitos fundamentais valem para todas as pessoas. Se uma situação concreta estiver acontecendo, comece pelo tema correspondente (saúde, escola, trabalho, moradia ou proteção) para encontrar orientações mais específicas.',
    note: 'Quando um órgão público não responder, peça o número de protocolo e pergunte qual ouvidoria recebe manifestações. O canal adequado depende do assunto e do órgão.',
    situations: [
      { title: 'Um serviço público negou atendimento ou não respondeu', text: 'Anote o órgão, a data e o que foi solicitado. Peça a justificativa e o número de protocolo; se não resolver, registre manifestação na ouvidoria responsável. O Fala.BR atende órgãos federais participantes; estado e município usam canais próprios.', law: { name: 'Lei nº 13.460/2017', article: 'arts. 5º, 6º e 10', summary: 'Define diretrizes de atendimento público — como respeito, acessibilidade e serviço adequado — e permite apresentar manifestação sobre o serviço público.', source: 'lei-servicos-publicos' }, actions: [{ id: 'falabr', label: 'Registrar manifestação em órgão federal no Fala.BR' }, { id: 'lei-servicos-publicos', label: 'Consultar a lei de serviços públicos' }] },
      { title: 'Quero pedir uma informação a um órgão público', text: 'Faça o pedido ao órgão que tem a informação e guarde o protocolo. A Lei de Acesso à Informação explica como pedir documentos e dados públicos; ela não substitui o canal para urgências ou reclamações de serviço.', law: { name: 'Lei nº 12.527/2011 (LAI)', article: 'arts. 10 e 11', summary: 'Qualquer pessoa pode pedir informação pública. O órgão deve responder no prazo legal ou justificar eventual negativa, conforme as regras da lei.', source: 'lai' }, actions: [{ id: 'lai', label: 'Consultar a Lei de Acesso à Informação' }, { id: 'govbr-cotidiano', label: 'Entender como buscar seus direitos' }] },
      { title: 'Não sei por onde começar', text: 'A Constituição lista direitos sociais como saúde, educação, trabalho, moradia e assistência. Escolha o tema correspondente para conhecer regras mais específicas e canais de atendimento.', law: { name: 'Constituição Federal', article: 'art. 6º', summary: 'Reconhece direitos sociais, incluindo saúde, educação, trabalho e moradia. As regras de acesso e os serviços concretos são detalhados em outras leis e políticas públicas.', source: 'constituicao' }, actions: [{ id: 'constituicao', label: 'Consultar a Constituição Federal' }] },
    ],
    sources: ['udhr-unicef', 'govbr-cotidiano', 'mdh-ondh'],
  },
  saude: {
    intro: 'No Sistema Único de Saúde (SUS), você pode buscar informações sobre atendimento, pedir serviços e registrar reclamação ou denúncia. A rede e os fluxos de encaminhamento variam conforme o município e o serviço.',
    note: 'A Ouvidoria-Geral do SUS recebe manifestações sobre o SUS; ela não substitui atendimento médico nem serviço de emergência. Em urgência, procure atendimento imediato.',
    situations: [
      { title: 'Preciso encontrar uma unidade de saúde', text: 'Procure a Unidade Básica de Saúde (UBS) de referência do seu município. Para localizar uma unidade, use a busca de locais e confirme horário, endereço e tipo de atendimento antes de sair.', map: 'Unidade Básica de Saúde (UBS)', law: { name: 'Constituição Federal', article: 'art. 196', summary: 'Define a saúde como direito de todos e dever do Estado, com acesso universal e igualitário às ações e serviços de saúde.', source: 'constituicao' }, actions: [{ id: 'sus-direitos', label: 'Conhecer os direitos de quem usa o SUS' }] },
      { title: 'Não consegui consulta, exame, medicamento ou atendimento', text: 'Peça à unidade ou à Secretaria Municipal de Saúde a orientação e, se houver fila ou regulação, pergunte como acompanhar o pedido. Guarde protocolos, receitas e comprovantes. Se não houver resposta, registre manifestação na OuvSUS.', law: { name: 'Lei nº 8.080/1990', article: 'art. 7º, incisos I e IV', summary: 'O SUS deve observar universalidade de acesso e igualdade da assistência. A necessidade e o fluxo do atendimento são avaliados pela rede de saúde.', source: 'lei-sus' }, actions: [{ id: 'ouvsus', label: 'Registrar pedido ou reclamação na OuvSUS' }, { id: 'tel136', label: 'Ligar para o Disque Saúde 136' }] },
      { title: 'Quero reclamar ou elogiar um atendimento do SUS', text: 'A Ouvidoria-Geral do SUS recebe solicitações, reclamações, denúncias, sugestões e elogios e encaminha a manifestação à área competente. Informe o local e a data e guarde o protocolo.', law: { name: 'Lei nº 13.460/2017', article: 'arts. 9º e 10', summary: 'Prevê o direito de apresentar manifestação sobre serviços públicos e receber resposta, respeitadas as regras do órgão.', source: 'lei-servicos-publicos' }, actions: [{ id: 'ouvsus', label: 'Registrar manifestação na OuvSUS' }] },
    ],
    sources: ['sus-direitos', 'ouvsus', 'meu-sus-digital'],
  },
  consumidor: {
    intro: 'Se um produto veio com defeito, uma cobrança parece errada ou um serviço não foi cumprido, reúna comprovantes e tente registrar o pedido de solução com a empresa. Guarde protocolos e respostas.',
    note: 'O Consumidor.gov.br atende somente empresas cadastradas e não garante acordo. Em Pernambuco, o ReclamaProcon é um canal estadual; confirme no portal as regras e documentos necessários.',
    situations: [
      { title: 'Produto com defeito, serviço malfeito ou compra não entregue', text: 'Guarde nota, contrato, fotos, comprovante de pagamento e protocolos. O CDC prevê opções de solução conforme o tipo de produto ou serviço e o caso; prazos e exceções variam.', law: { name: 'Código de Defesa do Consumidor', article: 'arts. 18 e 20', summary: 'Trata da responsabilidade por vícios de produtos e serviços e das alternativas de reparação previstas na lei. A solução concreta depende dos fatos e dos prazos aplicáveis.', source: 'cdc' }, actions: [{ id: 'consumidor-gov', label: 'Reclamar com a empresa no Consumidor.gov.br' }, { id: 'procon-pe-reclamaprocon', label: 'Registrar no ReclamaProcon-PE' }] },
      { title: 'Cobrança indevida, cancelamento ou reembolso', text: 'Salve faturas, comprovantes, contrato e pedido de cancelamento. Conteste a cobrança com a empresa e guarde o protocolo. O CDC prevê proteção contra cobrança indevida; eventual devolução em dobro tem condições e exceções legais.', law: { name: 'Código de Defesa do Consumidor', article: 'arts. 6º, 42 e 49', summary: 'O art. 42 protege contra cobrança com constrangimento; o parágrafo único prevê repetição em dobro quando cabível e ressalva engano justificável. O art. 49 trata do arrependimento em contratações fora do estabelecimento, nos casos da lei.', source: 'cdc' }, actions: [{ id: 'consumidor-gov', label: 'Contestar com a empresa no Consumidor.gov.br' }, { id: 'procon-pe-reclamaprocon', label: 'Registrar no ReclamaProcon-PE' }] },
      { title: 'A empresa não resolveu', text: 'Confira se ela participa do Consumidor.gov.br e registre sua reclamação. Se não participa ou o caso não for resolvido, procure o Procon de Pernambuco ou o Procon do seu município, se houver.', law: { name: 'Código de Defesa do Consumidor', article: 'arts. 5º e 6º', summary: 'Prevê instrumentos de defesa do consumidor e direitos básicos, incluindo informação clara e proteção contra danos. O Procon pode orientar e atuar conforme sua competência.', source: 'cdc' }, actions: [{ id: 'consumidor-gov', label: 'Abrir reclamação no Consumidor.gov.br' }, { id: 'procon-pe-reclamaprocon', label: 'Acessar o ReclamaProcon-PE' }] },
    ],
    sources: ['consumidor-gov', 'consumidor-limites', 'procon-pe-reclamaprocon'],
  },
  moradia: {
    intro: 'Problemas de moradia podem envolver aluguel, risco de perder a casa, falta de habitação adequada ou busca por programa habitacional. O primeiro passo depende de quem administra o imóvel ou programa e da urgência da situação.',
    note: 'Programas habitacionais têm modalidades e critérios diferentes. Inscrição, oferta e atendimento podem depender do município ou do estado; consultar uma página não confirma elegibilidade nem garante moradia.',
    situations: [
      { title: 'Quero saber se há programa habitacional', text: 'Consulte modalidades e regras oficiais. Para linhas subsidiadas que usam cadastro local, procure o órgão de habitação do município ou do estado e confirme se há inscrição aberta.', law: { name: 'Constituição Federal', article: 'art. 6º', summary: 'Reconhece a moradia como direito social. Programas, critérios, inscrições e oferta são definidos em políticas e normas específicas; o artigo não garante vaga automática em programa.', source: 'constituicao' }, actions: [{ id: 'mcmv-faq', label: 'Consultar regras e inscrição do Minha Casa, Minha Vida' }, { id: 'cras', label: 'Ver o serviço CRAS' }] },
      { title: 'Tenho problema com aluguel, contrato ou despejo', text: 'Guarde contrato, recibos e mensagens. A lei define deveres de locador e locatário e procedimentos próprios para encerrar uma locação. Procure orientação jurídica antes de assinar acordo ou sair do imóvel.', law: { name: 'Lei do Inquilinato (Lei nº 8.245/1991)', article: 'arts. 22, 23 e 59', summary: 'Define deveres das partes e disciplina ações de despejo. A lei não autoriza concluir, sem analisar o caso e o contrato, que a pessoa deve sair imediatamente.', source: 'lei-inquilinato' }, actions: [{ id: 'cnj-defensoria', label: 'Entender como procurar a Defensoria Pública' }] },
      { title: 'Minha casa está em risco ou foi atingida', text: 'Se houver perigo imediato, saia do local e acione a Defesa Civil ou o serviço de emergência do município. Para abrigo e assistência social, procure o CRAS ou a Secretaria Municipal de Assistência Social.', law: { name: 'Constituição Federal', article: 'arts. 6º e 23, inciso IX', summary: 'Reconhece moradia como direito social e atribui aos entes públicos competência comum para promover programas habitacionais e melhorar condições de moradia.', source: 'constituicao' }, actions: [{ id: 'cras', label: 'Consultar o serviço CRAS' }] },
    ],
    sources: ['habitacao', 'mcmv', 'mcmv-faq', 'cnj-defensoria'],
  },
  mulheres: {
    intro: 'Mulheres têm direito a atendimento sem violência e discriminação. Em situação de violência, a rede pode envolver saúde, assistência social, segurança pública, Justiça e serviços especializados.',
    note: 'O Ligue 180 orienta sobre direitos, recebe denúncias e informa serviços próximos, 24 horas por dia. Em perigo imediato, ligue 190. A busca em mapas pode ter endereços desatualizados; confirme também nos canais oficiais.',
    situations: [
      { title: 'Estou em perigo agora', text: 'Se for seguro, vá para um local protegido e ligue 190. A Lei Maria da Penha prevê medidas protetivas de urgência; quem avalia e determina essas medidas é a autoridade competente.', law: { name: 'Lei Maria da Penha (Lei nº 11.340/2006)', article: 'arts. 18 a 24', summary: 'Prevê medidas protetivas de urgência e providências de proteção à mulher em situação de violência doméstica e familiar. Não é necessário esperar uma página do site para buscar ajuda.', source: 'lei-maria-penha' }, actions: [{ id: 'tel190', label: 'Ligar 190 — emergência policial' }, { id: 'd180-tel', label: 'Ligar 180 — orientação e encaminhamento' }] },
      { title: 'Quero orientação ou denunciar violência', text: 'O Ligue 180 funciona gratuitamente, todos os dias, e informa sobre direitos e serviços próximos. Se preferir, há atendimento por WhatsApp e serviço online. Em risco imediato, ligue 190.', law: { name: 'Lei Maria da Penha (Lei nº 11.340/2006)', article: 'arts. 2º, 3º e 7º', summary: 'Reconhece o direito das mulheres a viver sem violência e descreve formas de violência doméstica e familiar, incluindo a psicológica, sexual, patrimonial e moral.', source: 'lei-maria-penha' }, actions: [{ id: 'd180-tel', label: 'Ligar 180' }, { id: 'd180-wa', label: 'Conversar com o Ligue 180 pelo WhatsApp' }, { id: 'd180-denunciar', label: 'Acessar o canal online do Ligue 180' }] },
      { title: 'Preciso de atendimento presencial', text: 'Pesquise uma Delegacia Especializada de Atendimento à Mulher (DEAM) ou um Centro de Referência próximo. Confirme endereço e atendimento antes de se deslocar; o 180 também informa a rede local.', map: 'Delegacia Especializada de Atendimento à Mulher (DEAM)', law: { name: 'Lei Maria da Penha (Lei nº 11.340/2006)', article: 'arts. 8º e 9º', summary: 'Prevê atuação articulada e assistência à mulher em situação de violência, envolvendo serviços públicos de diferentes áreas.', source: 'lei-maria-penha' }, actions: [{ id: 'deams-pe-directory', label: 'Consultar endereços do MPPE' }, { id: 'd180-tel', label: 'Pedir orientação pelo 180' }] },
    ],
    sources: ['mulheres-ligue180', 'deams-pe-directory', 'd180-tel', 'tel190'],
  },
  criancas: {
    intro: 'Crianças e adolescentes têm direito à proteção integral. Família, comunidade e poder público compartilham responsabilidades; o Conselho Tutelar do município atua na proteção desses direitos.',
    note: 'A página de Conselho Tutelar da Prefeitura do Recife vale para Recife. Para os demais municípios de Pernambuco, procure o Conselho Tutelar local ou a Secretaria Municipal responsável. Em perigo imediato, acione o serviço de emergência.',
    situations: [
      { title: 'Uma criança ou adolescente está sofrendo violência ou negligência', text: 'Se houver perigo imediato, busque ajuda emergencial. Qualquer pessoa pode comunicar violação ao Disque 100 ou ao Conselho Tutelar do município.', law: { name: 'Estatuto da Criança e do Adolescente (ECA)', article: 'arts. 4º, 5º e 13', summary: 'Determina prioridade à proteção e prevê comunicação às autoridades de suspeita ou confirmação de castigo físico, tratamento cruel ou degradante e maus-tratos.', source: 'eca-texto' }, actions: [{ id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }, { id: 'd100-tel', label: 'Ligar 100' }] },
      { title: 'Preciso falar com o Conselho Tutelar', text: 'Busque o Conselho Tutelar responsável pelo município onde a criança ou adolescente está. O serviço é municipal; a página abaixo traz somente a referência de Recife.', map: 'Conselho Tutelar', law: { name: 'Estatuto da Criança e do Adolescente (ECA)', article: 'arts. 131 e 136', summary: 'Define o Conselho Tutelar como órgão permanente e autônomo e lista suas atribuições de proteção. A unidade e o contato são municipais.', source: 'eca-texto' }, actions: [{ id: 'd100-tel', label: 'Ligar para o Disque 100 se não localizar o Conselho' }] },
      { title: 'Quero entender os direitos previstos em lei', text: 'O ECA reúne direitos à vida, saúde, educação, dignidade, respeito e convivência familiar e comunitária, além de medidas para protegê-los.', law: { name: 'Estatuto da Criança e do Adolescente (ECA)', article: 'arts. 3º e 4º', summary: 'Reconhece crianças e adolescentes como sujeitos de direitos e estabelece prioridade absoluta na efetivação desses direitos.', source: 'eca-texto' }, actions: [{ id: 'eca-texto', label: 'Ler o texto completo do ECA' }] },
    ],
    sources: ['d100-denunciar', 'd100-wa', 'ct-recife'],
  },
  idosos: {
    intro: 'A lei reconhece direitos específicos da pessoa idosa, incluindo prioridade em situações previstas e proteção contra negligência, discriminação e violência. Para um caso concreto, procure o serviço público responsável na sua cidade.',
    note: 'O Disque 100 recebe denúncias de violações de direitos humanos. Benefícios e documentos têm critérios próprios; consulte o canal oficial antes de tomar decisões.',
    situations: [
      { title: 'Uma pessoa idosa está sofrendo violência ou abandono', text: 'Se houver perigo imediato, procure os serviços de emergência. Para registrar a denúncia, escolha telefone, WhatsApp ou o canal online do Disque 100.', law: { name: 'Estatuto da Pessoa Idosa (Lei nº 10.741/2003)', article: 'arts. 4º e 19', summary: 'Proíbe negligência e violência e prevê comunicação de suspeita ou confirmação de violência pelos serviços de saúde às autoridades indicadas na lei.', source: 'estatuto-idoso' }, actions: [{ id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }, { id: 'd100-tel', label: 'Ligar 100' }] },
      { title: 'Quero saber sobre prioridade e direitos', text: 'Peça atendimento prioritário e, se ele não for observado, registre a situação no canal do órgão ou estabelecimento. A prioridade prevista em lei não elimina regras específicas de cada serviço.', law: { name: 'Estatuto da Pessoa Idosa (Lei nº 10.741/2003)', article: 'arts. 3º e 71', summary: 'Garante prioridade na efetivação de direitos e prioridade na tramitação de processos, conforme o alcance e as condições previstos na lei.', source: 'estatuto-idoso' }, actions: [{ id: 'estatuto-idoso', label: 'Consultar o Estatuto da Pessoa Idosa' }] },
      { title: 'Quero saber sobre BPC ou Carteira da Pessoa Idosa', text: 'Consulte os critérios vigentes diretamente nas páginas oficiais. Idade, renda, cadastro e demais requisitos variam conforme o benefício ou documento.', law: { name: 'Lei Orgânica da Assistência Social (Lei nº 8.742/1993)', article: 'art. 20', summary: 'Prevê o BPC para pessoa idosa a partir de 65 anos ou pessoa com deficiência, observados os critérios legais. A página do benefício explica documentos e requerimento.', source: 'loas' }, actions: [{ id: 'bpc-pcd-idoso', label: 'Consultar regras do BPC' }, { id: 'carteira-idosa', label: 'Consultar Carteira da Pessoa Idosa' }] },
    ],
    sources: ['carteira-idosa', 'bpc-pcd-idoso', 'd100-denunciar', 'd100-wa'],
  },
  pcd: {
    intro: 'A Lei Brasileira de Inclusão protege direitos da pessoa com deficiência e trata de igualdade, acessibilidade e inclusão. Barreiras podem ocorrer em serviços, transporte, escola, trabalho e atendimento.',
    note: 'O BPC é um benefício assistencial com critérios próprios; deficiência, por si só, não confirma a concessão. Para denunciar violação de direitos humanos, existe o Disque 100.',
    situations: [
      { title: 'Fui impedido de acessar um local ou serviço', text: 'Registre o que ocorreu, quando e onde, e peça a justificativa do estabelecimento ou órgão. A recusa de adaptação razoável pode ser uma forma de discriminação, conforme as circunstâncias.', law: { name: 'Lei Brasileira de Inclusão (Lei nº 13.146/2015)', article: 'art. 4º, § 1º', summary: 'Define discriminação também como recusa de adaptação razoável ou de tecnologia assistiva quando isso prejudica o exercício de direitos.', source: 'lbi' }, actions: [{ id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }] },
      { title: 'Preciso de apoio ou adaptação na escola', text: 'Converse com a direção e descreva as barreiras e os apoios necessários. A rede responsável é municipal ou estadual conforme a escola; peça a resposta por escrito.', law: { name: 'Lei Brasileira de Inclusão (Lei nº 13.146/2015)', article: 'arts. 27 e 28', summary: 'Garante sistema educacional inclusivo e prevê medidas para acesso, permanência, participação e aprendizagem. O apoio deve ser avaliado conforme as necessidades do estudante.', source: 'lbi' }, actions: [{ id: 'see-pe-ouvidoria', label: 'Falar com a Ouvidoria da SEE-PE (rede estadual)' }, { id: 'd100-tel', label: 'Ligar 100 para denunciar violação de direitos' }] },
      { title: 'Quero saber se posso solicitar o BPC', text: 'Confira critérios de renda, cadastro e avaliação na fonte oficial. O CRAS pode orientar sobre Cadastro Único; o requerimento e a análise são feitos pelos canais oficiais do governo federal.', law: { name: 'Lei Orgânica da Assistência Social (Lei nº 8.742/1993)', article: 'art. 20', summary: 'Prevê o BPC para pessoa idosa com 65 anos ou mais ou pessoa com deficiência que atendam aos critérios legais. Deficiência, isoladamente, não confirma elegibilidade.', source: 'loas' }, actions: [{ id: 'bpc-pcd-idoso', label: 'Consultar os critérios oficiais do BPC' }, { id: 'cras', label: 'Buscar orientação no CRAS' }] },
      { title: 'Quero denunciar discriminação ou violação de direitos', text: 'O Disque 100 recebe relatos de violações de direitos humanos, inclusive contra pessoas com deficiência. O serviço encaminha a denúncia aos órgãos competentes; não substitui atendimento emergencial.', law: { name: 'Lei Brasileira de Inclusão (Lei nº 13.146/2015)', article: 'arts. 7º e 88', summary: 'O art. 7º determina que ameaças ou violações sejam comunicadas à autoridade competente. O art. 88 tipifica discriminação contra pessoa com deficiência.', source: 'lbi' }, actions: [{ id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }, { id: 'd100-tel', label: 'Ligar 100' }] },
    ],
    sources: ['bpc-pcd-idoso', 'cras', 'd100-denunciar', 'd100-wa'],
  },
  'outros-grupos': {
    intro: 'Povos indígenas, comunidades quilombolas e tradicionais, pessoas LGBTQIA+ e pessoas em situação de rua podem enfrentar violações específicas. Esta página oferece uma porta de entrada e não substitui orientações próprias de cada grupo ou comunidade.',
    note: 'O Disque 100 recebe denúncias de violações de direitos humanos e qualquer pessoa pode relatar. Em risco imediato, procure o serviço de emergência. Para demandas coletivas ou culturais, busque também o órgão público especializado.',
    situations: [
      { title: 'Sofri discriminação, ameaça ou violência', text: 'Guarde, se puder, informações sobre o ocorrido e procure uma rede de apoio segura. O Disque 100 recebe denúncia por telefone, WhatsApp e serviço online.', law: { name: 'Constituição Federal', article: 'art. 5º, caput', summary: 'Garante igualdade perante a lei e protege direitos fundamentais. A regra aplicável e o órgão competente variam conforme o tipo de discriminação e a situação.', source: 'constituicao' }, actions: [{ id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }, { id: 'd100-tel', label: 'Ligar 100' }] },
      { title: 'Preciso de orientação sobre direitos indígenas', text: 'Consulte os materiais institucionais da Funai e procure o órgão ou organização de confiança que atende a comunidade. Em violação de direitos, também é possível recorrer ao Disque 100.', law: { name: 'Constituição Federal', article: 'arts. 231 e 232', summary: 'Reconhece direitos dos povos indígenas sobre sua organização social, costumes, línguas, crenças, tradições e direitos originários sobre terras tradicionalmente ocupadas.', source: 'constituicao' }, actions: [{ id: 'funai-cidadania', label: 'Consultar informações da Funai' }, { id: 'd100-wa', label: 'Denunciar pelo WhatsApp do Disque 100' }] },
      { title: 'Preciso de orientação sobre direitos LGBTQIA+', text: 'Consulte informações oficiais sobre o atendimento do Disque 100 a pessoas LGBTQIA+. Se houver violação de direitos humanos, qualquer pessoa pode comunicar o caso.', law: { name: 'Constituição Federal', article: 'art. 5º, caput', summary: 'Garante igualdade perante a lei. Para saber como essa proteção se aplica a um caso de discriminação, procure orientação e relate a situação ao canal competente.', source: 'constituicao' }, actions: [{ id: 'lgbtqia-disque100', label: 'Consultar o canal para pessoas LGBTQIA+' }, { id: 'd100-denunciar', label: 'Registrar denúncia online no Disque 100' }] },
      { title: 'Preciso de atendimento social perto de mim', text: 'A assistência social é organizada localmente. Procure o Centro de Referência de Assistência Social (CRAS) do município e confirme os serviços disponíveis.', map: 'Centro de Referência de Assistência Social (CRAS)', law: { name: 'Lei Orgânica da Assistência Social (Lei nº 8.742/1993)', article: 'art. 6º-C', summary: 'Define o CRAS como unidade pública municipal de proteção social básica e referência territorial para serviços da assistência social.', source: 'loas' }, actions: [{ id: 'cras', label: 'Consultar informações oficiais sobre o CRAS' }] },
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
              <LawCitation law={situation.law} />
              <GuideActions actions={situation.actions} />
              {situation.map && <a className="rights-map-link" href={`#/encontre-um-local/mapa?service=${encodeURIComponent(situation.map)}`}>Buscar {situation.map} perto de mim →</a>}
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
