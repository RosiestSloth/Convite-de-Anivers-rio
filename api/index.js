// api/index.js
export const config = { runtime: "edge" };

export default async function handler(req) {
  const html = `<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Convite Isabelly Diva" />
  <meta property="og:description" content="Um convite interativo com envelope animado, atmosfera oceano e brilho dourado." />
  <meta property="og:url" content="https://convite-de-anivers-rio-khaki.vercel.app/" />
  <meta property="og:image" content="https://convite-de-anivers-rio-khaki.vercel.app/img/backgrounds/ocean_bg.png" />
  <meta property="og:image:alt" content="Fundo oceano com tons de azul" />
  <meta property="og:locale" content="pt_BR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Convite Isabelly Diva" />
  <meta name="twitter:description" content="Convite animado para o aniversario da Isabelly, com tema oceano e detalhes dourados." />
  <meta name="twitter:image" content="https://convite-de-anivers-rio-khaki.vercel.app/img/backgrounds/ocean_bg.png" />
  <meta name="theme-color" content="#1A3A6E" />
  <title>Convite Isabelly Diva</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}