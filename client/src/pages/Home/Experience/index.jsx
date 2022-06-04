import { Section, SectionHeader } from '../../../components/Styled';
import { Article, Description, Header, Name, Place } from './styled';

function Experience() {
  return (
    <Section>
      <SectionHeader>Experience</SectionHeader>

      <Article>
        <Header>
          <Name>
            Full-Stack Teaching Assistant
            <div className="dates">
              <time dateTime="2021-08">September 2021</time>-
              <time dateTime="2021-11">November 2021</time>
            </div>
          </Name>
          <Place>SoyHenry</Place>
        </Header>
        <Description>
          Integration of students to the students group. Orientation to students
          in their first steps of the course. Propose ideas for the improvement
          of the Bootcamp. Help with the resolution of the execises and promote
          group collaboration.
        </Description>
      </Article>
    </Section>
  );
}

export default Experience;
