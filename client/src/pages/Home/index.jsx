import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';

import Decoration from '../../assets/images/decoration.svg';

function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}

export default Home;
