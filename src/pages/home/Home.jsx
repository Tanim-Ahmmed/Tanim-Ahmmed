import SectionReveal from "../../components/SectionReveal";
import About from "../componants/About";
import Banner from "../componants/Banner";
import Contact from "../componants/Contact";
import Project from "../componants/Project";
import Skills from "../componants/Skills";

const Home = () => {
  return (
    <div id="home" className="mx-auto">
      <section>
        <Banner />
      </section>

      <SectionReveal className="relative" amount={0.15}>
        <section id="projects">
          <Project />
        </section>
      </SectionReveal>

      <SectionReveal className="relative" delay={0.05}>
        <section id="skills">
          <Skills />
        </section>
      </SectionReveal>

      <SectionReveal className="relative" delay={0.05}>
        <section id="about">
          <About />
        </section>
      </SectionReveal>

      <SectionReveal className="relative" delay={0.05}>
        <section id="contact">
          <Contact />
        </section>
      </SectionReveal>
    </div>
  );
};

export default Home;
