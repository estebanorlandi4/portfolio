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

function Home({ lang, ids }) {
  const { home, about, skills, projects, experience } = ids;

  return (
    <main>
      <div id={home}>
        <Intro lang={lang} />
      </div>

      <div id={about}>
        <Section {...sharedProps}>
          <About lang={lang} />
        </Section>
      </div>

      <div id={skills}>
        <Section {...sharedProps}>
          <Skills lang={lang} />
        </Section>
      </div>

      <div id={projects}>
        <Section {...sharedProps}>
          <Projects lang={lang} />
        </Section>
      </div>

      <div id={experience}>
        <Section {...sharedProps}>
          <Experience lang={lang} />
        </Section>
      </div>
    </main>
  );
}

export default Home;
