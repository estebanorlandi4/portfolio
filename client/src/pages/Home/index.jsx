import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

import { variantsSection } from '../../utils/motionVariants';
import { Section } from '../../components/Styled';

function Home() {
  return (
    <main>
      <div id="intro">
        <Intro />
      </div>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variantsSection}
        id="about"
      >
        <About />
      </Section>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variantsSection}
        id="skills"
      >
        <Skills />
      </Section>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variantsSection}
        id="projects"
      >
        <Projects />
      </Section>

      <Section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variantsSection}
        id="experience"
      >
        <Experience />
      </Section>
    </main>
  );
}

export default Home;
