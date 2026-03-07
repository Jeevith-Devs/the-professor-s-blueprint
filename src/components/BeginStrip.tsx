import { cn } from "@/lib/utils";

type BeginStripProps = {
  focusWord: string;
  className?: string;
};

const BeginStrip = ({ focusWord, className }: BeginStripProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 border border-primary/25 bg-black/70 px-2 py-1 font-display uppercase leading-none tracking-wide",
        className
      )}
    >
      <span className="text-foreground">Let The</span>
      <span className="bg-primary px-2 py-0.5 text-primary-foreground">{focusWord}</span>
      <span className="text-foreground">Begin</span>
    </div>
  );
};

export default BeginStrip;
