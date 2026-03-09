import { useEffect } from "react";
import { ArrowLeft, Clock3, Download, FileCode2, ListChecks, Lightbulb, ShieldAlert, Users } from "lucide-react";
import { Link } from "react-router-dom";
import BeginStrip from "@/components/BeginStrip";

const eventFlow = [
  { phase: "Introduction & Briefing", duration: "15 mins", purpose: "Explain rules & distribute code" },
  { phase: "Round 1 - Code Analysis", duration: "40 mins", purpose: "Understand & identify issues" },
  { phase: "Round 2 - Upgrade & Modify", duration: "70 mins", purpose: "Improve the code" },
  { phase: "Short Break", duration: "5 mins", purpose: "Refresh" },
  { phase: "Round 3 - Mini Pitch", duration: "40 mins", purpose: "Present improvements" },
  { phase: "Judge Discussion & Results", duration: "10 mins", purpose: "Final evaluation" },
];

const participationRules = [
  "Round 1 is based on code understanding and analysis (Java - OOP focused).",
  "Read the complete scenario before answering; base every answer on the provided code only.",
  "Answers must be clear, structured, and technically accurate.",
  "Identify multiple valid design issues and justify key OOP principle violations.",
  "Submit actionable refactor suggestions; implementation is not required in this round.",
  "The answer key is for judges only. Participant responses are evaluated on reasoning clarity and technical correctness.",
];

const ReverseGearRules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen heist-gradient pb-20">
      <div className="container mx-auto px-6 py-10 md:py-14">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 heist-border px-4 py-2 font-mono text-xs tracking-widest text-muted-foreground hover:text-primary hover:bg-card/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO HQ
          </Link>
        </div>

        <section className="heist-border bg-card/40 backdrop-blur-sm p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[96px] border-t-primary/10 border-l-[96px] border-l-transparent" />
          </div>

          <BeginStrip focusWord="REVERSE" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.4em] text-primary mb-4">// EVENT DOSSIER</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wider leading-none">
            REVERSE GEAR
          </h1>
          <p className="font-mono text-sm md:text-base text-muted-foreground mt-4 max-w-3xl leading-relaxed">
            ReverseGear Round 1 focuses on reverse analysis of a Java OOP codebase. Participants must interpret
            behavior, detect design flaws, map OOP violations, and propose better architecture.
          </p>
          <a
            href="/files/ReverseGearRules.pdf"
            download="ReverseGearRules.pdf"
            className="inline-flex items-center gap-2 mt-6 heist-border px-4 py-2 font-mono text-xs tracking-[0.2em] text-primary hover:bg-primary/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD RULES PDF
          </a>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="heist-border p-4 bg-background/40">
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <p className="font-mono text-[10px] tracking-[0.3em]">TEAM SIZE</p>
              </div>
              <p className="font-display text-3xl text-heist-gold mt-2">2 MEMBERS</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Individual participation is not allowed.</p>
            </div>
            <div className="heist-border p-4 bg-background/40">
              <div className="flex items-center gap-2 text-primary">
                <FileCode2 className="w-4 h-4" />
                <p className="font-mono text-[10px] tracking-[0.3em]">ROUNDS</p>
              </div>
              <p className="font-display text-3xl text-heist-gold mt-2">3 ROUNDS</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Analysis, upgrades, and final pitch.</p>
            </div>
            <div className="heist-border p-4 bg-background/40">
              <div className="flex items-center gap-2 text-primary">
                <Clock3 className="w-4 h-4" />
                <p className="font-mono text-[10px] tracking-[0.3em]">TOTAL DURATION</p>
              </div>
              <p className="font-display text-3xl text-heist-gold mt-2">180 MINS</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">15 + 40 + 70 + 5 + 40 + 10 minutes.</p>
            </div>
          </div>
        </section>

        <section className="mt-10 heist-border bg-card/30 p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-4">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground">EVENT FLOW OVERVIEW</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 font-display text-lg tracking-wide text-foreground">PHASE</th>
                  <th className="text-left py-3 font-display text-lg tracking-wide text-foreground">DURATION</th>
                  <th className="text-left py-3 font-display text-lg tracking-wide text-foreground">PURPOSE</th>
                </tr>
              </thead>
              <tbody>
                {eventFlow.map((item) => (
                  <tr key={item.phase} className="border-b border-primary/10">
                    <td className="py-3 font-mono text-sm text-foreground">{item.phase}</td>
                    <td className="py-3 font-mono text-sm text-heist-gold">{item.duration}</td>
                    <td className="py-3 font-mono text-sm text-muted-foreground">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-display text-3xl md:text-4xl text-foreground mt-6">
            TOTAL = <span className="text-primary">180 MINUTES (3 HOURS)</span>
          </p>
        </section>

        <section className="mt-10 heist-border bg-card/30 p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-4">
            <ShieldAlert className="w-5 h-5" />
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground">RULES & EVALUATION</h2>
          </div>
          <ul className="space-y-4">
            {participationRules.map((rule) => (
              <li key={rule} className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary mt-0.5">[{'>'}]</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-5">
          <article className="heist-border p-6 bg-card/30">
            <div className="flex items-center gap-2 text-primary">
              <ListChecks className="w-5 h-5" />
              <h3 className="font-display text-2xl tracking-wider text-foreground">EXAMPLE SCENARIO</h3>
            </div>
            <p className="font-mono text-sm text-muted-foreground mt-3 leading-relaxed">
              Library Book Management System (working but poorly designed) in Java.
            </p>
          </article>
          <article className="heist-border p-6 bg-card/30">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-display text-2xl tracking-wider text-foreground">WHAT JUDGES LOOK FOR</h3>
            </div>
            <p className="font-mono text-sm text-muted-foreground mt-3 leading-relaxed">
              Correct program understanding, strong OOP reasoning, and realistic refactoring suggestions.
            </p>
          </article>
        </section>

        <section className="mt-16 text-center pb-8 border-b border-primary/20">
          <a
            href="/#join"
            className="font-display text-3xl md:text-4xl text-primary tracking-widest animate-pulse-red inline-block p-4 border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all cursor-pointer"
          >
            THINK DEEP. FIND FLAWS. REFACTOR TO PERFECTION!
          </a>
        </section>
      </div>
    </main>
  );
};

export default ReverseGearRules;
