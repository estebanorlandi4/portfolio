import { SectionHeader } from '../../../components/Styled';
import { Color, Container, P1, P2 } from './styled';

const keywords = {
  name: <Color>Esteban Orlandi</Color>,
  fullstack: <Color>Full-Stack</Color>,
  front: <Color>Front-End</Color>,
};

function About() {
  return (
    <div>
      <Container>
        <SectionHeader>About me</SectionHeader>
        <div>
          <P1>
            Hello! My name is {keywords.name} I am a {keywords.fullstack}{' '}
            developer specialized in {keywords.front} development.
          </P1>
          <P2>
            Soy de Buenos Aires (Argentina), estoy en constante aprendizaje y
            siempre busco mejorar. A la hora de programar busco hacer un codigo
            limpio y reutilizable.
            {/*
            I am constantly learning and always looking to improve both in
            programming and UI/UX design. At the time of programming I try to
            make a clean and tidy code. Right now I&apos;m looking to grow
            professionally as a Front-End Developer.
            */}
          </P2>
        </div>
      </Container>
    </div>
  );
}

export default About;
