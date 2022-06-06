import CV from 'assets/Esteban Orlandi - CV - EN - Full Stack.pdf';
import { useArrayInterval, useTagAnimation } from '../../../hooks';
import { variants } from '../../../utils/motionVariants';
import { Container, Header, Name, Resume, Tag } from './styled';

const tags = ['Web Developer', 'Full Stack Developer', 'Front End', 'Back End'];
const speed = 100;

function Intro() {
  const { current } = useArrayInterval({
    tags,
    speed: (tag) => tag.length * speed + 2 * 1000,
  });
  const label = useTagAnimation({ label: current, speed });

  return (
    <Container style={{ height: `100vh` }}>
      <div className="info">
        <Header>
          <Name
            initial="hidden"
            animate="visible"
            custom={{ y: 500 }}
            variants={variants}
          >
            esteban Orlandi
          </Name>

          <Tag
            initial="hidden"
            animate="visible"
            custom={{ delay: 0.25, y: 500 }}
            variants={variants}
          >
            &lt; <span> {label}</span>/&gt;
          </Tag>
        </Header>

        <Resume
          initial="hidden"
          animate="visible"
          custom={{ delay: 0.5, y: 500 }}
          variants={variants}
          href={CV}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </Resume>
      </div>
    </Container>
  );
}

export default Intro;
