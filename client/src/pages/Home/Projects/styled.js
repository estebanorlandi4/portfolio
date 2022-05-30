import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  aspect-ratio: 16 / 9;
`;

export const Project = styled.article`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
  background: #f0f0f0;
  padding: 1rem;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0.15rem 0.3rem #0000;
  transition: all 0.25s;

  :hover {
    transform: scale(105%);
    box-shadow: 0 1rem 1rem -1rem #000f;
  }

  h3 {
    font-size: 1.35rem;
    text-transform: uppercase;
  }

  ${({ bg }) =>
    bg
      ? css`
          background: linear-gradient(-30deg, transparent, #000d), url('${bg}');
          background-size: cover;
          background-repeat: no-repeat;
        `
      : ''}

  ${({ area }) =>
    area &&
    css`
      grid-area: ${area};
    `}
  ${({ bgPos }) =>
    bgPos &&
    css`
      background-position: ${bgPos};
    `}
`;

export const URLs = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin: 0.5rem 0 0 0;
`;

export const URL = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  text-decoration: underline;
  color: #ddd;

  :hover {
    color: #fff;
  }
`;

export const Techs = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem 0.5rem;
  list-style: none;
`;

export const Tech = styled.li`
  position: relative;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  display: grid;
  place-items: center;

  .toast {
    display: none;
  }
  :hover .toast {
    display: block;
    top: -1.5rem;
    opacity: 1;
  }

  ${({ bg }) =>
    bg &&
    css`
      background-color: ${bg};
    `}
`;
