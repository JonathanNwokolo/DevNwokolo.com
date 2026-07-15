import { useEffect, useRef } from "react";

const SKILLS = [
  { icon: "fab fa-html5", name: "HTML5", desc: "Estruturação semântica" },
  { icon: "fab fa-css3-alt", name: "CSS3", desc: "Flexbox & Grid Layout" },
  { icon: "fab fa-js", name: "JavaScript", desc: "ES6+ & DOM" },
  { icon: "fab fa-react", name: "React", desc: "Hooks & Components" },
  { icon: "fab fa-node-js", name: "Node.js", desc: "APIs RESTful" },
  { icon: "fas fa-database", name: "MongoDB", desc: "NoSQL Database" },
  { icon: "fab fa-git-alt", name: "Git", desc: "Controle de versão" },
  { icon: "fab fa-figma", name: "Figma", desc: "UI/UX Design" },
];

export default function Skills() {
  const gridRef = useRef(null);

  // Efeito tilt (somente desktop) — porta fiel do script.js
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll("[data-tilt]");
    const cleanups = [];

    cards.forEach((card) => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };
      const onLeave = () => {
        card.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="skills-header">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">
            Ferramentas que estou
            <br />
            <span className="highlight">aprendendo e dominando</span>
          </h2>
        </div>

        <div className="skills-grid" ref={gridRef}>
          {SKILLS.map((s) => (
            <div className="skill-card" data-tilt key={s.name}>
              <div className="skill-icon">
                <i className={s.icon}></i>
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="skill-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
