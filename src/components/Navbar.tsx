import { useState, useEffect } from "react";
import daliMask from "@/assets/dali-mask.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "MISSION", href: "#mission" },
    { label: "HEIST PLANS", href: "#plans" },
    { label: "RULES", href: "#rules" },
    { label: "JOIN THE CREW", href: "#join" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-3 group">
          <img src={daliMask} alt="Heist Logo" className="w-10 h-10 group-hover:animate-glitch" />
          <span className="font-display text-2xl tracking-widest text-primary">
            HEIST<span className="text-foreground">HACK</span>
          </span>
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
        <a
          href="#join"
          className="hidden md:block bg-primary text-primary-foreground font-display text-lg px-6 py-2 tracking-wider hover:bg-primary/80 transition-colors animate-pulse-red"
        >
          REGISTER NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
