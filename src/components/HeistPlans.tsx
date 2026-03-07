import { Brain, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";
import BeginStrip from "@/components/BeginStrip";

const tracks = [
  {
    icon: Brain,
    codename: "TOKYO",
    title: "CODE RELAY",
    description: "Build and ship functional code under pressure. Speed, clarity, and execution win.",
    href: "/code-relay-rules",
  },
  {
    icon: Paintbrush,
    codename: "NAIROBI",
    title: "IDEA FORGE",
    description: "Pitch bold product ideas with clarity and impact. The strongest concept takes the lead.",
  },
];

const HeistPlans = () => {
  return (
    <section id="plans" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BeginStrip focusWord="PLANNING" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">
            // CHOOSE YOUR OPERATION
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            HEIST PLANS
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tracks.map((track) => {
            const cardContent = (
              <>
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
                  <span>{track.href ? "VIEW RULES" : "COMING SOON"}</span>
                  <span>-&gt;</span>
                </div>
              </>
            );

            if (track.href) {
              return (
                <Link
                  key={track.codename}
                  to={track.href}
                  className="group block heist-border p-8 bg-card/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={track.codename}
                className="group heist-border p-8 bg-card/30 hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeistPlans;
