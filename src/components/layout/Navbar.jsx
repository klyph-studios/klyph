import { useState, useEffect } from "react";

export function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobOpen(false);
  };

  const links = [
    ["home", "Home"],
    ["work", "Work"],
    ["services", "Services"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="logo" onClick={() => go("home")}>
            KLYPH<span className="logo-dot" />
          </div>
          <ul className="nav-links">
            {links.map(([id, label]) => (
              <li key={id}>
                <a onClick={() => go(id)}>{label}</a>
              </li>
            ))}
          </ul>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="theme-toggle-btn" onClick={onToggleTheme} title="Press ESC anywhere to toggle background color">
              <span>ESC</span>
              <span>{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</span>
            </button>
            <button className="btn btn-primary nav-cta" onClick={() => go("cta")}>
              Book Consultation
            </button>
          </div>
          <button className="ham" onClick={() => setMobOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mob${mobOpen ? " open" : ""}`}>
        <button className="mob-x" onClick={() => setMobOpen(false)}>
          ✕
        </button>
        {links.map(([id, label]) => (
          <a key={id} onClick={() => go(id)}>
            {label}
          </a>
        ))}
        <button className="btn btn-primary" onClick={() => go("cta")}>
          Book a Call
        </button>
      </div>
    </>
  );
}
