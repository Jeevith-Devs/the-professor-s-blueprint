import { useState } from "react";

const JoinCrew = () => {
  const [formData, setFormData] = useState({ name: "", email: "", team: "", track: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">
            // RECRUITMENT OPEN
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            JOIN THE CREW
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-lg mx-auto">
          {submitted ? (
            <div className="text-center heist-border p-12 bg-card/30">
              <p className="font-display text-4xl text-primary heist-glow mb-4">
                WELCOME, OPERATIVE.
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                Your codename has been assigned. Check your email for further instructions.
              </p>
              <p className="font-mono text-xs text-primary mt-6 tracking-widest">
                BELLA CIAO. 🎭
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { key: "name", label: "OPERATIVE NAME", placeholder: "Enter your name", type: "text" },
                { key: "email", label: "SECURE COMMS (EMAIL)", placeholder: "your@email.com", type: "email" },
                { key: "team", label: "CREW NAME", placeholder: "Your team name", type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full bg-card/50 heist-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground block mb-2">
                  HEIST TRACK
                </label>
                <select
                  required
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full bg-card/50 heist-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                >
                  <option value="">Select your operation...</option>
                  <option value="tokyo">TOKYO — AI / ML</option>
                  <option value="berlin">BERLIN — Web3 / Blockchain</option>
                  <option value="denver">DENVER — IoT / Hardware</option>
                  <option value="nairobi">NAIROBI — Design / UX</option>
                  <option value="helsinki">HELSINKI — Cybersecurity</option>
                  <option value="rio">RIO — Gaming / AR-VR</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-display text-2xl py-4 tracking-widest hover:bg-primary/80 transition-all animate-pulse-red"
              >
                INITIATE RECRUITMENT
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinCrew;
