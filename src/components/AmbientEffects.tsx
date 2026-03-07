import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

const SIDE_BURST_POOL = 120;

const AmbientEffects = () => {
  const [enabled, setEnabled] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef(0);
  const scrollRafRef = useRef<number | null>(null);
  const lastBurstRef = useRef(0);
  const sideIndexRef = useRef(0);
  const sideRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

  const sidePool = useMemo(() => Array.from({ length: SIDE_BURST_POOL }, (_, i) => i), []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnabled(!reduced.matches);
    };

    sync();
    reduced.addEventListener("change", sync);

    return () => {
      reduced.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const triggerSide = (side: "left" | "right") => {
      const idx = sideIndexRef.current % SIDE_BURST_POOL;
      sideIndexRef.current += 1;
      const el = sideRefs.current[idx];
      if (!el) return;

      const top = `${12 + Math.random() * 58}%`;
      const delay = `${Math.random() * 0.1}s`;
      const duration = `${1.3 + Math.random() * 0.8}s`;
      const scale = `${0.82 + Math.random() * 0.42}`;

      el.className = `side-money ${side === "left" ? "side-money-left" : "side-money-right"}`;
      el.style.top = top;
      el.style.animationDelay = delay;
      el.style.animationDuration = duration;
      el.style.setProperty("--scale", scale);

      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "";
    };

    const emitBurst = () => {
      for (let i = 0; i < 5; i++) {
        triggerSide("left");
        triggerSide("right");
      }
    };

    const onScroll = () => {
      scrollYRef.current = window.scrollY;

      if (scrollRafRef.current == null) {
        scrollRafRef.current = window.requestAnimationFrame(() => {
          scrollRafRef.current = null;
          if (layerRef.current) {
            const y = scrollYRef.current * 0.06;
            layerRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
          }

          const now = performance.now();
          if (now - lastBurstRef.current > 140) {
            lastBurstRef.current = now;
            emitBurst();
          }
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current != null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

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
        {sidePool.map((id) => (
          <span
            key={id}
            ref={(el) => {
              sideRefs.current[id] = el;
            }}
            className="side-money side-money-left"
          />
        ))}
      </div>

      <span className="muzzle-flash muzzle-flash-a" />
      <span className="muzzle-flash muzzle-flash-b" />
      <span className="siren-beam siren-red siren-top-left" />
      <span className="siren-beam siren-blue siren-top-right" />
      <span className="siren-beam siren-red siren-bottom-right" />
      <span className="siren-beam siren-blue siren-bottom-left" />
      <span className="siren-beam siren-yellow siren-mid-left" />
      <span className="siren-beam siren-red siren-mid-right" />
      <span className="siren-beam siren-blue siren-center" />
    </div>
  );
};

export default AmbientEffects;
