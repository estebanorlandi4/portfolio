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

const getRandom = () => {
  const r = Math.floor(Math.random() * (100 - 50) + 50);
  return Math.round(Math.random()) ? r * -1 : r;
};
function Skills() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <Container>
      <SectionHeader>Habilidades</SectionHeader>
      <Options>
        {tabs.map((tab) => (
          <Option isActive={active.label === tab.label}>
            <button onClick={() => setActive(tab)} type="button">
              {tab.label}
              {active.label === tab.label && (
                <motion.div className="underline" layoutId="underline" />
              )}
            </button>
          </Option>
        ))}
      </Options>

      <AnimatePresence className="SkillsContainer" layout exitBeforeEnter>
        <div className="SkillsContainer">
          {active.component.map((skill) => (
            <motion.div
              key={skill.name + new Date().getTime().toString()}
              initial={{ y: 50, x: getRandom(), opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: 50, x: getRandom(), opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Skill {...skill} size={size} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </Container>
  );
}

export default Skills;
