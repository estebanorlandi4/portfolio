import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

import { motionSections } from '../../utils/motionVariants';
import { Section } from '../../components/Styled';

const { variants, viewport } = motionSections;

function Home() {
  return (
    <main>
      <div id="intro">
        <Intro />
      </div>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        id="about"
      >
        <About />
      </Section>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        id="skills"
      >
        <Skills />
      </Section>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        id="projects"
      >
        <Projects />
      </Section>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={variants}
        id="experience"
      >
        <Experience />
      </Section>
    </main>
  );
}

export default Home;
