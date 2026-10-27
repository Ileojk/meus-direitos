# Meus Direitos

Hub digital de cidadania (protótipo). React + Vite, sem backend.

## Escopo territorial
O projeto é voltado a Pernambuco, incluindo seus municípios. Fontes federais aparecem quando se aplicam ao assunto. A busca por locais consulta o Google Maps com o serviço e a cidade informados pela pessoa (ou sua localização aproximada, com autorização do navegador); o site não mantém uma base própria de endereços e não garante que todos os resultados estejam abertos, corretos ou prestem aquele atendimento. Para Delegacias da Mulher, a ferramenta também aponta a lista do MPPE, pois resultados do mapa podem mostrar endereço antigo. Antes de se deslocar, confirme endereço, horário, requisitos e disponibilidade diretamente com o serviço.

## Executar
```bash
cd meus-direitos
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```
Requer Node.js 18+.

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
