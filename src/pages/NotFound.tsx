import { Link } from "react-router-dom";
import Mandala from "@/components/Mandala";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      <div className="absolute opacity-10 pointer-events-none">
        <Mandala size={600} opacity={1} />
      </div>
      <div className="text-center relative z-10">
        <p className="section-label mb-4">404</p>
        <h1 className="font-display font-black text-foreground text-6xl mb-4">Lost in <span className="gradient-text">Transit.</span></h1>
        <p className="font-body text-muted-foreground mb-8">This page doesn't exist. Let's get you back home.</p>
        <Link to="/" className="inline-flex items-center gap-2 font-body font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          style={{ background: "hsl(28 100% 55%)", color: "hsl(20 18% 5%)" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
