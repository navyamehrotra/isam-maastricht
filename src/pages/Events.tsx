import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Tag } from "lucide-react";

interface Event {
  date: string;
  month: string;
  title: string;
  desc: string;
  location: string;
  tag: string;
  tagColor: string;
  past?: boolean;
}

const upcoming: Event[] = [
  {
    date: "15",
    month: "Mar",
    title: "Holi Celebration 2025",
    desc: "Our annual Holi event — colours, music, traditional sweets, and the best energy of the year. Open to everyone.",
    location: "Maastricht City Centre",
    tag: "Cultural",
    tagColor: "hsl(28 100% 55%)",
  },
  {
    date: "28",
    month: "Mar",
    title: "Startup Stories: India Edition",
    desc: "Three Indian founders based in the Netherlands share their journey. Q&A and networking to follow.",
    location: "Maastricht University, UM Campus",
    tag: "Career",
    tagColor: "hsl(43 85% 52%)",
  },
  {
    date: "10",
    month: "Apr",
    title: "Curry & Conversations",
    desc: "Our monthly social — home-cooked food, new people, good talks. All are welcome.",
    location: "TBA",
    tag: "Social",
    tagColor: "hsl(135 55% 35%)",
  },
  {
    date: "26",
    month: "Apr",
    title: "Bollywood Night",
    desc: "Dance, music, and an evening full of Bollywood classics. Our biggest social event of the semester.",
    location: "Muziekgieterij, Maastricht",
    tag: "Cultural",
    tagColor: "hsl(28 100% 55%)",
  },
];

const past: Event[] = [
  {
    date: "26",
    month: "Jan",
    title: "Republic Day Celebration",
    desc: "Marking India's Republic Day with a flag hoisting, cultural performances, and community dinner.",
    location: "Maastricht University",
    tag: "Cultural",
    tagColor: "hsl(28 100% 55%)",
    past: true,
  },
  {
    date: "12",
    month: "Nov",
    title: "Diwali 2024",
    desc: "Our biggest event of the year — lights, rangoli, Indian food, and a night to remember.",
    location: "City Centre",
    tag: "Cultural",
    tagColor: "hsl(28 100% 55%)",
    past: true,
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <div className={`bg-card border border-border rounded-xl p-7 card-hover flex gap-6 ${event.past ? "opacity-60" : ""}`}>
      {/* Date block */}
      <div className="flex-shrink-0 w-14 text-center">
        <p className="font-display font-black text-3xl leading-none" style={{ color: event.past ? undefined : "hsl(28 100% 55%)" }}>
          {event.date}
        </p>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">{event.month}</p>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-body text-xs px-3 py-1 rounded-full border"
            style={{ color: event.tagColor, borderColor: `${event.tagColor}40` }}>
            <Tag size={10} className="inline mr-1" />{event.tag}
          </span>
        </div>
        <p className="font-display font-bold text-foreground text-xl mb-2">{event.title}</p>
        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin size={12} />
          <span className="font-body text-xs">{event.location}</span>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <div data-reveal>
          <p className="section-label mb-4">Events</p>
          <h1 className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            What's <span className="gradient-text">On.</span>
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed" data-reveal data-delay="150">
          From Diwali to career panels — there's always something happening at ISA.
        </p>
      </section>

      {/* Upcoming */}
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <p className="section-label mb-8" data-reveal>Upcoming</p>
        <div className="flex flex-col gap-5">
          {upcoming.map((ev, i) => (
            <div key={ev.title} data-reveal data-delay={`${i * 100}` as any}>
              <EventCard event={ev} />
            </div>
          ))}
        </div>
      </section>

      {/* Past */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <p className="section-label mb-8" data-reveal>Past Events</p>
        <div className="flex flex-col gap-5">
          {past.map((ev, i) => (
            <div key={ev.title} data-reveal data-delay={`${i * 100}` as any}>
              <EventCard event={ev} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
