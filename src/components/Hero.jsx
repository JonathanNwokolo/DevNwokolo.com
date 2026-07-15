import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "Transformando café em código e padding em dor de cabeça",
  "99 problemas, e 98 são um ; faltando",
  " Eterno Aprendiz ",
  "Desenvolvedor Full Stack",
];

// Efeito de digitação — porta fiel do typeEffect() original
function useTyping() {
  const [text, setText] = useState("");
  const state = useRef({ phrase: 0, char: 0, deleting: false });

  useEffect(() => {
    let timeoutId;
    let startId;

    function tick() {
      const s = state.current;
      const current = PHRASES[s.phrase];
      let speed;

      if (s.deleting) {
        setText(current.substring(0, s.char - 1));
        s.char--;
        speed = 50;
      } else {
        setText(current.substring(0, s.char + 1));
        s.char++;
        speed = 100;
      }

      if (!s.deleting && s.char === current.length) {
        s.deleting = true;
        speed = 2000;
      } else if (s.deleting && s.char === 0) {
        s.deleting = false;
        s.phrase = (s.phrase + 1) % PHRASES.length;
        speed = 500;
      }

      timeoutId = setTimeout(tick, speed);
    }

    // Delay inicial de 2s como no original
    startId = setTimeout(tick, 2000);
    return () => {
      clearTimeout(startId);
      clearTimeout(timeoutId);
    };
  }, []);

  return text;
}

export default function Hero() {
  const typingText = useTyping();

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Disponível para oportunidades</span>
          </div>

          <h1 className="hero-title">
            Olá, eu sou <span className="gradient-text">Jonathan Nwokolo</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{typingText}</span>
          </h2>
          <p className="hero-description">
            Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por
            tecnologia e em constante evolução na área de programação.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <i className="fas fa-code"></i>
              <span>Ver Projetos</span>
            </a>
            <a
              href="https://web-curriculo-amber.vercel.app/"
              className="btn-secondary"
            >
              <i className="fas fa-envelope"></i>
              <span>Meu Currículo</span>
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/JonathanNwokolo"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/jonathannwokolo"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/joh_nwokolo?igsh=bjE5cXNtc2RveWZ2"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="/img/minhafoto.jpeg"
              alt="Jonathan Nwokolo"
              width="420"
              height="520"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
}
