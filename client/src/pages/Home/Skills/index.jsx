import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Section, SectionHeader } from '../../../components/Styled';

const Options = styled.ul`
  list-style: none;
  display: flex;
  background-color: var(--primary);
  width: max-content;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
`;

const Option = styled.li`
  button {
    padding: 0.5rem 0.75rem;
    border-radius: none;
    border: none;
    background: #fff;

    ${({ isActive }) =>
      isActive
        ? css`
            background: var(--primary);
            color: #fff;
          `
        : css``};
  }
`;

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
    </Section>
  );
}

export default Skills;
