import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/isa-logo.png" alt="ISA logo" className="h-10 w-10 object-contain rounded-full" />
              <div>
                <p className="font-display font-bold text-foreground text-sm">ISA</p>
                <p className="font-body text-muted-foreground text-xs tracking-widest uppercase">Maastricht</p>
              </div>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Indian Student Association Maastricht (ISA) — your home away from home at Maastricht University.
            </p>
            {/* Indian flag stripe accent */}
            <div className="flex gap-1 h-1 w-16 overflow-hidden rounded-full">
              <div className="flex-1 bg-[hsl(28_100%_55%)]" />
              <div className="flex-1 bg-white/20" />
              <div className="flex-1 bg-[hsl(135_55%_30%)]" />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="section-label">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Events", path: "/events" },
                { label: "Team", path: "/team" },
                { label: "Join", path: "/join" },
              ].map((item) => (
                <Link key={item.path} to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <p className="section-label">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/isa.maastricht/" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://chat.whatsapp.com/LMCVspLe7EtEWjXa2ubmyf" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                WhatsApp Community
              </a>
              <a href="https://www.tiktok.com/@isa.maastricht" target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Indian Student Association Maastricht (ISA). All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Celebrating culture, building community.
          </p>
        </div>
      </div>
    </footer>
  );
}
