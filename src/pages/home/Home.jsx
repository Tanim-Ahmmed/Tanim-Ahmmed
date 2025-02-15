import Banner from "../componants/Banner";
import Project from "../componants/Project";
import Skills from "../componants/Skills";
import About from "../componants/About";
import Contact from "../componants/Contact"
const Home = () => {
  return (
    <div id="home" className=" mx-auto">
      <section className="pt-20 ">
        
      </section>
      <section>
        <Banner></Banner>
      </section>
      <section id="projects">
        <Project></Project>
      </section>
      <section id="skills" className="">
        <Skills></Skills>
      </section>
      <section id="about" className="">
        <About></About>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
