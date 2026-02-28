interface MandalaProps {
  size?: number;
  className?: string;
  opacity?: number;
}

export default function Mandala({ size = 420, className = "", opacity = 0.18 }: MandalaProps) {
  const cx = size / 2;
  const cy = size / 2;

  const petalCount = 12;
  const outerPetals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount;
    return angle;
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ opacity }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <g className="mandala-outer" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {outerPetals.map((angle, i) => (
          <ellipse
            key={`outer-${i}`}
            cx={cx}
            cy={cy - size * 0.38}
            rx={size * 0.045}
            ry={size * 0.12}
            fill={i % 3 === 0 ? "hsl(28 100% 55%)" : i % 3 === 1 ? "hsl(43 85% 52%)" : "hsl(135 55% 30%)"}
            transform={`rotate(${angle} ${cx} ${cy})`}
            fillOpacity={0.7}
          />
        ))}
        <circle cx={cx} cy={cy} r={size * 0.38} stroke="hsl(28 100% 55%)" strokeWidth="0.5" strokeOpacity={0.4} />
        <circle cx={cx} cy={cy} r={size * 0.43} stroke="hsl(43 85% 52%)" strokeWidth="0.3" strokeOpacity={0.25} />
      </g>

      {/* Mid ring */}
      <g className="mandala-mid" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {outerPetals.map((angle, i) => (
          <ellipse
            key={`mid-${i}`}
            cx={cx}
            cy={cy - size * 0.25}
            rx={size * 0.035}
            ry={size * 0.08}
            fill={i % 2 === 0 ? "hsl(43 85% 52%)" : "hsl(28 100% 55%)"}
            transform={`rotate(${angle} ${cx} ${cy})`}
            fillOpacity={0.65}
          />
        ))}
        <circle cx={cx} cy={cy} r={size * 0.25} stroke="hsl(43 85% 52%)" strokeWidth="0.5" strokeOpacity={0.3} />
        {/* Diamond dots on mid ring */}
        {outerPetals.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const r = size * 0.25;
          const x = cx + r * Math.sin(rad);
          const y = cy - r * Math.cos(rad);
          return <circle key={`dot-mid-${i}`} cx={x} cy={y} r={size * 0.008} fill="hsl(43 85% 62%)" fillOpacity={0.8} />;
        })}
      </g>

      {/* Inner ring */}
      <g className="mandala-inner" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {Array.from({ length: 8 }, (_, i) => (i * 360) / 8).map((angle, i) => (
          <ellipse
            key={`inner-${i}`}
            cx={cx}
            cy={cy - size * 0.14}
            rx={size * 0.025}
            ry={size * 0.055}
            fill={i % 2 === 0 ? "hsl(28 100% 60%)" : "hsl(135 55% 35%)"}
            transform={`rotate(${angle} ${cx} ${cy})`}
            fillOpacity={0.75}
          />
        ))}
        <circle cx={cx} cy={cy} r={size * 0.14} stroke="hsl(28 100% 55%)" strokeWidth="0.6" strokeOpacity={0.35} />
      </g>

      {/* Ashoka Chakra — centre */}
      <circle cx={cx} cy={cy} r={size * 0.07} fill="hsl(28 100% 55%)" fillOpacity={0.12} stroke="hsl(43 85% 52%)" strokeWidth="1" strokeOpacity={0.5} />
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const r1 = size * 0.03;
        const r2 = size * 0.07;
        const x1 = cx + r1 * Math.sin(rad);
        const y1 = cy - r1 * Math.cos(rad);
        const x2 = cx + r2 * Math.sin(rad);
        const y2 = cy - r2 * Math.cos(rad);
        return (
          <line key={`spoke-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="hsl(43 85% 52%)" strokeWidth="0.6" strokeOpacity={0.6} />
        );
      })}
      <circle cx={cx} cy={cy} r={size * 0.025} fill="hsl(43 85% 52%)" fillOpacity={0.6} />
    </svg>
  );
}
