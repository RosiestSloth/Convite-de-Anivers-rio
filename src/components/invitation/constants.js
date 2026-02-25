export const particles = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 15,
}));

export const gifts = [
  { emoji: "🍾", name: "Espumante" },
  { emoji: "🕯️", name: "Velas aromáticas" },
  { emoji: "📖", name: "Livro de viagem" },
  { emoji: "👜", name: "Bolsa" },
  { emoji: "💐", name: "Flores" },
  { emoji: "🎁", name: "Vale-presente" },
];

export const wave2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%232E5BA8' fill-opacity='0.3' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,120 L0,120 Z'/%3E%3C/svg%3E")`;
export const wave3 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%23AED9E0' fill-opacity='0.08' d='M0,70 C180,30 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1380,80 1440,70 L1440,120 L0,120 Z'/%3E%3C/svg%3E")`;