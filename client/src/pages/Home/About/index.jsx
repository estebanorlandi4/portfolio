import { Section, SectionHeader } from '../../../components/Styled';
import { Color, Container, P1, P2 } from './styled';

function About() {
  return (
    <Section>
      <Container>
        <SectionHeader>Sobre mí</SectionHeader>
        <div>
          <P1>
            Hola! Mi nombre es <Color>Esteban Orlandi</Color> soy un
            desarrollador <Color>Full-Stack</Color> especializado en desarrollo{' '}
            <Color>Front-End</Color>.
          </P1>
          <P2>
            Estoy en constante aprendizaje y siempre busco mejorar tanto en
            programacion como en diseño UI/UX. A la hora de programar trato de
            hacer un codigo limpio y ordenado. En este momento estoy buscando
            crecer profesionalmente como Desarrollador Front-End.
          </P2>
        </div>
      </Container>
    </Section>
  );
}

export default About;
