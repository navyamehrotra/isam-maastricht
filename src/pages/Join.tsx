import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mandala from "@/components/Mandala";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "success";

const perks = [
  "Access to all ISA events (Diwali, Holi, cultural nights)",
  "Monthly social meetups and networking",
  "Career panels and alumni connections",
  "A community of 100+ Indian students",
  "WhatsApp community & real-time updates",
  "Free to join — always",
];

const programmes = [
  "Business / Economics",
  "Law",
  "Medicine / Health",
  "Science / Technology",
  "Arts / Humanities",
  "Psychology",
  "Other",
];

export default function Join() {
  useScrollReveal();

  const [form, setForm] = useState({ name: "", email: "", programme: "Business / Economics", year: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  const inputClass =
    "w-full bg-card border border-border text-foreground font-body text-sm px-5 py-3 rounded-lg placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors";

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

            {/* Mini mandala */}
            <div className="hidden lg:flex justify-center opacity-30">
              <Mandala size={220} opacity={1} />
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3" data-reveal data-delay="150">
            {status === "success" ? (
              <div className="flex items-start gap-4 p-10 border border-primary/30 bg-card rounded-xl">
                <CheckCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: "hsl(28 100% 55%)" }} />
                <div>
                  <p className="font-display font-bold text-foreground text-2xl mb-2">Welcome to ISA!</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                    We've received your details and will be in touch soon with everything you need to get started.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-body text-xs text-muted-foreground tracking-widest uppercase">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange}
                      placeholder="Your name" required className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-xs text-muted-foreground tracking-widest uppercase">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-body text-xs text-muted-foreground tracking-widest uppercase">Programme</label>
                    <select name="programme" value={form.programme} onChange={handleChange}
                      className={inputClass + " cursor-pointer"}>
                      {programmes.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-xs text-muted-foreground tracking-widest uppercase">Study Year</label>
                    <input type="text" name="year" value={form.year} onChange={handleChange}
                      placeholder="e.g. Year 1, Master" className={inputClass} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body text-xs text-muted-foreground tracking-widest uppercase">
                    Anything you'd like us to know? (optional)
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Where are you from, what you're excited about..." rows={4}
                    className={inputClass + " resize-y"} />
                </div>

                <button type="submit" disabled={status === "loading"}
                  className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ background: "hsl(28 100% 55%)", color: "white" }}>
                  {status === "loading" ? "Submitting..." : <> Join ISA <ArrowRight size={13} /> </>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
