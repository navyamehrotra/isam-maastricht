import { Link } from "react-router-dom";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.977-1.303A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.117l-.292-.174-3.027.794.807-2.948-.19-.302A7.946 7.946 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  );
}

function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/isa.maastricht/", label: "Instagram", Icon: IconInstagram },
  { href: "https://chat.whatsapp.com/LMCVspLe7EtEWjXa2ubmyf", label: "WhatsApp", Icon: IconWhatsApp },
  { href: "https://www.tiktok.com/@isa.maastricht", label: "TikTok", Icon: IconTikTok },
];

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
              {socials.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Indian Student Association Maastricht (ISA). All rights reserved.
          </p>

          {/* Social icon row */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
