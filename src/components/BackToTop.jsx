import { useEffect, useState } from "react";

const R = 16;
const CIRCUMFERENCE = 2 * Math.PI * R;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        setVisible(scrollTop > 400);
        setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offset = CIRCUMFERENCE - progress * CIRCUMFERENCE;

  return (
    <>
      {/* Gradiente usado pelo traço do círculo (referenciado no CSS via url(#btt-gradient)) */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <linearGradient id="btt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <button
        className={`back-to-top${visible ? " visible" : ""}`}
        id="back-to-top"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
        <span className="btt-progress">
          <svg viewBox="0 0 36 36">
            <circle className="btt-track" cx="18" cy="18" r={R}></circle>
            <circle
              className="btt-fill"
              cx="18"
              cy="18"
              r={R}
              id="btt-circle"
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: offset,
              }}
            ></circle>
          </svg>
        </span>
      </button>
    </>
  );
}
