const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/10 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/college-logo.png"
              alt="College Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover shrink-0 drop-shadow-[0_0_12px_hsl(var(--heist-gold)/0.35)]"
            />
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Department of Computer Science and Business Systems Presents
              </p>
              <span className="font-display text-xl tracking-widest text-muted-foreground">
                CODEHIVE <span className="text-primary">2K26</span>
              </span>
            </div>
          </div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            "IN THE END, MONEY IS JUST PAPER" — THE PROFESSOR
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/50">
            BELLA CIAO 🎭
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
