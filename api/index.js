// api/index.js
export const config = { runtime: "edge" };

const BOT_AGENTS = ["whatsapp", "facebookexternalhit", "twitterbot", "linkedinbot", "telegrambot", "slackbot"];

export default async function handler(req) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  const isBot = BOT_AGENTS.some((bot) => ua.includes(bot));

  if (isBot) {
    const html = `<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Convite Isabelly Diva" />
  <meta property="og:description" content="Um convite interativo com envelope animado, atmosfera oceano e brilho dourado." />
  <meta property="og:url" content="https://convite-de-anivers-rio-khaki.vercel.app/" />
  <meta property="og:image" content="https://convite-de-anivers-rio-khaki.vercel.app/img/backgrounds/ocean_bg.png" />
  <meta property="og:image:alt" content="Fundo oceano com tons de azul" />
  <meta property="og:locale" content="pt_BR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Convite Isabelly Diva" />
  <meta name="twitter:image" content="https://convite-de-anivers-rio-khaki.vercel.app/img/backgrounds/ocean_bg.png" />
  <meta name="theme-color" content="#1A3A6E" />
  <title>Convite Isabelly Diva</title>
</head>
<body><div id="root"></div></body>
</html>`;
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  // Usuário real: deixa o Vercel servir o index.html normalmente
  return fetch(req);
}