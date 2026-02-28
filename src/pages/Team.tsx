import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Board members ── */
const board = [
  {
    name: "Navya Mehrotra",
    role: "Founder & President",
    photo: "/team/navya.jpeg",
    color: "hsl(28 100% 55%)",
  },
  {
    name: "Anvitha Subbaraman",
    role: "Marketing Head",
    photo: "/team/anvitha.jpeg",
    color: "hsl(43 85% 52%)",
  },
  {
    name: "Nishan Mistry",
    role: "Treasurer",
    photo: null,
    color: "hsl(160 55% 38%)",
  },
  {
    name: "Sitanshu Puranum",
    role: "Head of Cultural Events",
    photo: null,
    color: "hsl(28 100% 55%)",
  },
  {
    name: "Marmik Dubey",
    role: "Head of Special Events",
    photo: null,
    color: "hsl(43 85% 52%)",
  },
];

/* ── Department teams ── */
const teams = [
  {
    name: "Marketing Team",
    head: "Anvitha Subbaraman",
    photos: ["/team/marketing-team-a.jpeg", "/team/marketing-team-b.jpeg"],
    color: "hsl(43 85% 52%)",
    desc: "Crafting the ISA story — from social media to event campaigns, they make sure the world knows we exist.",
  },
  {
    name: "Cultural Events Team",
    head: "Sitanshu Puranum",
    photos: ["/team/sitanshu-team.jpeg"],
    color: "hsl(28 100% 55%)",
    desc: "The people behind Diwali, Holi, Republic Day and every celebration that keeps Indian culture alive in Maastricht.",
  },
  {
    name: "Special Events Team",
    head: "Marmik Dubey",
    photos: ["/team/marmik-team.jpeg"],
    color: "hsl(160 55% 38%)",
    desc: "Career panels, collaborations, movie nights — the team that keeps our calendar exciting and full of surprises.",
  },
];

function BoardCard({ member, i }: { member: typeof board[0]; i: number }) {
  const initials = member.name.split(" ").map((n) => n[0]).join("");
  const delay = `${(i % 3) * 150}`;

  return (
    <div
      data-reveal
      data-delay={delay as any}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border card-hover bg-card"
    >
      {/* Photo or initials */}
      <div className="relative w-full aspect-square overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-display font-black text-6xl"
            style={{ background: `${member.color}14`, color: member.color }}
          >
            {initials}
          </div>
        )}
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }} />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="w-6 h-0.5 rounded-full mb-3" style={{ background: member.color }} />
        <p className="font-display font-bold text-foreground text-lg leading-tight">{member.name}</p>
        <p className="font-body text-xs tracking-widest uppercase mt-1.5" style={{ color: member.color }}>
          {member.role}
        </p>
      </div>
    </div>
  );
}

function TeamSection({ team, reverse }: { team: typeof teams[0]; reverse?: boolean }) {
  return (
    <div data-reveal className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border ${reverse ? "lg:[direction:rtl]" : ""}`}>
      {/* Photo(s) */}
      <div className={`relative overflow-hidden ${reverse ? "[direction:ltr]" : ""}`}
        style={{ minHeight: "360px" }}>
        {team.photos.length === 1 ? (
          <img
            src={team.photos[0]}
            alt={team.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            style={{ minHeight: "360px" }}
          />
        ) : (
          <div className="grid grid-cols-2 h-full" style={{ minHeight: "360px" }}>
            {team.photos.map((p, i) => (
              <div key={i} className="relative overflow-hidden">
                <img src={p} alt={team.name} className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" style={{ minHeight: "360px" }} />
              </div>
            ))}
          </div>
        )}
        {/* colour tint overlay */}
        <div className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none"
          style={{ background: team.color }} />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center p-10 lg:p-14 bg-card ${reverse ? "[direction:ltr]" : ""}`}>
        <p className="section-label mb-4" style={{ color: team.color }}>{team.name}</p>
        <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3 leading-tight">
          Led by {team.head.split(" ")[0]}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed text-base mb-6">{team.desc}</p>
        <div className="flex gap-1 h-1 w-20 rounded-full overflow-hidden">
          <div className="flex-1" style={{ background: "hsl(28 100% 55%)" }} />
          <div className="flex-1 bg-white/20" />
          <div className="flex-1" style={{ background: "hsl(135 55% 30%)" }} />
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Header ── */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <div data-reveal>
          <p className="section-label mb-4">The People</p>
          <h1 className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Meet the <span className="gradient-text">Team.</span>
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed"
          data-reveal data-delay="150">
          Students from across India, united by one mission — making Maastricht feel like home.
        </p>
      </section>

      {/* ── Board ── */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <p className="section-label mb-8" data-reveal>Leadership Board</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Navya spans wider on lg */}
          {board.map((member, i) => (
            <BoardCard key={member.name} member={member} i={i} />
          ))}
        </div>
      </section>

      {/* ── Flag divider ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex h-px gap-0 overflow-hidden rounded-full opacity-30" data-reveal>
          <div className="flex-1" style={{ background: "hsl(28 100% 55%)" }} />
          <div className="flex-1 bg-white/50" />
          <div className="flex-1" style={{ background: "hsl(135 55% 30%)" }} />
        </div>
      </div>

      {/* ── Department Teams ── */}
      <section className="pb-28 max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <p className="section-label mb-4" data-reveal>Our Teams</p>
        {teams.map((team, i) => (
          <TeamSection key={team.name} team={team} reverse={i % 2 !== 0} />
        ))}
      </section>

      {/* ── Join CTA ── */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div data-reveal className="text-center py-16 px-8 rounded-2xl border border-border bg-card">
          <p className="section-label mb-4">Join the Family</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Want to be part of the <span className="gradient-text">next chapter?</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            We're always looking for passionate people to join ISA — on the board or as a member.
          </p>
          <a href="/join"
            className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            style={{ background: "hsl(28 100% 55%)", color: "hsl(20 18% 5%)" }}>
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
