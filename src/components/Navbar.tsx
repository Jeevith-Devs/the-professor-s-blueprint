import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
          : "bg-background/65 backdrop-blur-sm"
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
          className="md:hidden inline-flex items-center justify-center h-10 w-10 heist-border bg-card/40 text-primary hover:bg-card/60 transition-colors"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <a
          href="#join"
          className="hidden md:block bg-primary text-primary-foreground font-display text-lg px-6 py-2 tracking-wider hover:bg-primary/80 transition-colors animate-pulse-red"
        >
          REGISTER NOW
        </a>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex justify-center bg-primary text-primary-foreground font-display text-lg px-6 py-2 tracking-wider hover:bg-primary/80 transition-colors"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
