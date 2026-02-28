import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mandala from "@/components/Mandala";
import ChakraScroll from "@/components/ChakraScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const upcomingEvents = [
  {
    date: "15 Mar",
    title: "Holi Celebration 2025",
    desc: "Join us for colours, music, and good food as we celebrate the festival of spring together.",
    tag: "Cultural",
  },
  {
    date: "28 Mar",
    title: "Startup Stories: India Edition",
    desc: "Hear from Indian entrepreneurs in the Netherlands about their journey from idea to impact.",
    tag: "Career",
  },
  {
    date: "10 Apr",
    title: "Curry & Conversations",
    desc: "Our monthly casual meetup — great food, new faces, and a little bit of home.",
    tag: "Social",
  },
];

export default function Index() {
  useScrollReveal();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ clipPath: "inset(0)" }}>
        {/* Parallax background glow */}
        <div ref={bgRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
            style={{ background: "radial-gradient(circle, hsl(28 100% 55%), transparent)" }} />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-[90px] opacity-15"
            style={{ background: "radial-gradient(circle, hsl(135 55% 30%), transparent)" }} />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-[100px] opacity-10"
            style={{ background: "radial-gradient(circle, hsl(43 85% 52%), transparent)" }} />
        </div>

        {/* Mandala — decorative right side */}
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
          <div className="mandala-float">
            <Mandala size={560} opacity={0.22} />
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute pointer-events-none rounded-full"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              left: `${10 + i * 11}%`,
              bottom: `${15 + (i % 4) * 12}%`,
              background: i % 3 === 0
                ? "hsl(28 100% 55%)"
                : i % 3 === 1
                ? "hsl(43 85% 52%)"
                : "hsl(135 55% 30%)",
              animation: `particle-drift ${8 + i * 2}s ${i * 1.2}s ease-in-out infinite`,
              opacity: 0,
            }}
          />
        ))}

        {/* Hero text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-36 w-full">
          <p className="hero-label section-label mb-6" style={{ animationDelay: "0.1s" }}>
            Maastricht University · Indian Student Association
          </p>
          <h1 className="font-display font-black text-foreground leading-[1.05] mb-6"
            style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}>
            <span className="hero-line-wrap">
              <span className="hero-line" style={{ animationDelay: "0.35s" }}>Your Home</span>
            </span>
            <span className="hero-line-wrap">
              <span className="hero-line gradient-text" style={{ animationDelay: "0.55s" }}>Away From Home.</span>
            </span>
          </h1>
          <p className="hero-subtitle font-body text-muted-foreground text-lg leading-relaxed max-w-xl mb-10"
            style={{ animationDelay: "0.8s" }}>
            Connecting Indian students at Maastricht University through culture, community, and celebration.
          </p>
          <div className="hero-cta flex flex-wrap gap-4" style={{ animationDelay: "1s" }}>
            <Link to="/join"
              className="inline-flex items-center gap-2 bg-primary text-[hsl(20_18%_5%)] font-body font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Join ISA <ArrowRight size={14} />
            </Link>
            <Link to="/events"
              className="inline-flex items-center gap-2 border border-border text-muted-foreground font-body text-xs tracking-widest uppercase px-8 py-4 rounded-lg hover:border-primary/40 hover:text-foreground transition-all"
            >
              See Events
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, hsl(20 18% 5%), transparent)" }} />
      </section>

      {/* ── Ashoka Chakra Scroll ── */}
      <ChakraScroll />

      {/* ── Indian flag stripe divider ── */}
      <div className="max-w-7xl mx-auto px-6 mb-28 mt-8">
        <div className="flex h-px gap-0 overflow-hidden rounded-full opacity-30" data-reveal>
          <div className="flex-1" style={{ background: "hsl(28 100% 55%)" }} />
          <div className="flex-1 bg-white/50" />
          <div className="flex-1" style={{ background: "hsl(135 55% 30%)" }} />
        </div>
      </div>

      {/* ── Upcoming Events ── */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div data-reveal>
            <p className="section-label mb-3">On The Horizon</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">Upcoming Events</h2>
          </div>
          <Link to="/events" data-reveal data-delay="150"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            All events <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((ev, i) => (
            <div key={ev.title} data-reveal data-delay={`${i * 150}` as any}
              className="bg-card border border-border rounded-xl p-7 card-hover flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "hsl(43 85% 52%)" }}>{ev.date}</span>
                <span className="font-body text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                  {ev.tag}
                </span>
              </div>
              <p className="font-display font-bold text-foreground text-xl">{ev.title}</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1">{ev.desc}</p>
              <Link to="/events"
                className="inline-flex items-center gap-1 font-body text-xs text-primary hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Join Banner ── */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div data-reveal className="relative overflow-hidden rounded-2xl border border-border p-12 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, hsl(20 14% 9%), hsl(25 14% 11%))" }}>
          {/* Background mandala */}
          <div className="absolute right-[-80px] top-[-80px] pointer-events-none opacity-10">
            <Mandala size={360} opacity={1} />
          </div>
          <div className="absolute left-[-80px] bottom-[-80px] pointer-events-none opacity-10">
            <Mandala size={280} opacity={1} />
          </div>

          <p className="section-label mb-4">Be Part of It</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5">
            Ready to join the <span className="gradient-text">family?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Membership is free and open to all Indian students (and friends of Indian culture) at Maastricht University.
          </p>
          <Link to="/join"
            className="inline-flex items-center gap-2 bg-primary text-[hsl(20_18%_5%)] font-body font-semibold text-xs tracking-widest uppercase px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Join ISA Today <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
