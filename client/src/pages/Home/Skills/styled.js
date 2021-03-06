import styled, { css } from 'styled-components';

export const Options = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: max-content;
  margin: 1rem 0 0 0;
`;

export const Option = styled.li`
  width: 100%;
  button {
    position: relative;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: capitalize;
    transition: all 0.25s;
  }

  .underline {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--primary);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: var(--primary);
    `}
`;

export const Container = styled.div`
  .SkillsContainer {
    position: relative;
    max-width: 100%;
    /*
    overflow: hidden;
    overflow-x: scroll;
    */
    list-style: none;
    gap: 1rem;
    display: flex;
    flex-flow: row wrap;
    padding: 2rem 2rem;

    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
