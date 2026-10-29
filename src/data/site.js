// Estrutura do site (site map obrigatório). `res` = ids de resources.js.
// Lista vazia = seção preparada para receber conteúdo. 'GROUPED' = todos os sites agrupados. 'EMERGENCY' = bloco de emergência.
const t = (id, title, icon, desc, res = []) => ({ id, title, icon, desc, res });

export const SECTIONS = [
  { id: 'meus-direitos', label: 'Meus direitos', icon: 'book', desc: 'Conheça seus direitos e onde buscar ajuda.', heading: 'Meus direitos', sub: 'Conheça seus direitos e encontre informações para entender onde e como buscar ajuda.',
    topics: [
      t('direitos-basicos', 'Direitos básicos', 'sprout', 'Os direitos de toda pessoa.', ['constituicao', 'udhr-unicef', 'govbr-cotidiano', 'mdh-ondh']),
      t('saude', 'Saúde', 'health', 'Direitos e cuidados com a saúde.', ['sus-direitos', 'ouvsus', 'meu-sus-digital']),
      t('educacao', 'Educação', 'education', 'Direitos ligados ao estudo e à escola.'),
      t('trabalho', 'Trabalho', 'work', 'Entenda seus direitos no trabalho.'),
      t('consumidor', 'Consumidor', 'consumer', 'Direitos ao comprar e contratar.', ['cdc', 'consumidor-gov', 'procon-pe-reclamaprocon']),
      t('moradia', 'Moradia', 'home', 'Direitos ligados a ter onde morar.', ['habitacao', 'mcmv', 'mcmv-faq', 'cnj-defensoria']),
      t('mulheres', 'Mulheres', 'women', 'Direitos e canais de apoio.', ['lei-maria-penha', 'd180-tel', 'mulheres-ligue180', 'deams-pe-directory']),
      t('criancas', 'Crianças e adolescentes', 'child', 'Proteção de crianças e adolescentes.', ['eca-texto', 'd100-tel', 'ct-recife']),
      t('idosos', 'Idosos', 'elderly', 'Direitos da pessoa idosa.', ['estatuto-idoso', 'carteira-idosa', 'bpc-pcd-idoso', 'd100-tel']),
      t('pcd', 'Pessoas com deficiência', 'accessibility', 'Direitos e inclusão.', ['lbi', 'bpc-pcd-idoso', 'd100-tel', 'mdh-ondh']),
      t('outros-grupos', 'Outros grupos', 'people', 'Direitos e canais para diferentes grupos.', ['d100-tel', 'funai-cidadania', 'lgbtqia-disque100', 'cras']),
    ] },
  { id: 'preciso-de-ajuda', label: 'Preciso de ajuda', icon: 'support', desc: 'Veja opções para a situação que você está enfrentando.', heading: 'Qual situação você está enfrentando?', sub: 'Escolha a situação mais parecida com a sua para ver canais e serviços que podem ajudar.',
    topics: [
      t('violencia', 'Fui vítima de violência', 'shield', 'Canais de apoio e proteção.', ['tel190', 'd180-tel', 'd100-tel', 'sjdh-pe', 'pc-pe', 'bo-pe']),
      t('trabalho', 'Tive um problema no trabalho', 'work', 'Salário, demissão, registro, férias ou assédio.', []),
      t('educacao', 'Tive um problema na escola', 'backpack', 'Matrícula, bullying, inclusão ou avaliação.', []),
      t('discriminacao', 'Sofri discriminação', 'people', 'Onde relatar e buscar apoio.', ['d100-tel', 'd100-wa', 'mdh-ondh', 'bo-pe']),
      t('direito-negado', 'Meu direito foi negado', 'shield', 'Caminhos quando algo é negado.', ['d100-tel', 'mdh-ondh']),
      t('problema-empresa', 'Tive problema com empresa', 'government', 'Orientações sobre problemas com empresas.'),
      t('golpe', 'Sofri um golpe', 'shield', 'O que fazer depois de um golpe.', ['bo-pe', 'pc-pe', 'comunica-pf', 'conecta-recife']),
      t('orientacao-juridica', 'Preciso de orientação jurídica', 'justice', 'Onde buscar orientação.'),
    ] },
  { id: 'denuncias', label: 'Denúncias', icon: 'megaphone', desc: 'Encontre canais para relatar uma situação.', heading: 'Canais para denunciar', sub: 'Escolha o assunto e confira qual canal pode receber o relato. Em emergência policial, ligue 190.', emergency: true,
    topics: [
      t('violencia', 'Violência', 'shield', 'Denuncie situações de violência.', ['d180-tel', 'd100-tel', 'tel190', 'sjdh-pe']),
      t('discriminacao', 'Discriminação', 'people', 'Denuncie casos de discriminação.', ['d100-tel', 'd100-wa', 'mdh-ondh']),
      t('violacao-direitos', 'Violação de direitos', 'shield', 'Denuncie violações de direitos humanos.', ['d100-tel', 'd100-wa', 'mdh-ondh', 'd100-insta', 'd100-ufmg']),
      t('crimes', 'Crimes', 'question', 'Comunique crimes às autoridades em Pernambuco.', ['comunica-pf', 'pc-pe', 'pf', 'bo-pe', 'conecta-recife', 'pf-canais']),
      t('emergencias', 'Emergências', 'shield', 'Números para ligar agora.', 'EMERGENCY'),
    ] },
  { id: 'servicos-publicos', label: 'Serviços públicos', icon: 'government', desc: 'Acesse serviços oficiais por assunto.', heading: 'Serviços públicos', sub: 'Consulte serviços oficiais e confirme requisitos, disponibilidade e atendimento no órgão responsável.',
    topics: [
      t('saude', 'Saúde', 'health', 'Serviços de saúde.'),
      t('assistencia-social', 'Assistência social', 'support', 'Serviços de assistência social.'),
      t('justica', 'Justiça', 'justice', 'Serviços de justiça.', ['sjdh-pe']),
      t('seguranca', 'Segurança', 'shield', 'Serviços de segurança pública.', ['pc-pe', 'pf', 'bo-pe', 'pf-canais']),
      t('documentacao', 'Documentação', 'id', 'Serviços de documentos.'),
      t('emprego', 'Emprego', 'tools', 'Serviços de emprego.'),
      t('beneficios', 'Benefícios', 'gift', 'Serviços de benefícios.'),
    ] },
  { id: 'encontre-um-local', label: 'Encontre um local', icon: 'location', desc: 'Busque serviços perto de você em Pernambuco.', heading: 'Onde buscar atendimento?', sub: 'Encontre serviços nos municípios de Pernambuco. Confira endereço, horário e atendimento antes de sair.',
    topics: [
      t('mapa', 'Buscar um serviço perto de mim', 'map', 'Pesquise um serviço por localização ou município.', 'MAP'),
      t('orgaos-publicos', 'Órgãos públicos', 'government', 'Órgãos que oferecem atendimento.', ['pc-pe', 'pf', 'sjdh-pe']),
      t('ongs', 'ONGs', 'people', 'Organizações que oferecem apoio.'),
      t('centros-atendimento', 'Centros de atendimento', 'health', 'Centros de atendimento.', ['ct-recife']),
      t('atendimento-juridico', 'Atendimento jurídico', 'law', 'Onde buscar atendimento jurídico.'),
    ] },
  { id: 'informacao', label: 'Informação', icon: 'idea', desc: 'Consulte guias, perguntas e referências.', heading: 'Entenda melhor seus direitos', sub: 'Consulte fontes e materiais de referência. As explicações do site são gerais e não substituem orientação individual.',
    topics: [
      t('sites-especializados', 'Sites especializados', 'globe', 'Sites e canais de instituições.', 'GROUPED'),
      t('guias', 'Guias', 'guide', 'Guias para entender e agir.', ['govbr-cotidiano', 'ct-papel', 'ct-quando', 'd100-ufmg']),
      t('perguntas-frequentes', 'Perguntas frequentes', 'question', 'Dúvidas comuns.'),
      t('glossario', 'Glossário', 'text', 'Termos explicados de forma simples.'),
      t('leis', 'Leis em linguagem simples', 'law', 'Leis explicadas sem complicação.'),
    ] },
];

export const getSection = (id) => SECTIONS.find((s) => s.id === id);
export const getTopic = (s, id) => s?.topics.find((x) => x.id === id);
