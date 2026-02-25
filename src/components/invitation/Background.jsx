import { particles } from "./constants";

export function Background() {
  return (
    <>
      <div
        id="fundo-site"
        className="fixed inset-0 z-0"
      >
        <div className="inset-0 absolute bg-linear-to-tl z-1 from-(--color-cobalt)/70 via-(--color-ocean-deep)/60 to-transparent" />
        <img src="/img/backgrounds/ocean_bg.png" className="absolute z-0 object-cover inset-0 size-full object-center" alt="" />
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
    </>
  );
}