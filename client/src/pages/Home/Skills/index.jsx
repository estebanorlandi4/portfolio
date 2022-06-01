import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Skill from '../../../components/Skill';

import { SectionHeader } from '../../../components/Styled';
import { skills } from '../../../utils/skills';
import { Container, Option, Options } from './styled';

const size = 44;

const tabs = [
  {
    label: 'front-end',
    component: skills.front,
  },
  {
    label: 'back-end',
    component: skills.back,
  },
  {
    label: 'tools',
    component: skills.tools,
  },
];

function Skills() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <Container>
      <SectionHeader>Habilidades</SectionHeader>
      <Options>
        {tabs.map((tab) => (
          <Option key={tab.label} isActive={active.label === tab.label}>
            <button onClick={() => setActive(tab)} type="button">
              {tab.label}
              {active.label === tab.label && (
                <motion.div className="underline" layoutId="underline" />
              )}
            </button>
          </Option>
        ))}
      </Options>

      <div className="SkillsContainer">
        <AnimatePresence className="SkillsContainer" layout exitBeforeEnter>
          {active.component.map((skill) => (
            <Skill
              key={skill.name + new Date().getTime().toString()}
              {...skill}
              size={size - skill.size}
            />
          ))}
        </AnimatePresence>
      </div>
    </Container>
  );
}

export default Skills;
