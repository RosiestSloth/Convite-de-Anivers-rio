import { particles } from "./constants";

export function Background() {
  return (
    <>
      <div
        id="fundo-site"
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}img/ocean_bg.png')` }}
      >
        <div className="inset-0 absolute bg-linear-to-tl from-(--color-cobalt)/70 via-(--color-ocean-deep)/60 to-transparent" />
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