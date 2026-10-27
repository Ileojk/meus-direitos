# Meus Direitos

Hub digital de cidadania (protótipo). React + Vite, sem backend.

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
- Rotas por hash (`#/secao/tema`), então funciona sem configurar servidor.
