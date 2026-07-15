import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar({ onLogoClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloqueia o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Fecha o menu com a tecla Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-container">
          <a
            href="#hero"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              onLogoClick();
            }}
          >
            <span className="logo-text">DevNwokolo</span>
            <span className="logo-dot"></span>
          </a>

          <div className="nav-links" id="nav-links">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                data-text={l.label}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            className={`nav-toggle${menuOpen ? " active" : ""}`}
            id="nav-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " active" : ""}`} id="mobile-menu">
        <div className="mobile-menu-content">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
