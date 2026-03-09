import BeginStrip from "@/components/BeginStrip";

const rules = [
  {
    number: "01",
    title: "CODE RELAY TEAM SIZE",
    detail: "Code Relay is strictly a 2-member team event. No individual entries and no teams above 2.",
  },
  {
    number: "02",
    title: "REVERSE GEAR RULES",
    detail: "Reverse Gear is a 2-member event focused on Java OOP code analysis, flaw identification, and structured refactor recommendations.",
  },
  {
    number: "03",
    title: "ORIGINAL WORK",
    detail: "All solutions must be completed during the live event rounds.",
  },
  {
    number: "04",
    title: "ONE TRACK ONLY",
    detail: "Each team must register for a single event track.",
  },
  {
    number: "05",
    title: "CODE OF CONDUCT",
    detail: "Respect all participants and coordinators. Unfair practices may lead to disqualification.",
  },
];

const Rules = () => {
  return (
    <section id="rules" className="py-24 heist-gradient relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BeginStrip focusWord="RULES" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">
            // THE PROFESSOR'S ORDERS
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            THE RULES
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {rules.map((rule) => (
            <div
              key={rule.number}
              className="flex gap-6 p-6 heist-border bg-card/30 hover:bg-card/60 transition-all group"
            >
              <span className="font-display text-4xl text-primary/30 group-hover:text-primary transition-colors shrink-0">
                {rule.number}
              </span>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wider">
                  {rule.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-1 leading-relaxed">
                  {rule.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
