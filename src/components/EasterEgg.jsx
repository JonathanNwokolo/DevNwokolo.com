import { useEffect } from "react";

export default function EasterEgg({ open, onClose }) {
  // Bloqueia o scroll do body e fecha com Escape enquanto está aberto
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`easter-egg-overlay${open ? " active" : ""}`}
      id="easter-egg-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="easter-egg-content">
        <div className="ee-cross">✝</div>
        <h2 className="ee-title">Somente a Deus a Glória</h2>
        <p className="ee-verse">
          "Porque Dele, por Ele e para Ele são todas as coisas.
          <br />A Ele seja a glória para sempre!"
        </p>
        <span className="ee-ref">— Romanos 11:36</span>
        <div className="ee-sparkles">
          {Array.from({ length: 6 }).map((_, i) => (
            <span className="ee-sparkle" key={i}>
              ✦
            </span>
          ))}
        </div>
        <p className="ee-message">Toda Honra e Glória ao Senhor JESUS 🙏</p>
        <button className="ee-close" id="ee-close" onClick={onClose}>
          Amém
        </button>
      </div>
    </div>
  );
}
