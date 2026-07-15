const CARDS = [
  {
    icon: "fas fa-graduation-cap",
    title: "Educação",
    text: "Análise e Desenvolvimento de Sistemas",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Foco Atual",
    text: "HTML, CSS & JavaScript",
  },
  {
    icon: "fas fa-rocket",
    title: "Objetivo",
    text: "Desenvolvedor Full Stack",
  },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-header">
            <span className="section-label">Sobre mim</span>
            <h2 className="section-title">
              Desenvolvedor Full Stack
              <span className="highlight">em Formação</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p className="lead">
                Sou Jonathan Nwokolo, estudante de{" "}
                <strong>Análise e Desenvolvimento de Sistemas</strong> e
                iniciante na área de TI. Minha jornada começou com a descoberta
                do fascinante mundo da programação, e desde então tenho me
                dedicado intensamente ao aprendizado.
              </p>
              <p>
                Atualmente estou focado em dominar as tecnologias fundamentais
                do desenvolvimento web: <strong>HTML</strong>,{" "}
                <strong>CSS</strong> e <strong>JavaScript</strong>. Meu objetivo
                é me tornar um <strong>Desenvolvedor Full Stack</strong>{" "}
                completo, capaz de criar soluções inovadoras do front-end ao
                back-end.
              </p>
              <p>
                Acredito no aprendizado contínuo e na prática constante. Cada
                projeto é uma oportunidade de crescimento e cada desafio é uma
                chance de evoluir como profissional.
              </p>
            </div>

            <div className="about-cards">
              {CARDS.map((c) => (
                <div className="info-card glass-card" key={c.title}>
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <div className="card-icon-wrap">
                      <i className={c.icon}></i>
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
