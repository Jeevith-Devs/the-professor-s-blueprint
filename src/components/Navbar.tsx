import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const links = [
    { label: "MISSION", href: "#mission" },
    { label: "PRIZES", href: "#prizes" },
    { label: "LOCATION", href: "#location" },
    { label: "HEIST PLANS", href: "#plans" },
    { label: "RULES", href: "#rules" },
    { label: "JOIN THE CREW", href: "#join" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 md:py-3 px-6">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/codehive2k26-logo.png"
            alt="CodeHive 2K26 Logo"
            className="h-24 w-auto md:h-28 object-contain shrink-0 drop-shadow-[0_0_12px_hsl(var(--heist-gold)/0.55)] group-hover:animate-glitch"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden group relative inline-flex items-center justify-center h-11 w-11 heist-border bg-card/40 text-primary hover:bg-card/60 active:scale-95 transition-all duration-300"
        >
          <span className={`atm-burger-core ${mobileMenuOpen ? "atm-burger-core-open" : ""}`} />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
            }`}
          />
          <span
            className={`absolute h-0.5 w-4 rounded-full bg-primary transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
            }`}
          />
        </button>
        <a
          href="#join"
          className="hidden md:block bg-primary text-primary-foreground font-display text-lg px-6 py-2 tracking-wider hover:bg-primary/80 transition-colors animate-pulse-red"
        >
          REGISTER NOW
        </a>
      </div>
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`md:hidden fixed inset-0 top-[92px] bg-background/60 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`md:hidden overflow-hidden border-t border-primary/20 bg-background/95 backdrop-blur-md transition-all duration-500 ease-out ${
          mobileMenuOpen ? "max-h-[34rem] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="relative mb-4 h-2 w-full rounded-full border border-primary/30 bg-background/80 shadow-[inset_0_0_12px_hsl(var(--heist-red)/0.25)] overflow-hidden">
            <span className={`atm-slot-scan ${mobileMenuOpen ? "atm-slot-scan-open" : ""}`} />
          </div>
          <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <div
              key={link.label}
              className="overflow-hidden rounded-sm border border-primary/20 bg-card/40"
            >
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-500 ${
                  mobileMenuOpen
                    ? "text-foreground translate-y-0 opacity-100 atm-dispense-note-open"
                    : "text-muted-foreground -translate-y-full opacity-0"
                } hover:text-primary hover:bg-primary/10`}
                style={{ transitionDelay: `${index * 70}ms`, animationDelay: `${index * 85}ms` }}
              >
                {link.label}
              </a>
            </div>
          ))}
          </div>
          <a
            href="#join"
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-4 inline-flex justify-center bg-primary text-primary-foreground font-display text-lg px-6 py-3 tracking-wider hover:bg-primary/80 transition-all duration-500 ${
              mobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
