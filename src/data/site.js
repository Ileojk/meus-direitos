// Estrutura do site (site map obrigatório). `res` = ids de resources.js.
// Lista vazia = seção preparada para receber conteúdo. 'GROUPED' = todos os sites agrupados. 'EMERGENCY' = bloco de emergência.
const t = (id, title, icon, desc, res = []) => ({ id, title, icon, desc, res });

export const SECTIONS = [
  { id: 'meus-direitos', label: 'Meus direitos', icon: '📘', desc: 'Conheça seus direitos e onde buscar ajuda.', heading: 'Meus direitos', sub: 'Conheça seus direitos e encontre informações para entender onde e como buscar ajuda.',
    topics: [
      t('direitos-basicos', 'Direitos básicos', '🌱', 'Os direitos de toda pessoa.', ['constituicao', 'udhr-unicef', 'govbr-cotidiano', 'mdh-ondh']),
      t('saude', 'Saúde', '🩺', 'Direitos e cuidados com a saúde.', ['sus-direitos', 'ouvsus', 'meu-sus-digital']),
      t('educacao', 'Educação', '🎓', 'Direitos ligados ao estudo e à escola.'),
      t('trabalho', 'Trabalho', '💼', 'Entenda seus direitos no trabalho.'),
      t('consumidor', 'Consumidor', '🛒', 'Direitos ao comprar e contratar.', ['cdc', 'consumidor-gov', 'procon-pe-reclamaprocon']),
      t('moradia', 'Moradia', '🏠', 'Direitos ligados a ter onde morar.', ['habitacao', 'mcmv', 'mcmv-faq', 'cnj-defensoria']),
      t('mulheres', 'Mulheres', '💜', 'Direitos e canais de apoio.', ['lei-maria-penha', 'd180-tel', 'mulheres-ligue180', 'deams-pe-directory']),
      t('criancas', 'Crianças e adolescentes', '🧒', 'Proteção de crianças e adolescentes.', ['eca-texto', 'd100-tel', 'ct-recife']),
      t('idosos', 'Idosos', '👵', 'Direitos da pessoa idosa.', ['estatuto-idoso', 'carteira-idosa', 'bpc-pcd-idoso', 'd100-tel']),
      t('pcd', 'Pessoas com deficiência', '♿', 'Direitos e inclusão.', ['lbi', 'bpc-pcd-idoso', 'd100-tel', 'mdh-ondh']),
      t('outros-grupos', 'Outros grupos', '🤲', 'Direitos e canais para diferentes grupos.', ['d100-tel', 'funai-cidadania', 'lgbtqia-disque100', 'cras']),
    ] },
  { id: 'preciso-de-ajuda', label: 'Preciso de ajuda', icon: '🤝', desc: 'Veja opções para a situação que você está enfrentando.', heading: 'Qual situação você está enfrentando?', sub: 'Escolha a situação mais parecida com a sua para ver canais e serviços que podem ajudar.',
    topics: [
      t('violencia', 'Fui vítima de violência', '🛟', 'Canais de apoio e proteção.', ['tel190', 'd180-tel', 'd100-tel', 'sjdh-pe', 'pc-pe', 'bo-pe']),
      t('trabalho', 'Tive um problema no trabalho', '💼', 'Salário, demissão, registro, férias ou assédio.', []),
      t('educacao', 'Tive um problema na escola', '🎒', 'Matrícula, bullying, inclusão ou avaliação.', []),
      t('discriminacao', 'Sofri discriminação', '🫂', 'Onde relatar e buscar apoio.', ['d100-tel', 'd100-wa', 'mdh-ondh', 'bo-pe']),
      t('direito-negado', 'Meu direito foi negado', '🚪', 'Caminhos quando algo é negado.', ['d100-tel', 'mdh-ondh']),
      t('problema-empresa', 'Tive problema com empresa', '🏢', 'Orientações sobre problemas com empresas.'),
      t('golpe', 'Sofri um golpe', '🎣', 'O que fazer depois de um golpe.', ['bo-pe', 'pc-pe', 'comunica-pf', 'conecta-recife']),
      t('orientacao-juridica', 'Preciso de orientação jurídica', '🧭', 'Onde buscar orientação.'),
    ] },
  { id: 'denuncias', label: 'Denúncias', icon: '📣', desc: 'Encontre canais para relatar uma situação.', heading: 'Canais para denunciar', sub: 'Escolha o assunto e confira qual canal pode receber o relato. Em emergência policial, ligue 190.', emergency: true,
    topics: [
      t('violencia', 'Violência', '🛟', 'Denuncie situações de violência.', ['d180-tel', 'd100-tel', 'tel190', 'sjdh-pe']),
      t('discriminacao', 'Discriminação', '🫂', 'Denuncie casos de discriminação.', ['d100-tel', 'd100-wa', 'mdh-ondh']),
      t('violacao-direitos', 'Violação de direitos', '🚫', 'Denuncie violações de direitos humanos.', ['d100-tel', 'd100-wa', 'mdh-ondh', 'd100-insta', 'd100-ufmg']),
      t('crimes', 'Crimes', '🔎', 'Comunique crimes às autoridades em Pernambuco.', ['comunica-pf', 'pc-pe', 'pf', 'bo-pe', 'conecta-recife', 'pf-canais']),
      t('emergencias', 'Emergências', '🚨', 'Números para ligar agora.', 'EMERGENCY'),
    ] },
  { id: 'servicos-publicos', label: 'Serviços públicos', icon: '🏛️', desc: 'Acesse serviços oficiais por assunto.', heading: 'Serviços públicos', sub: 'Consulte serviços oficiais e confirme requisitos, disponibilidade e atendimento no órgão responsável.',
    topics: [
      t('saude', 'Saúde', '🩺', 'Serviços de saúde.'),
      t('assistencia-social', 'Assistência social', '🧡', 'Serviços de assistência social.'),
      t('justica', 'Justiça', '⚖️', 'Serviços de justiça.', ['sjdh-pe']),
      t('seguranca', 'Segurança', '🛡️', 'Serviços de segurança pública.', ['pc-pe', 'pf', 'bo-pe', 'pf-canais']),
      t('documentacao', 'Documentação', '🪪', 'Serviços de documentos.'),
      t('emprego', 'Emprego', '🧰', 'Serviços de emprego.'),
      t('beneficios', 'Benefícios', '🎁', 'Serviços de benefícios.'),
    ] },
  { id: 'encontre-um-local', label: 'Encontre um local', icon: '📍', desc: 'Busque serviços perto de você em Pernambuco.', heading: 'Onde buscar atendimento?', sub: 'Encontre serviços nos municípios de Pernambuco. Confira endereço, horário e atendimento antes de sair.',
    topics: [
      t('mapa', 'Buscar um serviço perto de mim', '🗺️', 'Pesquise um serviço por localização ou município.', 'MAP'),
      t('orgaos-publicos', 'Órgãos públicos', '🏛️', 'Órgãos que oferecem atendimento.', ['pc-pe', 'pf', 'sjdh-pe']),
      t('ongs', 'ONGs', '🤝', 'Organizações que oferecem apoio.'),
      t('centros-atendimento', 'Centros de atendimento', '🏥', 'Centros de atendimento.', ['ct-recife']),
      t('atendimento-juridico', 'Atendimento jurídico', '📑', 'Onde buscar atendimento jurídico.'),
    ] },
  { id: 'informacao', label: 'Informação', icon: '💡', desc: 'Consulte guias, perguntas e referências.', heading: 'Entenda melhor seus direitos', sub: 'Consulte fontes e materiais de referência. As explicações do site são gerais e não substituem orientação individual.',
    topics: [
      t('sites-especializados', 'Sites especializados', '🌐', 'Sites e canais de instituições.', 'GROUPED'),
      t('guias', 'Guias', '🗂️', 'Guias para entender e agir.', ['govbr-cotidiano', 'ct-papel', 'ct-quando', 'd100-ufmg']),
      t('perguntas-frequentes', 'Perguntas frequentes', '❓', 'Dúvidas comuns.'),
      t('glossario', 'Glossário', '🔤', 'Termos explicados de forma simples.'),
      t('leis', 'Leis em linguagem simples', '📜', 'Leis explicadas sem complicação.'),
    ] },
];

export const getSection = (id) => SECTIONS.find((s) => s.id === id);
export const getTopic = (s, id) => s?.topics.find((x) => x.id === id);
