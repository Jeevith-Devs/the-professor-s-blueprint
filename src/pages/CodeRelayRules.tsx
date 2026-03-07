import { ArrowLeft, Clock3, Users, FileCode2, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import BeginStrip from "@/components/BeginStrip";

const rounds = [
  {
    title: "Round 1",
    duration: "15 minutes",
    questions: "2 questions",
    rule: "Only one member from each team is allowed to participate in this round.",
  },
  {
    title: "Round 2",
    duration: "15 minutes",
    questions: "2 questions",
    rule: "The other team member must participate. The Round 1 member cannot participate in Round 2.",
  },
  {
    title: "Round 3 (Final Round)",
    duration: "40 minutes",
    questions: "4 total questions (2 per participant)",
    rule: "Each member gets a separate coding link and must solve 2 questions individually.",
  },
];

const importantNotes = [
  "Both coding sessions in Round 3 run simultaneously within the same 40-minute window.",
  "AI tools are not allowed.",
  "Participants must work only on their assigned coding link.",
  "Each participant must have a HackerRank account.",
  "Teams must bring their own laptops.",
  "Accessing or modifying the other team member's session is strictly not allowed.",
];

const CodeRelayRules = () => {
  return (
    <main className="min-h-screen heist-gradient">
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

        <section className="heist-border bg-card/40 backdrop-blur-sm p-6 md:p-10">
          <BeginStrip focusWord="RELAY" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.4em] text-primary mb-4">// EVENT DOSSIER</p>
          <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wider leading-none">
            CODE RELAY
          </h1>
          <p className="font-mono text-xs md:text-sm text-muted-foreground mt-4 max-w-3xl leading-relaxed">
            Official event rules extracted from the Code Relay event brief. Follow every instruction during the mission.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="heist-border p-4 bg-background/40">
              <div className="flex items-center gap-2 text-primary">
                <Users className="w-4 h-4" />
                <p className="font-mono text-[10px] tracking-[0.3em]">TEAM SIZE</p>
              </div>
              <p className="font-display text-3xl text-heist-gold mt-2">2 MEMBERS</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">No individual participation.</p>
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
              <p className="font-display text-3xl text-heist-gold mt-2">70 MINS</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">15 + 15 + 40 minutes.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground mb-6">ROUND BREAKDOWN</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {rounds.map((round) => (
              <article key={round.title} className="heist-border p-6 bg-card/30 hover:bg-card/50 transition-colors">
                <p className="font-mono text-xs tracking-[0.3em] text-primary">{round.title.toUpperCase()}</p>
                <p className="font-display text-3xl text-heist-gold mt-3">{round.duration}</p>
                <p className="font-mono text-xs text-muted-foreground mt-2">{round.questions}</p>
                <p className="font-mono text-xs text-muted-foreground mt-4 leading-relaxed">{round.rule}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 heist-border bg-card/30 p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-4">
            <ShieldAlert className="w-5 h-5" />
            <h2 className="font-display text-3xl md:text-4xl tracking-wider text-foreground">IMPORTANT NOTES</h2>
          </div>
          <ul className="space-y-3">
            {importantNotes.map((note) => (
              <li key={note} className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
                [ ] {note}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default CodeRelayRules;
