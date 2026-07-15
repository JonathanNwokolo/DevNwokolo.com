import { useEffect } from "react";

// Porta fiel dos efeitos globais do script.js original:
// - handler de scroll unificado (navbar scrolled, active link, parallax aurora)
// - smooth-scroll delegado para âncoras internas
// - IntersectionObserver que dá play/pause nos vídeos conforme a visibilidade
export default function useSiteEffects() {
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // ---------- Scroll unificado (RAF-throttled) ----------
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop;
        const nav = document.getElementById("nav");
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");
        const auroraOrbs = document.querySelectorAll(".aurora-orb");

        // 1. Navbar
        if (nav) nav.classList.toggle("scrolled", scrollTop > 100);

        // 2. Active nav link
        let current = "";
        sections.forEach((section) => {
          if (scrollTop >= section.offsetTop - 200) {
            current = section.getAttribute("id");
          }
        });
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`,
          );
        });

        // 3. Parallax da aurora (pula no mobile)
        if (!isTouch) {
          auroraOrbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.1;
            orb.style.transform = `translateY(${scrollTop * speed}px)`;
          });
        }

        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---------- Smooth scroll delegado ----------
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      // Respeita quem já cancelou o evento (ex.: logo/easter-egg)
      if (e.defaultPrevented) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);

    // ---------- Vídeos: play/pause por visibilidade ----------
    const videos = document.querySelectorAll("video");
    let videoObserver;
    if (videos.length > 0) {
      videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.25, rootMargin: "50px" },
      );
      videos.forEach((v) => videoObserver.observe(v));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      if (videoObserver) videoObserver.disconnect();
    };
  }, []);
}
