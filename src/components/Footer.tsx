import daliMask from "@/assets/dali-mask.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/10 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={daliMask} alt="" className="w-8 h-8 opacity-60" />
            <span className="font-display text-xl tracking-widest text-muted-foreground">
              HEIST<span className="text-primary">HACK</span> 2026
            </span>
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
