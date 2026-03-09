import { Trophy, Medal, Award } from "lucide-react";
import BeginStrip from "@/components/BeginStrip";

const prizes = [
  { icon: Trophy, title: "1ST PRIZE", amount: "Rs.3000" },
  { icon: Medal, title: "2ND PRIZE", amount: "Rs.2000" },
  { icon: Award, title: "3RD PRIZE", amount: "Rs.1000" },
];

const Prizes = () => {
  return (
    <section id="prizes" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BeginStrip focusWord="PRIZES" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">// PER EVENT REWARDS</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">PRIZE POOL</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto heist-border bg-card/35 p-6 md:p-8">
          <div className="space-y-4">
            {prizes.map((prize) => (
              <div
                key={prize.title}
                className="flex items-center justify-between heist-border bg-background/45 px-4 md:px-6 py-4 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <prize.icon className="w-7 h-7 text-heist-gold" />
                  <p className="font-display text-3xl md:text-4xl tracking-wider text-foreground">{prize.title}</p>
                </div>
                <p className="font-display text-3xl md:text-4xl tracking-wider text-heist-gold">{prize.amount}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 heist-border bg-primary/10 px-4 md:px-6 py-4 flex items-center justify-between">
            <p className="font-display text-3xl md:text-4xl tracking-wider text-foreground">TOTAL PRIZE POOL</p>
            <p className="font-display text-4xl md:text-5xl tracking-wider text-primary">Rs.12000</p>
          </div>

          <div className="mt-4 heist-border bg-background/45 px-4 md:px-6 py-4">
            <p className="font-display text-2xl md:text-3xl tracking-wider text-foreground">CERTIFICATES</p>
            <p className="font-mono text-xs md:text-sm text-muted-foreground mt-1">
              Participation certificates will be provided to all participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
