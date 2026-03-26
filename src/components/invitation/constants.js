export const particles = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: `${Math.random() * 10}vh`,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 8,
}));

export const vests = [
  { emoji: "👕", name: "Sport Fino" },
  { emoji: "👔", name: "Social" },
];
