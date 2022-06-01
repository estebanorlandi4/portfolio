import styled, { css } from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

export const Container = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  flex-flow: column;
  gap: 4rem;
`;

const projectDark = ({ theme }) => (theme.isDark ? css`` : '');
export const Project = styled.article`
  position: relative;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
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

  img {
    width: 10rem;
    height: auto;
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

  ${projectDark}

  @media screen and (min-width: ${breakpoints.values.pc - 100}px) {
    :nth-child(2n) {
      flex-flow: row-reverse;
      .info {
        align-items: flex-end;
        .top {
          align-items: flex-end;
        }
      }
    }
  }
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
    top: -2rem;
  }

  :hover .toast {
    display: block;
    opacity: 1;
  }

  ${({ bg }) =>
    bg &&
    css`
      background-color: ${bg};
      color: #fff;
    `}
`;
