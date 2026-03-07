import { MapPin, CalendarClock, Navigation } from "lucide-react";
import BeginStrip from "@/components/BeginStrip";

const venueName = "Palani Murugan Hall of Fame";
const venueAddress = "Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College (Autonomous), Avadi, Chennai";
const mapQuery = "Palani Murugan Hall of Fame Vel Tech Multi Tech Dr.Rangarajan Dr.Sakunthala Engineering College Chennai";
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

const LocationSection = () => {
  return (
    <section id="location" className="py-24 heist-gradient relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BeginStrip focusWord="LOCATION" className="mb-4 text-2xl md:text-3xl" />
          <p className="font-mono text-xs tracking-[0.5em] text-primary mb-4">// OPERATION SITE</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">EVENT LOCATION</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="heist-border bg-card/40 p-6 md:p-8">
            <div className="flex items-start gap-3 mb-5">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-display text-3xl text-foreground tracking-wider">VENUE PIN</p>
                <p className="font-mono text-sm text-muted-foreground mt-1">{venueName}</p>
                <p className="font-mono text-xs text-muted-foreground/80 mt-2 leading-relaxed">{venueAddress}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-8">
              <CalendarClock className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-display text-3xl text-foreground tracking-wider">SCHEDULE</p>
                <p className="font-mono text-sm text-muted-foreground mt-1">18.03.2026 | 8:30 AM - 3:30 PM</p>
              </div>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-xl px-6 py-3 tracking-widest hover:bg-primary/80 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              OPEN IN GOOGLE MAPS
            </a>

            <div className="mt-8 heist-border bg-background/40 p-4 md:p-5">
              <p className="font-display text-3xl tracking-wider text-heist-gold mb-3">EVENT COORDINATORS</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="heist-border bg-card/30 p-4">
                  <p className="font-display text-3xl text-foreground tracking-wider">Sandeep R</p>
                  <p className="font-mono text-sm text-primary mt-1">Ph: +91 6369519310</p>
                </div>
                <div className="heist-border bg-card/30 p-4">
                  <p className="font-display text-3xl text-foreground tracking-wider">Ben Sharon J</p>
                  <p className="font-mono text-sm text-primary mt-1">Ph: +91 9940364941</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="group block heist-border bg-card/30 p-3 md:p-4 hover:bg-card/50 transition-colors"
          >
            <div className="relative h-[300px] md:h-[360px] overflow-hidden border border-primary/20">
              <iframe
                title="Event location mini map"
                src={`https://www.google.com/maps?output=embed&q=${encodeURIComponent(mapQuery)}`}
                className="w-full h-full grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-x-3 bottom-3 bg-background/80 border border-primary/25 px-3 py-2">
                <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-primary uppercase">
                  Palani Murugan Hall of Fame - Vel Tech Campus
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
