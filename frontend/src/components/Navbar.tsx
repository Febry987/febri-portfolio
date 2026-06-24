import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

type NavItem = { id: string; label: string };

const items: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "workexperience", label: "Work Experience" },
  { id: "awards", label: "Awards" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      const offsets = items.map((it) => {
        const el = document.getElementById(it.id);
        if (!el) return { id: it.id, top: Number.POSITIVE_INFINITY };
        const rect = el.getBoundingClientRect();
        return { id: it.id, top: Math.abs(rect.top - 140) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="site-header" data-testid="primary-nav">
      <div className="site-header-glass">
        <button className="site-brand" onClick={() => handleClick("home")}>
          <div className="site-brand-mark">F</div>
          <div className="site-brand-copy">
            <strong>Febry</strong>
            <small>PORTFOLIO</small>
          </div>
        </button>

        <nav className="site-nav">
          {items.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`site-nav-link ${active === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="site-header-meta">
          <div className="flex items-center gap-2">
            <span className="site-header-meta-dot" />
            <div className="flex flex-col">
              <span>AVAILABLE</span>
              <span>For New Projects</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
