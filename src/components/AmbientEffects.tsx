import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

const AmbientEffects = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const lastBurstRef = useRef(0);
  const burstIdRef = useRef(0);
  const [sideBursts, setSideBursts] = useState<
    Array<{
      id: number;
      side: "left" | "right";
      top: string;
      delay: string;
      duration: string;
      scale: string;
      expiresAt: number;
    }>
  >([]);

  const moneyPieces = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${4 + i * 6}%`,
        delay: `${(i % 7) * 0.9}s`,
        duration: `${9 + (i % 5)}s`,
        drift: `${(i % 4) - 1.5}`,
        scale: `${0.75 + (i % 4) * 0.12}`,
      })),
    []
  );

  const shotTraces = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: `${10 + i * 14}%`,
        delay: `${i * 1.1}s`,
        duration: `${2.2 + (i % 3) * 0.6}s`,
        angle: `${-15 + i * 6}deg`,
      })),
    []
  );

  useEffect(() => {
    const emitSideBurst = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const now = Date.now();
      const freshPieces: Array<{
        id: number;
        side: "left" | "right";
        top: string;
        delay: string;
        duration: string;
        scale: string;
        expiresAt: number;
      }> = [];

      for (let i = 0; i < 5; i++) {
        const top = `${12 + Math.random() * 58}%`;
        const delay = `${Math.random() * 0.18}s`;
        const duration = `${1.5 + Math.random() * 0.9}s`;
        const scale = `${0.8 + Math.random() * 0.5}`;
        const expiresAt = now + 2800;
        freshPieces.push({
          id: burstIdRef.current++,
          side: "left",
          top,
          delay,
          duration,
          scale,
          expiresAt,
        });
        freshPieces.push({
          id: burstIdRef.current++,
          side: "right",
          top: `${12 + Math.random() * 58}%`,
          delay,
          duration,
          scale,
          expiresAt,
        });
      }

      setSideBursts((prev) => [...prev.filter((item) => item.expiresAt > now), ...freshPieces].slice(-120));
    };

    const onScroll = () => {
      if (!layerRef.current) return;
      const y = window.scrollY * 0.08;
      layerRef.current.style.transform = `translate3d(0, ${y}px, 0)`;

      const now = performance.now();
      if (now - lastBurstRef.current > 140) {
        lastBurstRef.current = now;
        emitSideBurst();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={layerRef} className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      <div className="absolute inset-0">
        {moneyPieces.map((piece) => (
          <span
            key={piece.id}
            className="money-piece"
            style={
              {
                left: piece.left,
                animationDelay: piece.delay,
                animationDuration: piece.duration,
                "--drift": piece.drift,
                "--scale": piece.scale,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {shotTraces.map((shot) => (
          <span
            key={shot.id}
            className="shot-trace"
            style={
              {
                top: shot.top,
                animationDelay: shot.delay,
                animationDuration: shot.duration,
                "--shot-angle": shot.angle,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {sideBursts.map((piece) => (
          <span
            key={piece.id}
            className={`side-money ${piece.side === "left" ? "side-money-left" : "side-money-right"}`}
            style={
              {
                top: piece.top,
                animationDelay: piece.delay,
                animationDuration: piece.duration,
                "--scale": piece.scale,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <span className="muzzle-flash muzzle-flash-a" />
      <span className="muzzle-flash muzzle-flash-b" />
    </div>
  );
};

export default AmbientEffects;
