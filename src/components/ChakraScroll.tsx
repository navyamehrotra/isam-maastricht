import { useEffect, useRef, useState } from "react";

const STAGES = [
  {
    title: "Community",
    subtitle: "No one should feel alone.",
    desc: "A warm, welcoming space for every Indian student navigating life in the Netherlands. From day one, you belong here.",
    color: "hsl(28 100% 55%)",
    glow: "hsl(28 100% 55% / 0.4)",
  },
  {
    title: "Culture",
    subtitle: "Thousands of miles from home.",
    desc: "Diwali, Holi, Independence Day — we keep the traditions alive and share the richness of India with the world.",
    color: "hsl(43 85% 52%)",
    glow: "hsl(43 85% 52% / 0.4)",
  },
  {
    title: "Events",
    subtitle: "Always something to look forward to.",
    desc: "From cultural nights to career panels, our calendar is full of things that bring people together and open doors.",
    color: "hsl(160 55% 38%)",
    glow: "hsl(160 55% 38% / 0.4)",
  },
  {
    title: "Growth",
    subtitle: "Thrive in Maastricht.",
    desc: "Workshops, networking, and mentorship to help you succeed academically, professionally, and personally.",
    color: "hsl(28 100% 55%)",
    glow: "hsl(28 100% 55% / 0.4)",
  },
];

const SPOKES = 24;
const CX = 260;
const CY = 260;
const R_INNER = 32;
const R_SPOKE = 195;
const R_RING1 = 200;
const R_RING2 = 230;

function AshokaChakraSVG({ rotation, activeIndex, progress }: {
  rotation: number;
  activeIndex: number;
  progress: number;
}) {
  const stage = STAGES[activeIndex];
  const stageProgress = (progress * 4) % 1;

  // Interpolate color between current and next stage
  const activeColor = stage.color;

  const spokes = Array.from({ length: SPOKES }, (_, i) => {
    const angle = (i * 360) / SPOKES;
    const rad = (angle * Math.PI) / 180;
    const x1 = CX + R_INNER * Math.sin(rad);
    const y1 = CY - R_INNER * Math.cos(rad);
    const x2 = CX + R_SPOKE * Math.sin(rad);
    const y2 = CY - R_SPOKE * Math.cos(rad);

    // Which spokes are "active" — 6 spokes per stage
    const spokesPerStage = SPOKES / 4;
    const stageStart = activeIndex * spokesPerStage;
    const lit = i >= stageStart && i < stageStart + spokesPerStage;
    const glow = lit && stageProgress > 0.2;

    return { x1, y1, x2, y2, lit, glow, angle };
  });

  // Petal shapes between spokes
  const petals = Array.from({ length: SPOKES }, (_, i) => {
    const angle = ((i + 0.5) * 360) / SPOKES;
    const rad = (angle * Math.PI) / 180;
    const r = (R_INNER + R_SPOKE) / 2;
    const cx = CX + r * Math.sin(rad);
    const cy = CY - r * Math.cos(rad);
    const spokesPerStage = SPOKES / 4;
    const stageStart = activeIndex * spokesPerStage;
    const lit = i >= stageStart && i < stageStart + spokesPerStage;
    return { cx, cy, lit };
  });

  const glowOpacity = Math.min(1, progress * 1.5) * 0.6;

  return (
    <svg viewBox="0 0 520 520" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={activeColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor={activeColor} stopOpacity="0.2" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="spk-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer glow ring */}
      <circle cx={CX} cy={CY} r={R_RING2 + 10}
        stroke={activeColor} strokeWidth="1" strokeOpacity={glowOpacity * 0.5} />

      {/* Rotating group */}
      <g transform={`rotate(${rotation}, ${CX}, ${CY})`}>

        {/* Outer decorative ring */}
        <circle cx={CX} cy={CY} r={R_RING2}
          stroke={activeColor} strokeWidth="2.5" strokeOpacity="0.5" />
        <circle cx={CX} cy={CY} r={R_RING1}
          stroke={activeColor} strokeWidth="1" strokeOpacity="0.25" />

        {/* Spokes */}
        {spokes.map((s, i) => (
          <line key={`spoke-${i}`}
            x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
            stroke={s.lit ? activeColor : "hsl(20 25% 20%)"}
            strokeWidth={s.lit ? "2.5" : "1"}
            strokeOpacity={s.lit ? 0.95 : 0.18}
            filter={s.glow ? "url(#spk-glow)" : undefined}
          />
        ))}

        {/* Petal dots between spokes */}
        {petals.map((p, i) => (
          <circle key={`petal-${i}`}
            cx={p.cx} cy={p.cy} r="5"
            fill={p.lit ? activeColor : "hsl(20 25% 20%)"}
            fillOpacity={p.lit ? 0.85 : 0.12}
          />
        ))}

        {/* Outer ring dots at spoke tips */}
        {spokes.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const x = CX + R_RING2 * Math.sin(rad);
          const y = CY - R_RING2 * Math.cos(rad);
          const lit = spokes[i].lit;
          return (
            <circle key={`tip-${i}`} cx={x} cy={y} r="4"
              fill={lit ? activeColor : "hsl(20 25% 20%)"}
              fillOpacity={lit ? 0.9 : 0.15}
            />
          );
        })}

        {/* Hub */}
        <circle cx={CX} cy={CY} r={R_INNER + 8}
          fill={`${activeColor}20`} stroke={activeColor} strokeWidth="2" strokeOpacity="0.7" />
        <circle cx={CX} cy={CY} r={R_INNER - 4}
          fill="url(#hubGrad)" />
        <circle cx={CX} cy={CY} r="10"
          fill={activeColor} fillOpacity="0.9" />
      </g>

      {/* Non-rotating outer glow pulse */}
      <circle cx={CX} cy={CY} r={R_RING2 + 20}
        stroke={activeColor} strokeWidth="40" strokeOpacity={glowOpacity * 0.06}
        filter="url(#glow)" />
    </svg>
  );
}

