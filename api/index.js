export const config = { runtime: "edge" };

export default async function handler(req) {
  const url = new URL(req.url);
  url.pathname = "/index.html";

  const response = await fetch(url.toString());
  const html = await response.text();

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}