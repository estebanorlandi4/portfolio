import { Section, SectionHeader } from '../../../components/Styled';
import { Article, Description, Header, Name, Place } from './styled';

function Experience() {
  return (
    <Section>
      <SectionHeader>Experiencia</SectionHeader>

      <Article>
        <Header>
          <Name>
            Full-Stack Teaching Assistant
            <div className="dates">
              <time dateTime="2021-08">Septiembre 2021</time>-
              <time dateTime="2021-11">Noviembre 2021</time>
            </div>
          </Name>
          <Place>SoyHenry</Place>
        </Header>
        <Description>
          Integración de los estudiantes al grupo de estudio. Orientación a los
          estudiantes en sus primeros pasos de la cursada. Proponer ideas para
          la mejora del Bootcamp. Ayudar con la resolución de los ejercicios y
          promover la colaboración del grupo.
        </Description>
      </Article>
    </Section>
  );
}

export default Experience;
