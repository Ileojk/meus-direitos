// Estrutura do site (site map obrigatório). `res` = ids de resources.js.
// Lista vazia = seção preparada para receber conteúdo. 'GROUPED' = todos os sites agrupados. 'EMERGENCY' = bloco de emergência.
const t = (id, title, icon, desc, res = []) => ({ id, title, icon, desc, res });

export const SECTIONS = [
  { id: 'meus-direitos', label: 'Meus direitos', icon: '📘', desc: 'Conheça seus direitos e onde buscar ajuda.', heading: 'Meus direitos', sub: 'Conheça seus direitos e encontre informações para entender onde e como buscar ajuda.',
    topics: [
      t('direitos-basicos', 'Direitos básicos', '🌱', 'Os direitos de toda pessoa.', ['udhr-unicef', 'govbr-cotidiano', 'un-brasil', 'mdh-ondh']),
      t('saude', 'Saúde', '🩺', 'Direitos e cuidados com a saúde.'),
      t('educacao', 'Educação', '🎓', 'Direitos ligados ao estudo e à escola.'),
      t('trabalho', 'Trabalho', '💼', 'Entenda seus direitos no trabalho.'),
      t('consumidor', 'Consumidor', '🛒', 'Direitos ao comprar e contratar.'),
      t('moradia', 'Moradia', '🏠', 'Direitos ligados a ter onde morar.'),
      t('mulheres', 'Mulheres', '💜', 'Direitos e canais de apoio.', ['d180-tel', 'sjdh-pe']),
      t('criancas', 'Crianças e adolescentes', '🧒', 'Proteção de crianças e adolescentes.', ['ct-recife', 'ct-papel', 'ct-quando', 'd100-tel']),
      t('idosos', 'Idosos', '👵', 'Direitos da pessoa idosa.', ['d100-tel', 'mdh-ondh']),
      t('pcd', 'Pessoas com deficiência', '♿', 'Direitos e inclusão.', ['d100-tel', 'mdh-ondh']),
      t('outros-grupos', 'Outros grupos', '🤲', 'Direitos de outros grupos.'),
    ] },
  { id: 'preciso-de-ajuda', label: 'Preciso de ajuda', icon: '🤝', desc: 'Conte o que aconteceu e descubra o caminho.', heading: 'Conte o que aconteceu.', sub: 'Escolha a situação que mais se aproxima do que você está enfrentando.',
    topics: [
      t('violencia', 'Fui vítima de violência', '🛟', 'Canais de apoio e proteção.', ['tel190', 'd180-tel', 'd100-tel', 'sjdh-pe', 'pc-pe', 'bo-pe']),
      t('discriminacao', 'Sofri discriminação', '🫂', 'Onde relatar e buscar apoio.', ['d100-tel', 'd100-wa', 'mdh-ondh', 'bo-pe']),
      t('direito-negado', 'Meu direito foi negado', '🚪', 'Caminhos quando algo é negado.', ['d100-tel', 'mdh-ondh']),
      t('problema-empresa', 'Tive problema com empresa', '🏢', 'Orientações sobre problemas com empresas.'),
      t('golpe', 'Sofri um golpe', '🎣', 'O que fazer depois de um golpe.', ['bo-pe', 'pc-pe', 'comunica-pf', 'conecta-recife']),
      t('orientacao-juridica', 'Preciso de orientação jurídica', '🧭', 'Onde buscar orientação.'),
    ] },
  { id: 'denuncias', label: 'Denúncias', icon: '📣', desc: 'Telefones e canais para denunciar.', heading: 'Denúncias', sub: 'Escolha o tipo de situação e veja por onde denunciar.', emergency: true,
    topics: [
      t('violencia', 'Violência', '🛟', 'Denuncie situações de violência.', ['d180-tel', 'd100-tel', 'tel190', 'sjdh-pe']),
      t('discriminacao', 'Discriminação', '🫂', 'Denuncie casos de discriminação.', ['d100-tel', 'd100-wa', 'mdh-ondh']),
      t('violacao-direitos', 'Violação de direitos', '🚫', 'Denuncie violações de direitos humanos.', ['d100-tel', 'd100-wa', 'mdh-ondh', 'd100-insta', 'd100-ufmg']),
      t('crimes', 'Crimes', '🔎', 'Comunique crimes às autoridades.', ['comunica-pf', 'pc-pe', 'pf', 'bo-pe', 'conecta-recife', 'pf-canais', 'tel181', 'pc-pr-181']),
      t('emergencias', 'Emergências', '🚨', 'Números para ligar agora.', 'EMERGENCY'),
    ] },
  { id: 'servicos-publicos', label: 'Serviços públicos', icon: '🏛️', desc: 'Encontre o serviço certo.', heading: 'Serviços públicos', sub: 'Veja os serviços por área. Novos serviços serão adicionados aqui.',
    topics: [
      t('saude', 'Saúde', '🩺', 'Serviços de saúde.'),
      t('assistencia-social', 'Assistência social', '🧡', 'Serviços de assistência social.'),
      t('justica', 'Justiça', '⚖️', 'Serviços de justiça.', ['sjdh-pe']),
      t('seguranca', 'Segurança', '🛡️', 'Serviços de segurança pública.', ['pc-pe', 'pf', 'bo-pe', 'pf-canais']),
      t('documentacao', 'Documentação', '🪪', 'Serviços de documentos.'),
      t('emprego', 'Emprego', '🧰', 'Serviços de emprego.'),
      t('beneficios', 'Benefícios', '🎁', 'Serviços de benefícios.'),
    ] },
  { id: 'encontre-um-local', label: 'Encontre um local', icon: '📍', desc: 'Instituições e serviços para atendimento.', heading: 'Encontre um local', sub: 'Encontre instituições e serviços onde você pode buscar atendimento.',
    topics: [
      t('mapa', 'Mapa', '🗺️', 'Veja locais no mapa.', 'MAP'),
      t('orgaos-publicos', 'Órgãos públicos', '🏛️', 'Órgãos que oferecem atendimento.', ['pc-pe', 'pf', 'sjdh-pe']),
      t('ongs', 'ONGs', '🤝', 'Organizações que oferecem apoio.'),
      t('centros-atendimento', 'Centros de atendimento', '🏥', 'Centros de atendimento.', ['ct-recife']),
      t('atendimento-juridico', 'Atendimento jurídico', '📑', 'Onde buscar atendimento jurídico.'),
    ] },
  { id: 'informacao', label: 'Informação', icon: '💡', desc: 'Sites, guias e explicações simples.', heading: 'Informação', sub: 'Conteúdo confiável para entender seus direitos.',
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
