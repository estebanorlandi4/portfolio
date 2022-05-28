import styled, { css } from 'styled-components';

export const Options = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--primary);
  width: max-content;
  margin: 1rem 0 0 0;
`;

export const Option = styled.li`
  width: 100%;
  button {
    width: 100%;
    padding: 0.5rem 0.75rem;
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
`;

export const SkillsContainer = styled.div`
  padding: 2rem 0;
  margin: 1rem 0 0 0;
  border-radius: 0.5rem;

  ul {
    list-style: none;
    margin: 1rem 0 0 0;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
  }
`;

export const Card = styled.li`
  display: grid;
  place-items: center;
  padding: 2rem 1rem;
  width: 100%;
  font-weight: 600;
  font-size: 0.75rem;
`;
