import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Member {
  name: string;
  role: string;
  color: string;
}

const team: Member[] = [
  { name: "Navya Mehrotra",    role: "Founder & President",       color: "hsl(28 100% 55%)" },
  { name: "Anvitha Subbaraman", role: "Marketing Head",           color: "hsl(43 85% 52%)" },
  { name: "Nishan Mistry",     role: "Treasurer",                 color: "hsl(135 55% 35%)" },
  { name: "Sitanshu Puranum",  role: "Head of Cultural Events",   color: "hsl(28 100% 55%)" },
  { name: "Marmik Dubey",      role: "Head of Special Events",    color: "hsl(43 85% 52%)" },
];

function MemberCard({ member, delay }: { member: Member; delay: string }) {
  const { color } = member;

  return (
    <div data-reveal data-delay={delay as any}
      className="bg-card border border-border rounded-xl p-6 card-hover flex flex-col gap-4">
      {/* Avatar — initials inside ornate spinning ring */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-2 opacity-40 animate-[mandala-spin_12s_linear_infinite]"
          style={{ borderColor: color }} />
        <div className="absolute inset-1 rounded-full flex items-center justify-center font-display font-bold text-xl"
          style={{ background: `${color}18`, color }}>
          {member.name.split(" ").map((n) => n[0]).join("")}
        </div>
      </div>

      <div>
        <p className="font-display font-bold text-foreground text-lg leading-tight">{member.name}</p>
        <p className="font-body text-xs tracking-widest uppercase mt-1" style={{ color }}>
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <div data-reveal>
          <p className="section-label mb-4">The Team</p>
          <h1 className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Meet the <span className="gradient-text">Committee.</span>
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed" data-reveal data-delay="150">
          Students from across India, united by one mission — making Maastricht feel like home.
        </p>
      </section>

      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member}
              delay={`${(i % 4) * 100 + 100}`} />
          ))}
        </div>

        <div className="mt-16 text-center" data-reveal>
          <p className="font-body text-muted-foreground text-sm">
            Want to join the committee next year?{" "}
            <a href="/join" className="text-primary hover:underline">Get in touch.</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
