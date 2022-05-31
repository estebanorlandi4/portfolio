import styled, { css } from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

export const Container = styled.div`
  .SkillsContainer {
    max-width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    list-style: none;
    gap: 1rem;
    display: flex;
    padding: 2rem 2rem;

    min-height: calc(7rem + 4rem);

    scrollbar-width: none;

    /*
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    */
  }
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
    position: relative;
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

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--primary);
  }
`;
