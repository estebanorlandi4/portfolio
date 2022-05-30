import styled, { css } from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

export const Container = styled.div`
  min-height: 30vh;
`;

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
    transition: all 0.25s;

    :hover {
      background-color: #fff7;
    }

    ${({ isActive }) =>
      isActive
        ? css`
            background: var(--primary);
            color: #fff;
          `
        : css``};
  }
`;

export const SkillsContainer = styled.ul`
  list-style: none;
  margin: 1.5rem 0 0 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
`;
