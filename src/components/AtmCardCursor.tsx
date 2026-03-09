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
      // Center the 48x48 image on the cursor
      cursorRef.current.style.transform = `translate3d(${event.clientX - 24}px, ${event.clientY - 24}px, 0)`;

      const target = event.target as HTMLElement;
      const isPointer = 
        target.closest("a, button, [role='button'], input, select, textarea") !== null || 
        window.getComputedStyle(target).cursor === "pointer";

      // Apply pointer state styling (larger size and slight brightness increase)
      if (isPointer) {
        cursorRef.current.firstElementChild?.classList.add("scale-125", "brightness-125");
      } else {
        cursorRef.current.firstElementChild?.classList.remove("scale-125", "brightness-125");
      }
    };

    const onDown = () => {
      cursorRef.current?.firstElementChild?.classList.remove("scale-125");
      cursorRef.current?.firstElementChild?.classList.add("scale-75");
    };
    
    const onUp = () => {
      cursorRef.current?.firstElementChild?.classList.remove("scale-75");
      // Scale-125 will be re-applied on the next move event if still hovering a pointer element
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cursorRef.current?.firstElementChild?.classList.remove("scale-75", "scale-125", "brightness-125");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[120] will-change-transform" 
      aria-hidden="true"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <img src="/images/money-cursor.png" alt="Money Cursor" className="w-12 h-12 transition-transform duration-100 ease-out drop-shadow-lg" />
    </div>
  );
};

export default AtmCardCursor;
