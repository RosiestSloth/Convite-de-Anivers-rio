export function EnvelopeScene({ sceneHidden, letterRising, flapOpen, onOpen }) {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center  px-5 py-10">
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
          onClick={onOpen}
          className="group relative h-60 w-85 cursor-pointer drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="h-full w-full transform-3d transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:transform-[rotateX(2deg)]">
            <div className="absolute inset-0  rounded-sm border border-[rgba(174,217,224,0.2)] bg-linear-to-br from-[#1e4a8a] to-[#0f2d5e]">
              <div
                className="absolute top-0 bottom-0 left-0 z-2 w-1/2"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 50%)",
                  background: "linear-gradient(135deg, #1a3d7a, #152e5e)",
                }}
              />
              <div
                className="absolute top-0 right-0 bottom-0 z-2 w-1/2"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
                  background: "linear-gradient(225deg, #1a3d7a, #152e5e)",
                }}
              />
              <div
                className="absolute right-0 bottom-0 left-0 z-3 h-[55%]"
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                  background: "linear-gradient(180deg, #12285a, #0d2040)",
                }}
              />

              <div
                className={`absolute right-3.75 bottom-2.5 left-3.75 z-1 h-[75%] origin-bottom rounded-xs bg-linear-to-br from-[#e8f4f8] to-[#d4ecf4] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-1400 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  letterRising ? "-translate-y-[50%]" : "translate-y-0"
                }`}
              >
                <div className="flex h-full flex-col items-center gap-1.5 p-4">
                  <p className="font-cormorant mt-1 text-[11px] tracking-[3px] text-[#1A3A6EB3] uppercase">Convite</p>
                  <div className="h-0.5 w-[80%] rounded-[1px] bg-linear-to-r from-transparent via-[rgba(26,58,110,0.2)] to-transparent" />
                  <div className="h-0.5 w-[60%] rounded-[1px] bg-linear-to-r from-transparent via-[rgba(26,58,110,0.2)] to-transparent opacity-50" />
                  <div className="h-0.5 w-[70%] rounded-[1px] bg-linear-to-r from-transparent via-[rgba(26,58,110,0.2)] to-transparent opacity-30" />
                </div>
              </div>

              <div
                className={`absolute top-0 right-0 left-0 z-4 h-[55%] origin-top transform-3d transition duration-1200 ease-in-out ${
                  flapOpen ? "transform-[rotateX(180deg)] opacity-0" : "transform-[rotateX(0deg)] opacity-100"
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

              <div className="absolute bottom-6 left-1/2 z-5 flex size-15 -translate-x-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_35%,#d4a853,#8B6914,#5c4209)] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]">
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
  );
}