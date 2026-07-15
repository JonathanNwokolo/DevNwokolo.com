import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "devnwokolo_starred";
const HINT_SHOWN_KEY = "devnwokolo_hint_shown";
const API_URL = "https://starsapi.onrender.com/api/stars";

export default function StarWidget() {
  const [count, setCount] = useState("...");
  const [isStarred, setIsStarred] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "true",
  );
  const [hintShown, setHintShown] = useState(
    () => localStorage.getItem(HINT_SHOWN_KEY) === "true",
  );
  const [shake, setShake] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [tooltipForced, setTooltipForced] = useState(false);
  const [bump, setBump] = useState(false);
  const [particles, setParticles] = useState([]);
  const [toast, setToast] = useState({ msg: "", show: false });

  const toastTimer = useRef(null);
  const busy = useRef(false);

  // Busca a contagem oficial no banco ao abrir
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (active) setCount(data.count);
      } catch (err) {
        console.error("Erro ao buscar da API:", err);
        if (active) setCount("Erro");
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  // Destaque de atenção após 4s (se ainda não curtiu e não viu o hint)
  useEffect(() => {
    if (isStarred || hintShown) return;
    const t = setTimeout(() => {
      setShake(true);
      setHintVisible(true);
      setTooltipForced(true);
    }, 4000);
    return () => clearTimeout(t);
  }, [isStarred, hintShown]);

  function hideAttentionHint() {
    setShake(false);
    setHintVisible(false);
    setTooltipForced(false);
    localStorage.setItem(HINT_SHOWN_KEY, "true");
    setHintShown(true);
  }

  function showToast(msg) {
    setToast({ msg, show: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, show: false })),
      2800,
    );
  }

  function burst() {
    const total = 12;
    const next = Array.from({ length: total }, (_, i) => {
      const angle = (i / total) * 360 + (Math.random() * 15 - 7.5);
      const dist = 30 + Math.random() * 28;
      const rad = (angle * Math.PI) / 180;
      return {
        id: `${Date.now()}-${i}`,
        tx: `${Math.cos(rad) * dist}px`,
        ty: `${Math.sin(rad) * dist}px`,
        dur: `${0.5 + Math.random() * 0.3}s`,
        delay: `${i * 0.018}s`,
      };
    });
    setParticles(next);
    setTimeout(() => setParticles([]), 1000);
  }

  async function handleClick() {
    hideAttentionHint();

    if (isStarred) {
      showToast("Você já deixou sua estrela! ⭐");
      return;
    }
    if (busy.current) return;
    busy.current = true;

    try {
      const res = await fetch(API_URL, { method: "POST" });
      const data = await res.json();
      setCount(data.count);
      setIsStarred(true);
      localStorage.setItem(STORAGE_KEY, "true");
      burst();
      showToast("⭐ Obrigado por curtir o meu portfólio!");
      setBump(false);
      requestAnimationFrame(() => setBump(true));
    } catch (err) {
      console.error("Erro ao salvar no banco:", err);
      showToast("Ops! Erro de conexão.");
    } finally {
      busy.current = false;
    }
  }

  return (
    <>
      <div
        className={`star-widget${isStarred ? " is-starred" : ""}`}
        id="star-widget"
      >
        <div className="star-btn-wrapper">
          <button
            className={`star-btn${isStarred ? " starred" : ""}${
              shake ? " attention-shake" : ""
            }`}
            id="star-btn"
            aria-label="Curtir este portfólio"
            onClick={handleClick}
          >
            <span className="star-particles" id="star-particles">
              {particles.map((p) => (
                <span
                  key={p.id}
                  className="particle"
                  style={{
                    "--tx": p.tx,
                    "--ty": p.ty,
                    "--dur": p.dur,
                    animationDelay: p.delay,
                  }}
                ></span>
              ))}
            </span>
            <svg
              className="star-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <polygon
                className="star-path"
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              />
            </svg>
          </button>
          <div className={`star-tooltip${tooltipForced ? " show" : ""}`}>
            Curtir este portfólio ✦
          </div>
          <div
            className={`star-attention-hint${hintVisible ? " show" : ""}`}
            id="star-attention-hint"
          >
            <div className="hint-text">Deixe sua estrela! ⭐</div>
          </div>
        </div>
        <span
          className={`star-count${bump ? " bumping" : ""}`}
          id="star-count"
          onAnimationEnd={() => setBump(false)}
        >
          {count}
        </span>
        <span className="star-label">estrelas</span>
      </div>
      <div className={`star-toast${toast.show ? " show" : ""}`} id="star-toast">
        {toast.msg}
      </div>
    </>
  );
}
