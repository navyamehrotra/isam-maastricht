import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Member {
  name: string;
  role: string;
  state: string;
  programme: string;
}

const team: Member[] = [
  { name: "Arjun Sharma", role: "President", state: "Delhi", programme: "International Business" },
  { name: "Priya Nair", role: "Vice President", state: "Kerala", programme: "Data Science" },
  { name: "Rohan Mehta", role: "Events Director", state: "Maharashtra", programme: "Economics" },
  { name: "Ananya Iyer", role: "Cultural Lead", state: "Tamil Nadu", programme: "Arts & Culture" },
  { name: "Vikram Patel", role: "Treasurer", state: "Gujarat", programme: "Finance" },
  { name: "Shreya Bose", role: "Marketing", state: "West Bengal", programme: "Media Studies" },
  { name: "Karan Singh", role: "External Relations", state: "Punjab", programme: "International Law" },
  { name: "Divya Kapoor", role: "Community Manager", state: "Rajasthan", programme: "Psychology" },
];

const stateColors: Record<string, string> = {
  "Delhi": "hsl(28 100% 55%)",
  "Kerala": "hsl(135 55% 30%)",
  "Maharashtra": "hsl(43 85% 52%)",
  "Tamil Nadu": "hsl(28 100% 55%)",
  "Gujarat": "hsl(43 85% 52%)",
  "West Bengal": "hsl(135 55% 30%)",
  "Punjab": "hsl(28 100% 55%)",
  "Rajasthan": "hsl(43 85% 52%)",
};

function MemberCard({ member, delay }: { member: Member; delay: string }) {
  const color = stateColors[member.state] ?? "hsl(28 100% 55%)";

  return (
    <div data-reveal data-delay={delay as any}
      className="bg-card border border-border rounded-xl p-6 card-hover flex flex-col gap-4">
      {/* Avatar placeholder — ornate circle */}
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

      <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-border">
        <p className="font-body text-xs text-muted-foreground">{member.programme}</p>
        <p className="font-body text-xs" style={{ color: `${color}cc` }}>{member.state}, India</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
