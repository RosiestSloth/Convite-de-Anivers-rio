import { useState } from "react";

const particles = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 15,
}));

const gifts = [
  { emoji: "🍾", name: "Espumante" },
  { emoji: "🕯️", name: "Velas aromáticas" },
  { emoji: "📖", name: "Livro de viagem" },
  { emoji: "👜", name: "Bolsa" },
  { emoji: "💐", name: "Flores" },
  { emoji: "🎁", name: "Vale-presente" },
];

const wave2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%232E5BA8' fill-opacity='0.3' d='M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,120 L0,120 Z'/%3E%3C/svg%3E")`;
const wave3 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%23AED9E0' fill-opacity='0.08' d='M0,70 C180,30 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1380,80 1440,70 L1440,120 L0,120 Z'/%3E%3C/svg%3E")`;

export default function Invitation() {
  const [opened, setOpened] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [letterRising, setLetterRising] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [sceneHidden, setSceneHidden] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    setFlapOpen(true);
    setTimeout(() => setLetterRising(true), 600);
    setTimeout(() => setSceneHidden(true), 1400);
    setTimeout(() => setCardVisible(true), 1600);
  };

  const handleClose = () => {
    setCardVisible(false);
    setTimeout(() => {
      setSceneHidden(false);
      setLetterRising(false);
      setTimeout(() => {
        setFlapOpen(false);
        setOpened(false);
      }, 400);
    }, 500);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-[url('img/Ocean_BG.png')] bg-cover bg-center"
      >
        <div className="inset-0 absolute bg-linear-to-tl from-(--color-cobalt)/50 via-(--color-ocean-deep)/50 to-transparent" />
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="animate-float-up absolute rounded-full bg-[rgba(174,217,224,0.15)]"
            style={{
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed right-0 bottom-0 left-0 z-0 h-[200px] overflow-hidden">
        <div
          className="animate-wave1 absolute bottom-0 h-full w-[200%]"
          style={{
            backgroundImage: URL.createObjectURL(new Blob(['img/'], { type: "image/svg+xml" })),
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "50% 100%",
          }}
        />
        <div
          className="animate-wave2 absolute bottom-0 h-full w-[200%]"
          style={{
            backgroundImage: wave2,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "60% 100%",
          }}
        />
        <div
          className="animate-wave3 absolute bottom-0 h-full w-[200%]"
          style={{
            backgroundImage: wave3,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "40% 100%",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-10">
        <div
          className={`flex flex-col items-center gap-8 transition-all duration-700 ${
            sceneHidden ? "pointer-events-none translate-y-10 scale-90 opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center">
            <div className="font-montserrat mb-3 text-[11px] tracking-[5px] text-[#AED9E0B3] uppercase">
              Uma ocasião especial
            </div>
            <div className="font-cormorant text-[clamp(32px,5vw,52px)] leading-[1.1] font-light tracking-[-0.5px] text-white">
              Você foi <em className="text-[#AED9E0]">convidado</em>
            </div>
          </div>

          <div
            onClick={handleOpen}
            className="group relative h-[240px] w-[340px] cursor-pointer drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            <div className="h-full w-full [transform-style:preserve-3d] transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:[transform:rotateX(2deg)]">
              <div className="absolute inset-0 overflow-hidden rounded-[4px] border border-[rgba(174,217,224,0.2)] bg-gradient-to-br from-[#1e4a8a] to-[#0f2d5e]">
                <div
                  className="absolute top-0 bottom-0 left-0 z-[2] w-1/2"
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 100% 50%)",
                    background: "linear-gradient(135deg, #1a3d7a, #152e5e)",
                  }}
                />
                <div
                  className="absolute top-0 right-0 bottom-0 z-[2] w-1/2"
                  style={{
                    clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
                    background: "linear-gradient(225deg, #1a3d7a, #152e5e)",
                  }}
                />
                <div
                  className="absolute right-0 bottom-0 left-0 z-[3] h-[55%]"
                  style={{
                    clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                    background: "linear-gradient(180deg, #12285a, #0d2040)",
                  }}
                />

                <div
                  className={`absolute right-[15px] bottom-[10px] left-[15px] z-[1] h-[75%] origin-bottom rounded-[2px] bg-gradient-to-br from-[#e8f4f8] to-[#d4ecf4] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-[1400ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
                    letterRising ? "-translate-y-[70%]" : "translate-y-0"
                  }`}
                >
                  <div className="flex h-full flex-col items-center gap-1.5 p-4">
                    <div className="font-cormorant mt-1 text-[11px] tracking-[3px] text-[#1A3A6EB3] uppercase">Convite</div>
                    <div className="h-[2px] w-[80%] rounded-[1px] bg-gradient-to-r from-transparent via-[rgba(26,58,110,0.2)] to-transparent" />
                    <div className="h-[2px] w-[60%] rounded-[1px] bg-gradient-to-r from-transparent via-[rgba(26,58,110,0.2)] to-transparent opacity-50" />
                    <div className="h-[2px] w-[70%] rounded-[1px] bg-gradient-to-r from-transparent via-[rgba(26,58,110,0.2)] to-transparent opacity-30" />
                  </div>
                </div>

                <div
                  className={`absolute top-0 right-0 left-0 z-[4] h-[55%] origin-top [transform-style:preserve-3d] transition-transform duration-[1200ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${
                    flapOpen ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"
                  }`}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      background: "linear-gradient(160deg, #2E5BA8 0%, #1A3A6E 60%, #0f2651 100%)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                      background: "linear-gradient(160deg, #1a3d7a 0%, #0f2347 100%)",
                      transform: "rotateX(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>

                <div className="absolute bottom-6 left-1/2 z-[5] flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_35%,#d4a853,#8B6914,#5c4209)] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <span className="font-cormorant select-none text-[22px] font-light text-[rgba(255,255,255,0.85)]">✦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="font-montserrat animate-float-prompt text-[13px] tracking-[4px] text-[rgba(174,217,224,0.7)] uppercase">
            Clique para abrir
          </div>
        </div>
      </div>

      <button
        className={`fixed top-6 right-6 z-[120] flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(174,217,224,0.25)] bg-[rgba(13,35,71,0.82)] text-lg text-[#e8f4f8] shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[rgba(26,58,110,0.9)] ${
          cardVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClose}
      >
        ✕
      </button>

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-5 transition-opacity duration-700 ${
          cardVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`relative my-auto w-full max-w-[680px] overflow-hidden rounded-xl bg-gradient-to-br from-[#f0f7fb] via-[#e4f0f6] to-[#ddedf5] shadow-[0_60px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(174,217,224,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
            cardVisible ? "translate-y-0 scale-100" : "translate-y-20 scale-90"
          }`}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-[#1A3A6E] to-[#0D2347] px-8 pt-12 pb-16 text-center md:px-12">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 120%, rgba(174,217,224,0.1) 0%, transparent 60%)",
              }}
            />
            <div className="animate-shimmer absolute top-4 right-5 text-[28px] text-[rgba(255,255,255,0.08)]">🐚</div>
            <div className="animate-shimmer2 absolute bottom-14 left-5 text-[22px] text-[rgba(255,255,255,0.08)]">🪸</div>

            <div className="font-montserrat relative mb-5 text-[10px] tracking-[6px] text-[#AED9E0CC] uppercase">
              Convite de Aniversário
            </div>
            <div className="font-cormorant relative text-[52px] leading-[0.9] font-light tracking-[-1px] text-white md:text-[64px]">
              Marina
              <span className="block mt-2 text-[26px] tracking-[2px] text-[#AED9E0] uppercase md:text-[32px]">
                Oliveira
              </span>
            </div>

            <div className="relative mx-auto mt-7 flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full border border-[rgba(174,217,224,0.4)] bg-[radial-gradient(circle,#2E5BA8_0%,#1A3A6E_70%)] shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.15)]">
              <span className="font-cormorant text-[38px] leading-none text-white">30</span>
              <span className="font-montserrat mt-0.5 text-[10px] tracking-[2px] text-[#AED9E0E6] uppercase">anos</span>
            </div>

            <div className="relative mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-[60px] bg-gradient-to-r from-transparent to-[rgba(174,217,224,0.4)]" />
              <div className="h-[6px] w-[6px] rotate-45 bg-[rgba(174,217,224,0.5)]" />
              <div className="h-px w-[60px] bg-gradient-to-r from-[rgba(174,217,224,0.4)] to-transparent" />
            </div>

            <svg
              className="absolute right-0 bottom-[-1px] left-0 h-12"
              viewBox="0 0 1440 48"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z" fill="#f0f7fb" />
            </svg>
          </div>

          <div className="px-6 pt-8 pb-9 md:px-10 md:pt-10 md:pb-11">
            <div className="mb-8">
              <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">
                Detalhes do evento
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-4 text-center">
                  <span className="mb-1 block text-[20px]">🗓️</span>
                  <div className="font-montserrat text-[10px] tracking-[2px] text-[#2E5BA8B3] uppercase">Data</div>
                  <div className="font-cormorant mt-0.5 text-[24px] text-[#1A3A6E]">15 de Março</div>
                  <div className="font-montserrat text-[11px] text-[#2C4A7C99]">Sábado, 2025</div>
                </div>
                <div className="rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-4 text-center">
                  <span className="mb-1 block text-[20px]">🕖</span>
                  <div className="font-montserrat text-[10px] tracking-[2px] text-[#2E5BA8B3] uppercase">Horário</div>
                  <div className="font-cormorant mt-0.5 text-[24px] text-[#1A3A6E]">19h30</div>
                  <div className="font-montserrat text-[11px] text-[#2C4A7C99]">Até às 02h00</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">Local</div>
              <div className="flex items-start gap-3 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e8f4f8] text-[18px]">📍</div>
                <div>
                  <h3 className="font-cormorant text-[24px] text-[#1A3A6E]">Espaço Azul Mar</h3>
                  <p className="font-montserrat text-[13px] leading-relaxed text-[#2C4A7CCC]">
                    Av. Beira Mar, 1450 — Sala Âncora
                    <br />
                    Fortaleza, CE — 60165-121
                    <br />
                    <span className="font-medium text-[#2E5BA8]">Valet disponível</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">
                Lista de presentes sugeridos
              </div>
              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
                {gifts.map((gift) => (
                  <div
                    key={gift.name}
                    className="flex items-center gap-2 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/70 px-3 py-2"
                  >
                    <span className="text-[17px]">{gift.emoji}</span>
                    <div className="font-montserrat text-[12px] text-[#1A3A6E]">{gift.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">
                Confirmar presença
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-3.5">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#e8f4f8]">📱</div>
                  <div>
                    <div className="font-montserrat text-[10px] tracking-[1.5px] text-[#2E5BA8CC] uppercase">WhatsApp</div>
                    <div className="font-montserrat text-[13px] text-[#1A3A6E]">(85) 99999-1234</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-3.5">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#e8f4f8]">✉️</div>
                  <div>
                    <div className="font-montserrat text-[10px] tracking-[1.5px] text-[#2E5BA8CC] uppercase">E-mail</div>
                    <div className="font-montserrat text-[13px] text-[#1A3A6E]">marina@email.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#dcecf5] to-[#e8f2f7] px-8 py-6 text-center">
            <div className="font-cormorant text-[26px] leading-[1.3] text-[#1A3A6E]">
              "O mar me chama e eu sempre vou —
              <br />
              venha celebrar comigo."
            </div>
            <div className="font-montserrat mt-3 text-[11px] tracking-[2px] text-[#2E5BA8CC] uppercase">
              Confirme até 10 de março
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
