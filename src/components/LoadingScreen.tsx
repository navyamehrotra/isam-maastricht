import { useEffect, useState } from "react";

const SPOKES = 24;
const CX = 100;
const CY = 100;
const R_INNER = 12;
const R_SPOKE = 72;
const R_RING = 84;

function ChakraSVG({ rotation }: { rotation: number }) {
  const color = "hsl(28 100% 55%)";
  const spokes = Array.from({ length: SPOKES }, (_, i) => {
    const angle = (i * 360) / SPOKES;
    const rad = (angle * Math.PI) / 180;
    return {
      x1: CX + R_INNER * Math.sin(rad),
      y1: CY - R_INNER * Math.cos(rad),
      x2: CX + R_SPOKE * Math.sin(rad),
      y2: CY - R_SPOKE * Math.cos(rad),
      tipX: CX + R_RING * Math.sin(rad),
      tipY: CY - R_RING * Math.cos(rad),
    };
  });

  return (
    <svg viewBox="0 0 200 200" width="140" height="140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform={`rotate(${rotation}, ${CX}, ${CY})`}>
        <circle cx={CX} cy={CY} r={R_RING} stroke={color} strokeWidth="2" strokeOpacity="0.5" />
        <circle cx={CX} cy={CY} r={R_SPOKE - 4} stroke={color} strokeWidth="0.8" strokeOpacity="0.2" />
        {spokes.map((s, i) => (
          <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
            stroke={color} strokeWidth="1.5" strokeOpacity="0.85" />
        ))}
        {spokes.map((s, i) => (
          <circle key={i} cx={s.tipX} cy={s.tipY} r="3" fill={color} fillOpacity="0.9" />
        ))}
        <circle cx={CX} cy={CY} r={R_INNER + 4} fill={`${color}20`} stroke={color} strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx={CX} cy={CY} r={R_INNER - 2} fill={color} fillOpacity="0.8" />
        <circle cx={CX} cy={CY} r="5" fill={color} />
      </g>
    </svg>
  );
}

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [rotation, setRotation] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const DURATION = 3000;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / DURATION, 1);
      setRotation(progress * 1080); // 3 full rotations

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setFading(true);
        setTimeout(onDone, 500);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.5s ease" }}
    >
      <ChakraSVG rotation={rotation} />
      <p className="font-display font-bold mt-6 text-lg tracking-wide" style={{ color: "hsl(28 100% 55%)" }}>
        ISA Maastricht
      </p>
      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
        Indian Student Association
      </p>
    </div>
  );
}
