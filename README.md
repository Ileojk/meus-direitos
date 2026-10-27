# Meus Direitos

Hub digital de cidadania (protótipo). React + Vite, sem backend.

## Escopo territorial
O projeto é voltado a Pernambuco, incluindo seus municípios. Fontes federais aparecem quando se aplicam ao assunto. A busca por locais consulta o Google Places com o serviço e a cidade informados (ou a localização aproximada, com autorização do navegador), exibe até 10 resultados retornados e permite abrir cada local no Google Maps. A distância baseada em localização é aproximada, em linha reta. O site não mantém uma base própria e a busca pode não incluir todos os serviços públicos nem garantir que um local esteja aberto, correto ou preste aquele atendimento. Para Delegacias da Mulher, a ferramenta também aponta a lista do MPPE, pois resultados do mapa podem mostrar endereço antigo. Antes de se deslocar, confirme endereço, horário, requisitos e disponibilidade diretamente com o serviço.

## Executar
```bash
cd meus-direitos
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```
Requer Node.js 18+.

## Busca de locais no Google Places
Para habilitar resultados dentro do site, crie uma chave no Google Cloud, habilite Maps JavaScript API e Places API (New), configure faturamento e restrinja a chave para os domínios do projeto (por exemplo, `meus-direitos.pages.dev/*` e `localhost:5173/*`) e somente às APIs necessárias. A chave do navegador fica visível no código publicado; as restrições de domínio e API são essenciais. Consulte o guia oficial de [restrição de chaves](https://developers.google.com/maps/api-security-best-practices).

Copie `.env.example` para `.env.local` e preencha `VITE_GOOGLE_MAPS_API_KEY`. Para produção, cadastre a variável `VITE_GOOGLE_MAPS_API_KEY` nas variáveis de ambiente do Cloudflare Pages e faça um novo deploy. Sem essa chave, o site ainda oferece o link de busca no Google Maps, mas não lista os resultados internamente.

## Onde editar
- `src/data/resources.js`: todos os links e telefones.
- `src/data/site.js`: seções e temas do site map.
- `src/data/editorial.js`: textos de apoio, ressalvas territoriais e referências das páginas temáticas.
- `src/data/search.js`: conteúdo indexado e sinônimos usados pela pesquisa.
- Rotas por hash (`#/secao/tema`), então funciona sem configurar servidor.

## Manutenção editorial
Antes de publicar ou alterar uma orientação: abra cada link oficial, confira se a página ainda existe e se confirma o texto; identifique se a regra é federal, estadual ou municipal; não apresente uma fonte de Recife como se atendesse todo Pernambuco; e informe quando o atendimento ou a cobertura depender do município. Atualize `EDITORIAL_REVIEWED_AT` em `src/data/editorial.js` somente depois de revisar as referências editoriais listadas. Para recursos em `src/data/resources.js`, confira URL, descrição, telefone e alcance antes da mudança. Revise os links e a busca em cada atualização de conteúdo; confira novamente os serviços locais periodicamente e quando houver aviso de mudança do órgão.

## Acessibilidade e busca
A navegação, os campos e avisos devem continuar utilizáveis por teclado, leitor de tela e telas pequenas. A geolocalização só pode ser solicitada após ação da pessoa; ofereça sempre a busca pelo município como alternativa. A indexação da pesquisa é mantida em `src/data/search.js`; quando incluir termos de um tema, valide que resultados específicos não promovam áreas genéricas como falsos positivos.
