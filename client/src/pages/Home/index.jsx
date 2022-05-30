import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

function Home() {
  return (
    <main>
      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </main>
  );
}

export default Home;
