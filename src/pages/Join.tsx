import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mandala from "@/components/Mandala";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";

const perks = [
  "Access to all ISA events (Diwali, Holi, cultural nights)",
  "Monthly social meetups and networking",
  "Career panels and alumni connections",
  "A community of 100+ Indian students",
  "WhatsApp community & real-time updates",
  "Free to join — always",
];

export default function Join() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <div data-reveal>
          <p className="section-label mb-4">Join Us</p>
          <h1 className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Be Part of <span className="gradient-text">ISA.</span>
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed" data-reveal data-delay="150">
          Membership is free and open to all Indian students — and friends of Indian culture — at Maastricht University.
        </p>
      </section>

      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — perks */}
          <div className="lg:col-span-2 space-y-8" data-reveal>
            <div>
              <p className="section-label mb-6">What You Get</p>
              <div className="space-y-4">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: "hsl(28 100% 55%)" }} />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{perk}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center opacity-30">
              <Mandala size={220} opacity={1} />
            </div>
          </div>

          {/* Right — email CTA */}
          <div className="lg:col-span-3" data-reveal data-delay="150">
            <div className="bg-card border border-border rounded-xl p-10 flex flex-col gap-6">
              <div>
                <p className="font-display font-bold text-foreground text-2xl mb-3">Ready to join?</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Send us an email with your name, programme, and study year and we'll add you to the community.
                </p>
              </div>
              <a
                href="mailto:isa.universitymaastricht@gmail.com?subject=I'd%20like%20to%20join%20ISA&body=Hi%20ISA%20team%2C%0A%0AMy%20name%20is%20%5Byour%20name%5D%2C%20I'm%20studying%20%5Byour%20programme%5D%20in%20%5Byear%5D.%0A%0AI'd%20love%20to%20join%20the%20community.%0A%0AThanks!"
                className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-lg hover:opacity-90 transition-opacity w-fit"
                style={{ background: "hsl(28 100% 55%)", color: "white" }}
              >
                <Mail size={13} /> Email Us to Join <ArrowRight size={13} />
              </a>
              <p className="font-body text-xs text-muted-foreground">
                isa.universitymaastricht@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
