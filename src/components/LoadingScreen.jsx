import { useEffect, useState } from "react";

// Tela de carregamento — some 1.5s após o mount (equivalente ao window load original)
export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 1500);
    const t2 = setTimeout(() => setGone(true), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loading-screen${hidden ? " hidden" : ""}`}>
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loader-text">Jonathan Nwokolo</div>
      </div>
    </div>
  );
}
