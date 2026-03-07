import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CountdownTimer = () => {
  const targetDate = new Date("2026-04-15T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="font-display text-4xl md:text-6xl text-primary heist-glow">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100% / 0.05) 2px, hsl(0 0% 100% / 0.05) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up opacity-0 stagger-1">
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-6 uppercase">
            // CLASSIFIED — TOP SECRET — EYES ONLY
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 stagger-2">
          <h1 className="font-display text-6xl md:text-9xl leading-none tracking-wider text-foreground mb-2">
            THE GREAT
          </h1>
          <h1 className="font-display text-7xl md:text-[10rem] leading-none tracking-wider text-primary heist-glow">
            HEIST HACK
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0 stagger-3 mt-8">
          <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            48 hours. One mission. Assemble your crew, pick your codename, 
            and hack your way to glory. The Professor has a plan.
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 stagger-4 mt-12">
          <CountdownTimer />
        </div>

        <div className="animate-fade-in-up opacity-0 stagger-5 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join"
            className="bg-primary text-primary-foreground font-display text-2xl px-10 py-4 tracking-widest hover:bg-primary/80 transition-all animate-pulse-red"
          >
            JOIN THE HEIST
          </a>
          <a
            href="#mission"
            className="heist-border text-foreground font-display text-2xl px-10 py-4 tracking-widest hover:bg-primary/10 transition-all"
          >
            THE PLAN ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
