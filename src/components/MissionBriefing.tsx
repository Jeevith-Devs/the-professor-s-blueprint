import { Shield, Clock, Users, Zap } from "lucide-react";
import BeginStrip from "@/components/BeginStrip";

const stats = [
  { icon: Clock, value: "3HRS", label: "NON-STOP HACKING" },
  { icon: Users, value: "60+", label: "CREW MEMBERS" },
  { icon: Shield, value: "12K", label: "IN BOUNTY" },
  { icon: Zap, value: "2", label: "HEIST TRACKS" },
];

const MissionBriefing = () => {
  return (
    <section id="mission" className="py-24 heist-gradient relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <BeginStrip focusWord="MISSION" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">
            // OPERATION BRIEFING
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            THE MISSION
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        {/* Briefing text */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="heist-border p-8 bg-card/50 backdrop-blur-sm">
            <p className="font-mono text-xs text-primary mb-2 tracking-widest">
              CLASSIFIED DOCUMENT #001
            </p>
            <p className="font-mono text-sm text-foreground/80 leading-relaxed">
              The Professor has devised the ultimate plan. This isn't just another hackathon — 
              it's a coordinated operation. Your team of 2-4 operatives will infiltrate one of 
              our designated tracks, build something extraordinary in 3 hours, and present your 
              creation to the panel of judges. The best crews walk away with glory, prizes, and 
              the respect of the underground.
            </p>
            <p className="font-mono text-sm text-foreground/80 leading-relaxed mt-4">
              No one gets left behind. No one breaks the rules. <span className="text-primary">Bella Ciao.</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 heist-border bg-card/30 hover:bg-card/60 transition-all group"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-4 group-hover:animate-glitch" />
              <div className="font-display text-4xl text-heist-gold tracking-wider">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionBriefing;
