import { Brain, Globe, Cpu, Paintbrush, Lock, Gamepad2 } from "lucide-react";

const tracks = [
  {
    icon: Brain,
    codename: "TOKYO",
    title: "AI / ML",
    description: "Build intelligent systems that think, learn, and adapt. The Professor approves.",
  },
  {
    icon: Globe,
    codename: "BERLIN",
    title: "WEB3 / BLOCKCHAIN",
    description: "Decentralize everything. Smart contracts, DApps, and the future of finance.",
  },
  {
    icon: Cpu,
    codename: "DENVER",
    title: "IOT / HARDWARE",
    description: "Connect the physical world. Sensors, robots, and embedded systems.",
  },
  {
    icon: Paintbrush,
    codename: "NAIROBI",
    title: "DESIGN / UX",
    description: "Craft beautiful experiences. Every pixel is part of the plan.",
  },
  {
    icon: Lock,
    codename: "HELSINKI",
    title: "CYBERSECURITY",
    description: "Break in to protect. Ethical hacking, CTFs, and security tools.",
  },
  {
    icon: Gamepad2,
    codename: "RIO",
    title: "GAMING / AR-VR",
    description: "Build immersive worlds. Games, simulations, and alternate realities.",
  },
];

const HeistPlans = () => {
  return (
    <section id="plans" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">
            // CHOOSE YOUR OPERATION
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            HEIST PLANS
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tracks.map((track, i) => (
            <div
              key={track.codename}
              className="group heist-border p-8 bg-card/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-t-primary/20 border-l-[48px] border-l-transparent group-hover:border-t-primary/40 transition-colors" />
              </div>

              <div className="flex items-start gap-4 mb-4">
                <track.icon className="w-8 h-8 text-primary shrink-0 group-hover:animate-glitch" />
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-heist-gold">
                    CODENAME: {track.codename}
                  </p>
                  <h3 className="font-display text-2xl text-foreground tracking-wider mt-1">
                    {track.title}
                  </h3>
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {track.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary font-mono text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                <span>ACCESS FILE</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeistPlans;
