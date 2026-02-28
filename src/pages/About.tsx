import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mandala from "@/components/Mandala";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, Globe, Flame, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Belonging", desc: "No one should feel alone in a foreign country. We make sure every member feels seen and supported." },
  { icon: Globe, title: "Diversity", desc: "India is 28 states, hundreds of languages, and thousands of traditions. We celebrate all of it." },
  { icon: Flame, title: "Passion", desc: "We're run entirely by students who care — about culture, community, and making Maastricht feel like home." },
  { icon: BookOpen, title: "Learning", desc: "Cultural exchange goes both ways. We share India with the world, and bring the world back to our members." },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <div data-reveal>
          <p className="section-label mb-4">About Us</p>
          <h1 className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Who We <span className="gradient-text">Are.</span>
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed" data-reveal data-delay="150">
          ISAM is Maastricht University's Indian student community — a place to find culture, friendship, and a little piece of home in the heart of Europe.
        </p>
      </section>

      {/* Story */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6" data-reveal>
            <p className="section-label">Our Story</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Born from a simple idea: no student should feel far from home.
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              ISAM was founded by a group of Indian students who arrived in Maastricht and felt the gap — no Diwali, no Holi, no one to make chai with at midnight before exams. So they built what was missing.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Today we're a growing community of students from every corner of India, united by shared culture and a love for building something meaningful together.
            </p>
          </div>
          <div className="flex justify-center" data-reveal data-delay="200">
            <div className="relative">
              <Mandala size={400} opacity={0.35} />
              {/* Colour dots overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full" style={{ background: "hsl(135 55% 30%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14" data-reveal>
          <p className="section-label mb-3">What We Believe</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={v.title} data-reveal data-delay={`${i * 100 + 100}` as any}
              className="bg-card border border-border rounded-xl p-8 card-hover flex gap-5">
              <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center"
                style={{ background: "hsl(28 100% 55% / 0.1)" }}>
                <v.icon size={20} style={{ color: "hsl(28 100% 55%)" }} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg mb-2">{v.title}</p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