export default function ChakraScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      const sectionH = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -top;
      setProgress(Math.max(0, Math.min(1, scrolled / sectionH)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount after layout
    requestAnimationFrame(handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = progress * 900; // 2.5 full rotations
  const activeIndex = Math.min(3, Math.floor(progress * 4));
  const stage = STAGES[activeIndex];

  // Fade content in/out per stage
  const stageProgress = (progress * 4) % 1;
  const contentOpacity = stageProgress < 0.15
    ? stageProgress / 0.15
    : stageProgress > 0.85
    ? (1 - stageProgress) / 0.15
    : 1;

  return (
    <div ref={sectionRef} style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Background glow that shifts colour */}
        <div className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{ background: `radial-gradient(ellipse 60% 60% at 65% 50%, ${stage.glow}, transparent)` }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text content */}
          <div style={{ opacity: contentOpacity, transition: "opacity 0.2s" }}>
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="font-display font-black leading-tight mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: stage.color }}>
              {stage.title}
            </h2>
            <p className="font-display italic text-foreground/70 text-xl mb-5">{stage.subtitle}</p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-lg">{stage.desc}</p>

            {/* Stage dots */}
            <div className="flex gap-3 mt-10">
              {STAGES.map((s, i) => (
                <div key={i} className="transition-all duration-500 rounded-full"
                  style={{
                    width: i === activeIndex ? "32px" : "8px",
                    height: "8px",
                    background: i === activeIndex ? s.color : "hsl(35 30% 90% / 0.2)",
                  }} />
              ))}
            </div>

            {/* Scroll hint */}
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-6 opacity-60">
              {activeIndex < 3 ? "Scroll to continue" : ""}
            </p>
          </div>

          {/* Right — Ashoka Chakra */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px]">
              <AshokaChakraSVG rotation={rotation} activeIndex={activeIndex} progress={progress} />
            </div>
          </div>
        </div>

        {/* Progress bar — Indian flag colours */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
          <div className="h-full transition-all duration-100"
            style={{ width: `${progress * 100}%`, background: stage.color }} />
        </div>
      </div>
    </div>
  );
}
