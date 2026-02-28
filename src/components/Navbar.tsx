import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Team", path: "/team" },
  { label: "Join", path: "/join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/isa-logo.png" alt="ISA logo" className="h-10 w-10 object-contain rounded-full" />
          <div>
            <span className="font-display font-bold text-foreground text-sm leading-none block">ISA</span>
            <span className="font-body text-muted-foreground text-xs tracking-widest uppercase leading-none">Maastricht</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}
              className={`font-body text-xs tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/join"
            className="font-body text-xs tracking-widest uppercase px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 rounded-lg"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}
                className={`font-body text-sm tracking-widest uppercase transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/join" className="font-body text-sm tracking-widest uppercase text-primary">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
