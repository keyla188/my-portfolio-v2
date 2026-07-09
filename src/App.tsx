import AmbientBackground from "./layout/ambient-background/ambient-background";
import TopBar from "./layout/top-bar/top-bar";
import BottomNav from "./layout/bottom-nav/bottom-nav";
import Footer from "./layout/footer/footer";
import RevealSection from "./components/reveal-section/reveal-section";
import Hero from "./sections/hero/hero";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
import Projects from "./sections/projects/projects";
import Tech from "./sections/tech/tech";
import Contact from "./sections/contact/contact";
import navItems from "./data/nav";
import { useScrollReveal } from "./hooks/useScrollReveal";

const REVEAL_SECTION_IDS = navItems.map((item) => item.id).filter((id) => id !== "home");

function App() {
  const { registerRef, isRevealed } = useScrollReveal(REVEAL_SECTION_IDS);

  return (
    <div>
      <AmbientBackground />
      <TopBar />
      <BottomNav />

      <Hero />

      <RevealSection id="about-me" sectionRef={registerRef("about-me")} revealed={isRevealed("about-me")}>
        <About />
      </RevealSection>

      <RevealSection id="experience" sectionRef={registerRef("experience")} revealed={isRevealed("experience")}>
        <Experience />
      </RevealSection>

      <RevealSection id="projects" sectionRef={registerRef("projects")} revealed={isRevealed("projects")}>
        <Projects />
      </RevealSection>

      <RevealSection id="tech" sectionRef={registerRef("tech")} revealed={isRevealed("tech")}>
        <Tech />
      </RevealSection>

      <RevealSection id="contact" sectionRef={registerRef("contact")} revealed={isRevealed("contact")}>
        <Contact />
      </RevealSection>

      <Footer />
    </div>
  );
}

export default App;
