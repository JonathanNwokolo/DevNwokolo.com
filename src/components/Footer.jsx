export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-text">DevNwokolo</span>
              <span className="logo-dot"></span>
            </a>
            <p className="footer-tagline">Transformando ideias em código</p>
          </div>

          <nav className="footer-nav">
            <a href="#hero">Início</a>
            <a href="#about">Sobre</a>
            <a href="#skills">Stack</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Jonathan Nwokolo. Todos os direitos reservados.</p>
          <p className="footer-made">
            Desenvolvido com <span className="heart">♥</span> e muito ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
