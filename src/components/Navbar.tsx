import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Team", path: "/team" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background"
      style={{ borderColor: "hsl(30 6% 88%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/isa-logo.png" alt="ISA logo" className="h-7 w-7 object-contain rounded-full" />
          <div className="hidden sm:block">
            <span className="font-display font-bold text-foreground text-sm leading-none block">ISA</span>
            <span className="font-body text-muted-foreground text-[10px] tracking-widest uppercase leading-none">Maastricht</span>
          </div>
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/join"
            className="font-body font-semibold text-[11px] tracking-widest uppercase px-5 py-2 rounded-md border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            Join ISA
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-muted-foreground hover:text-foreground p-2 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background" style={{ borderColor: "hsl(30 6% 88%)" }}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-xs tracking-widest uppercase transition-colors ${
                  location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/join"
              className="font-body text-xs tracking-widest uppercase text-foreground border border-border px-5 py-2.5 rounded-md w-fit hover:border-primary hover:text-primary transition-all duration-200"
            >
              Join ISA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
