import { useEffect, useRef, useState } from "react";

const AtmCardCursor = () => {
  const [enabled, setEnabled] = useState(false);
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

    const onMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const onDown = () => cursorRef.current?.classList.add("atm-card-cursor-pressed");
    const onUp = () => cursorRef.current?.classList.remove("atm-card-cursor-pressed");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cursorRef.current?.classList.remove("atm-card-cursor-pressed");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="atm-card-cursor" aria-hidden="true">
      <span className="atm-card-chip" />
      <span className="atm-card-strip" />
      <span className="atm-card-dot" />
    </div>
  );
};

export default AtmCardCursor;
