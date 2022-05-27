import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, SectionHeader } from '../../../components/Styled';

const Options = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--primary);
  width: max-content;
  border-radius: 5px 5px 0 0;
  margin: 1rem 0 0 0;
`;

const Option = styled.li`
  width: 100%;
  button {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: none;
    border: none;
    border-inline: 1px solid var(--primary);
    background: #fff;
    font-size: 0.9rem;
    font-weight: 600;

    ${({ isActive }) =>
      isActive
        ? css`
            background: var(--primary);
            color: #fff;
          `
        : css``};
  }

  :first-child button {
    border: none;
    border-left: 1px solid var(--primary);
  }
  :last-child button {
    border: none;
    border-right: 1px solid var(--primary);
  }
`;

const SkillsContainer = styled.div`
  padding: 1rem;
`;

const skills = {
  front: {},
  back: {},
  tools: {},
};

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
        {active === 0 && <div>React</div>}
        {active === 1 && <div>NodeJS</div>}
        {active === 2 && <div>Eslint</div>}
      </SkillsContainer>
    </Section>
  );
}

export default Skills;
