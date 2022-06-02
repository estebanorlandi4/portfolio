import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

import { motionSections } from '../../utils/motionVariants';
import { Section } from '../../components/Styled';

const { variants, viewport } = motionSections;

const sharedProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport,
  variants,
};

function Home() {
  return (
    <main>
      <div id="intro">
        <Intro />
      </div>

      <Section {...sharedProps} id="about">
        <About />
      </Section>

      <Section {...sharedProps} id="skills">
        <Skills />
      </Section>

      <Section {...sharedProps} id="projects">
        <Projects />
      </Section>

      <Section {...sharedProps} id="experience">
        <Experience />
      </Section>
    </main>
  );
}

export default Home;
