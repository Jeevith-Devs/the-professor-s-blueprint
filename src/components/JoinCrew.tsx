import BeginStrip from "@/components/BeginStrip";

const JoinCrew = () => {
  return (
    <section id="join" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BeginStrip focusWord="RECRUITMENT" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">
            // RECRUITMENT OPEN
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            JOIN THE CREW
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-lg mx-auto">
          <div className="text-center heist-border p-12 bg-card/30">
            <p className="font-display text-4xl text-primary heist-glow mb-4">
              REGISTRATION LIVE
            </p>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              Click below to begin recruitment through the official form.
            </p>
            <a
              href="https://forms.gle/mACUk9usyrpYvXq29"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full bg-primary text-primary-foreground font-display text-2xl py-4 tracking-widest hover:bg-primary/80 transition-all animate-pulse-red"
            >
              INITIATE RECRUITMENT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCrew;
