import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Project = styled.article`
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  color: #000;
  box-shadow: 0 0.15rem 0.3rem #0000;
  transition: all 0.25s;

  .info {
    display: flex;
    flex-flow: column;
    gap: 1rem;

    width: 100%;
  }

  .top {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    margin: 1rem 0 0 0;
  }

  :nth-child(2n) {
    flex-flow: row-reverse;
    .info {
      align-items: flex-end;
      .top {
        align-items: flex-end;
      }
    }
  }

  img {
    width: 10rem;
    height: auto;
    transition: all 0.25s;
    z-index: 10;
    border-radius: 5px;
  }

  h3 {
    font-size: 1.25rem;
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
`;

export const URL = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #2b7fbc;

  :hover {
    color: #5e5eae;
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
      color: #fff;
    `}
`;
