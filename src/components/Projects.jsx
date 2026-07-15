import { useEffect, useState } from "react";

const WEPARTY_SLIDES = [
  { src: "/img/stragerthingsweparty.png", alt: "Feed WeParty" },
  { src: "/img/wepartylogin.png", alt: "Login WeParty" },
  { src: "/img/pageperfilweparty.png", alt: "Perfil WeParty" },
];

const WEPARTY_FEATURES = [
  { icon: "fas fa-feed", label: "Feed Dinâmico com Recomendações" },
  { icon: "fas fa-users", label: "Sistema de Interação Social" },
  { icon: "fas fa-search", label: "Busca e Filtros Avançados" },
  { icon: "fas fa-user-circle", label: "Perfil Personalizável" },
  { icon: "fas fa-globe", label: "Internacionalização (i18n)" },
  { icon: "fas fa-mobile-alt", label: "Design Responsivo" },
];

const GRID_PROJECTS = [
  {
    video: "/img/stragerthingsvideo.mp4",
    live: "https://dev-art-stranger-things-eight.vercel.app/",
    code: "https://github.com/JonathanNwokolo/DevArt-StrangerThings-",
    type: "Landing Page",
    title: "Stranger Things Experience",
    description:
      "Landing page temática sobre a experiência imersiva de Stranger Things com seleção de cidades e galeria.",
    stack: ["HTML", "CSS", "Design"],
  },
  {
    video: "/img/supermariovideo.mp4",
    live: "https://super-mario-ashy.vercel.app/",
    code: "https://github.com/JonathanNwokolo/SuperMario",
    type: "Game",
    title: "Super Mario",
    description:
      "Jogo interativo inspirado no clássico Super Mario, com animações, controles e mecânicas de plataforma.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    video: "/img/rickandmortyvideo.mp4",
    live: "https://rick-and-marty-memory.vercel.app/",
    code: "https://github.com/JonathanNwokolo/RickAndMarty-Memory",
    type: "Game",
    title: "Rick and Morty Memory",
    description:
      "Jogo da memória temático de Rick and Morty com cartas dos personagens da série e mecânicas interativas.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    video: "/img/juliosappvideo.mp4",
    live: "https://julios-app.vercel.app/",
    code: "https://github.com/JonathanNwokolo/JuliosAPP",
    type: "Finance",
    title: "Julius - Controle Financeiro",
    description:
      "Aplicação completa de controle financeiro para gerenciar entradas, saídas e acompanhar a evolução do saldo.",
    stack: ["JavaScript", "Charts", "LocalStorage", "Vue.js"],
  },
  {
    video: "/img/videopokemon.mp4",
    live: "https://pokedex-zeta-nine-57.vercel.app/",
    code: "https://github.com/JonathanNwokolo/Pokedex",
    type: "Web App",
    title: "Pokédex",
    description:
      "Aplicação web interativa que consome a PokéAPI para exibir informações detalhadas sobre os Pokémon, com busca e navegação.",
    stack: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    video: "/img/Spidermenmuntiverso.mp4",
    live: "https://spider-man-multiverse-sable.vercel.app/",
    code: "https://github.com/JonathanNwokolo/SpiderMan-Multiverse",
    type: "Landing Page",
    title: "Spider-Man Multiverse",
    description:
      "Landing page interativa explorando o multiverso do Homem-Aranha com design moderno e animações imersivas.",
    stack: ["HTML", "CSS", "JavaScript", "Animações"],
  },
];

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <video src={p.video} autoPlay muted loop playsInline preload="none" />
        <div className="project-overlay">
          <div className="project-actions">
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
              aria-label="Ver projeto"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
              aria-label="Ver código"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-type">{p.type}</span>
        </div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-description">{p.description}</p>
        <div className="project-stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [slide, setSlide] = useState(0);

  // Auto-play do carousel WeParty (5s), como no setInterval original
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % WEPARTY_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="projects-header">
          <span className="section-label">Projetos</span>
          <h2 className="section-title">
            Alguns dos projetos que desenvolvi
            <br />
            <span className="highlight">durante meu aprendizado</span>
          </h2>
        </div>

        {/* PROJETO DESTAQUE — WeTech Hub */}
        <article className="project-card project-card--featured">
          <div className="featured-badge">
            <i className="fas fa-star"></i>
            <span>Primeiro Projeto Profissional</span>
          </div>
          <div className="featured-image-link">
            <div className="project-image featured-project-image">
              <video
                className="featured-video"
                src="/img/videowetch.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="featured-overlay">
                <a
                  href="https://www.wetechhub.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="featured-cta"
                >
                  <i className="fas fa-external-link-alt"></i> Visitar Site
                </a>
              </div>
            </div>
          </div>
          <div className="project-content featured-project-content">
            <div className="project-meta">
              <span className="project-year">2025</span>
              <span className="project-type">Site Profissional</span>
            </div>
            <h3 className="project-title featured-title">WeTech Hub</h3>
            <p className="project-description">
              Site institucional desenvolvido para a empresa{" "}
              <strong>WeTech Hub</strong> — meu primeiro projeto criado para um
              cliente real. A plataforma apresenta os serviços, tecnologias e a
              identidade da empresa com foco em performance e experiência do
              usuário.
            </p>
            <div className="project-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>vue.js</span>
              <span>Responsivo</span>
              <span>UI/UX</span>
            </div>
            <a
              href="https://www.wetechhub.com.br/"
              target="_blank"
              rel="noreferrer"
              className="featured-link-btn"
            >
              <span>Ver projeto ao vivo</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>

        {/* PROJETO WEPARTY — EM PRODUÇÃO */}
        <article className="project-card project-card--featured">
          <div className="featured-badge">
            <i className="fas fa-rocket"></i>
            <span>Em Produção</span>
          </div>
          <div className="featured-image-link">
            <div className="project-image featured-project-image">
              <div className="weparty-carousel-wrapper">
                <div className="carousel-slides" id="weparty-carousel">
                  {WEPARTY_SLIDES.map((s, i) => (
                    <div
                      className={`carousel-slide${i === slide ? " active" : ""}`}
                      key={s.src}
                    >
                      <img src={s.src} alt={s.alt} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-dots" id="carousel-dots">
                {WEPARTY_SLIDES.map((s, i) => (
                  <span
                    key={s.src}
                    className={`dot${i === slide ? " active" : ""}`}
                    onClick={() => setSlide(i)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <div className="project-content featured-project-content">
            <div className="project-meta">
              <span className="project-year">2026</span>
              <span className="project-type">Rede Social</span>
            </div>
            <h3 className="project-title featured-title">WeParty</h3>
            <p className="project-description">
              Rede social moderna focada na descoberta e compartilhamento de
              eventos. A plataforma conecta pessoas a experiências únicas,
              permitindo que usuários descubram eventos próximos, sigam
              organizadores e interajam com uma comunidade apaixonada por
              entretenimento.
            </p>
            <div className="project-features">
              {WEPARTY_FEATURES.map((f) => (
                <div className="feature-item" key={f.label}>
                  <i className={f.icon}></i>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <div className="project-stack">
              {[
                "Vue.js",
                "Node.js",
                "Axios",
                "i18n",
                "Responsivo",
                "Vuetify",
                "Vite",
                "TypeScript",
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="project-status">
              <i className="fas fa-code-branch"></i>
              <span>Projeto em desenvolvimento ativo</span>
            </div>
          </div>
        </article>

        <div className="projects-grid">
          {GRID_PROJECTS.map((p) => (
            <ProjectCard p={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
