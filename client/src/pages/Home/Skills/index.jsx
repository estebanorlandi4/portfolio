import { useState } from 'react';
import Skill from '../../../components/Skill';

import { Section, SectionHeader } from '../../../components/Styled';
import { skills } from '../../../utils/skills';
import { Container, Option, Options, SkillsContainer } from './styled';

const size = 44;

function Skills() {
  const [active, setActive] = useState(0);

  return (
    <Section>
      <SectionHeader>Habilidades</SectionHeader>
      <Options>
        <Option isActive={active === 0}>
          <button onClick={() => setActive(0)} type="button">
            Front-End
          </button>
        </Option>
        <Option isActive={active === 1}>
          <button onClick={() => setActive(1)} type="button">
            Back-End
          </button>
        </Option>
        <Option isActive={active === 2}>
          <button onClick={() => setActive(2)} type="button">
            Tools
          </button>
        </Option>
      </Options>

      <Container>
        <SkillsContainer>
          {active === 0 &&
            skills.front.map((skill) => (
              <Skill
                key={skill.name + new Date().getTime().toString()}
                {...skill}
                size={size}
              />
            ))}
          {active === 1 &&
            skills.back.map((skill) => (
              <Skill
                key={skill.name + new Date().getTime().toString()}
                {...skill}
                size={size}
              />
            ))}
          {active === 2 &&
            skills.tools.map((skill) => (
              <Skill
                key={skill.name + new Date().getTime().toString()}
                {...skill}
                size={size}
              />
            ))}
        </SkillsContainer>
      </Container>
    </Section>
  );
}

export default Skills;
