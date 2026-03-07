import { useEffect, useRef, useState } from "react";

const AtmCardCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches && window.innerWidth >= 1024);
    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);
    window.addEventListener("resize", updateEnabled);
    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("resize", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { x: target.x, y: target.y };

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    const animate = () => {
      current.x += (target.x - current.x) * 0.24;
      current.y += (target.y - current.y) * 0.24;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }
      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.cancelAnimationFrame(rafId);
      setPressed(false);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`atm-card-cursor ${pressed ? "atm-card-cursor-pressed" : ""}`}
      aria-hidden="true"
    >
      <span className="atm-card-chip" />
      <span className="atm-card-strip" />
      <span className="atm-card-dot" />
    </div>
  );
};

export default AtmCardCursor;
