import { motion } from 'framer-motion';

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

      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{
          delay: 0,
          x: { type: 'spring', stiffness: 100 },
          default: { duration: 1 },
        }}
        id="about"
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        id="skills"
      >
        <Skills />
      </motion.div>

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
