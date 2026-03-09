import { useEffect } from "react";
import { ArrowLeft, Clock3, Download, Users, FileCode2, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import BeginStrip from "@/components/BeginStrip";

const rounds = [
  {
    title: "Round 1",
    duration: "45 minutes",
    questions: "3 Coding Problems",
    rule: "Only one member from each team participates.",
  },
  {
    title: "Round 2",
    duration: "45 minutes",
    questions: "3 Coding Problems",
    rule: "The second team member must participate. Begins simultaneously with Round 1. Top-performing teams will qualify for the Final Round.",
  },
  {
    title: "Round 3 (Final Round)",
    duration: "60 minutes",
    questions: "4 Coding Problems",
    rule: "Both team members participate together.",
  },
];

const importantNotes = [
  "Participants are requested to bring their own laptops. (2 laptops required). If laptop is not available, participants must tell the coordinators while registering.",
  "Participants must work only on their assigned link/session.",
  "Accessing another team member’s session is strictly prohibited.",
  "Any violation may lead to immediate disqualification.",
  "Using AI tools is strictly prohibited.",
];

const CodeRelayRules = () => {
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

          <BeginStrip focusWord="RELAY" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.4em] text-primary mb-4">// EVENT DOSSIER</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wider leading-none">
            CODE RELAY
          </h1>
          <p className="font-mono text-sm md:text-base text-muted-foreground mt-4 max-w-3xl leading-relaxed">
            Crack the Code. Pass the Relay. Win the Heist. The competition consists of 3 rounds that test coding ability, speed, teamwork, and coordination.
          </p>
          <a
            href="/files/CodeRelayRules.pdf"
            download="CodeRelayRules.pdf"
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
              <p className="font-mono text-xs text-muted-foreground mt-1">Coding, teamwork, and coordination.</p>
            </div>
            <div className="heist-border p-4 bg-background/40">
              <div className="flex items-center gap-2 text-primary">
                <Clock3 className="w-4 h-4" />
                <p className="font-mono text-[10px] tracking-[0.3em]">TOTAL DURATION</p>
              </div>
              <p className="font-display text-3xl text-heist-gold mt-2">150 MINS</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">45 (simultaneous) + 60 minutes.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground mb-6">EVENT FORMAT</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {rounds.map((round) => (
              <article key={round.title} className="heist-border p-6 bg-card/30 hover:bg-card/50 transition-colors">
                <p className="font-mono text-xs tracking-[0.3em] text-primary">{round.title.toUpperCase()}</p>
                <p className="font-display text-4xl text-heist-gold mt-3">{round.duration}</p>
                <p className="font-mono text-xs text-muted-foreground mt-2">{round.questions}</p>
                <p className="font-mono text-sm text-foreground mt-4 leading-relaxed">{round.rule}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 heist-border bg-card/30 p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-4">
            <ShieldAlert className="w-5 h-5" />
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground">RULES & REGULATIONS</h2>
          </div>
          <ul className="space-y-4">
            {importantNotes.map((note) => (
              <li key={note} className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed flex items-start gap-3">
                <span className="text-primary mt-0.5">[{'>'}]</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 text-center pb-8 border-b border-primary/20">
          <a
            href="/#join"
            className="font-display text-3xl md:text-4xl text-primary tracking-widest animate-pulse-red inline-block p-4 border border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all cursor-pointer"
          >
            THINK FAST. CODE SMART. EXECUTE THE PERFECT HEIST!
          </a>
        </section>
      </div>
    </main>
  );
};

export default CodeRelayRules;
