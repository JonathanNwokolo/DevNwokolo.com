import { useState } from "react";
import useSiteEffects from "./hooks/useSiteEffects.js";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Backgrounds from "./components/Backgrounds.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import StarWidget from "./components/StarWidget.jsx";
import EasterEgg from "./components/EasterEgg.jsx";

export default function App() {
  const [eggOpen, setEggOpen] = useState(false);
  useSiteEffects();

  return (
    <>
      <LoadingScreen />
      <Backgrounds />
      <Navbar onLogoClick={() => setEggOpen(true)} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <StarWidget />
      <EasterEgg open={eggOpen} onClose={() => setEggOpen(false)} />
    </>
  );
}
