import { useState } from 'react';

import { Section, SectionHeader } from '../../../components/Styled';
import { skills } from '../../../utils/skills';
import { Card, Option, Options, SkillsContainer } from './styled';

const size = 48;

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

      <SkillsContainer>
        {active === 0 && (
          <div>
            <h3>Front-End</h3>
            <ul>
              {skills.front.map(({ icon, name, color }) => {
                const Icon = icon || 'img';
                return (
                  <Card>
                    <Icon size={size} color={color} />
                    {name}
                  </Card>
                );
              })}
            </ul>
          </div>
        )}
        {active === 1 && (
          <div>
            <h3>Back-End</h3>
            <ul>
              {skills.back.map(({ icon, name, color }) => {
                const Icon = icon || 'img';
                return (
                  <Card>
                    <Icon size={size} color={color} />
                    {name}
                  </Card>
                );
              })}
            </ul>
          </div>
        )}
        {active === 2 && (
          <div>
            <h3>Tools</h3>
            <ul>
              {skills.tools.map(({ icon, name, color }) => {
                const Icon = icon || 'img';
                return (
                  <Card>
                    <Icon size={size} color={color} />
                    {name}
                  </Card>
                );
              })}
            </ul>
          </div>
        )}
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
