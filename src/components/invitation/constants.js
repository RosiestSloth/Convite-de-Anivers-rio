export const particles = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 15,
}));

export const vests = [
  { emoji: "🍾", name: "Espumante" },
  { emoji: "🕯️", name: "Velas aromáticas" },
  { emoji: "📖", name: "Livro de viagem" },
  { emoji: "👜", name: "Bolsa" },
  { emoji: "💐", name: "Flores" },
  { emoji: "🎁", name: "Vale-presente" },
];
