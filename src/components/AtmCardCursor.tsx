import { useEffect, useRef, useState } from "react";

const AtmCardCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const billRef = useRef<HTMLDivElement>(null);

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

    const setPointerState = (isPointer: boolean) => {
      if (!billRef.current) return;
      billRef.current.dataset.pointer = isPointer ? "true" : "false";
    };

    const onMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${event.clientX - 16}px, ${event.clientY - 16}px, 0)`;

      const target = event.target as HTMLElement;
      const isPointer =
        target.closest("a, button, [role='button'], input, select, textarea") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setPointerState(isPointer);
    };

    const onDown = () => {
      if (!billRef.current) return;
      billRef.current.dataset.clicking = "true";
    };

    const onUp = () => {
      if (!billRef.current) return;
      billRef.current.dataset.clicking = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (billRef.current) {
        billRef.current.dataset.pointer = "false";
        billRef.current.dataset.clicking = "false";
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[120] will-change-transform"
      aria-hidden="true"
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
    >
      <div ref={billRef} className="cash-cursor-bill" data-pointer="false" data-clicking="false">
        <span className="cash-cursor-ring" />
        <span className="cash-cursor-core" />
        <span className="cash-cursor-glint" />
      </div>
      <span className="cash-cursor-trail" />
    </div>
  );
};

export default AtmCardCursor;
