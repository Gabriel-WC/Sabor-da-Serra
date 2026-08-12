# Sabor da Serra

Cardápio digital responsivo, feito em HTML, CSS e JavaScript puro.

## Estrutura

- `index.html` — estrutura, SEO básico e acessibilidade.
- `style.css` — identidade visual e responsividade.
- `script.js` — filtros, busca, carrinho, persistência local e checkout via WhatsApp.
- `imagens/` — logo, hero, imagens dos pratos e fallback.

## Antes de publicar

1. Abra `script.js`.
2. Substitua `WHATSAPP_NUMBER` pelo número real no formato internacional, somente números.
   - Exemplo: `5547999999999`
3. Troque as imagens ilustrativas pelas fotos reais dos pratos.
4. Atualize `og:url`, `og:image` e a URL canônica se o domínio mudar.

## Pontos importantes

O projeto não possui backend. O carrinho fica no `localStorage` do navegador e o pedido é enviado para o WhatsApp configurado.
