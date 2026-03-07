const rules = [
  {
    number: "01",
    title: "TEAM SIZE",
    detail: "Each crew consists of 2-4 members. No lone wolves, no armies.",
  },
  {
    number: "02",
    title: "ORIGINAL WORK",
    detail: "All code must be written during the 48-hour window. Pre-built libraries allowed.",
  },
  {
    number: "03",
    title: "ONE TRACK",
    detail: "Choose one heist plan and commit. No switching mid-operation.",
  },
  {
    number: "04",
    title: "DEMO REQUIRED",
    detail: "Every team must present a working demo. The Professor doesn't accept excuses.",
  },
  {
    number: "05",
    title: "CODE OF CONDUCT",
    detail: "Respect every crew member. Harassment = immediate disqualification.",
  },
];

const Rules = () => {
  return (
    <section id="rules" className="py-24 heist-gradient relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
