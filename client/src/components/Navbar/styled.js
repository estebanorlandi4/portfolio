import styled, { css } from 'styled-components';
import breakpoints from '../../utils/breakpoints';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.bg};

  position: fixed;
  z-index: 9999;
  width: 100%;

  .container {
    width: 85vw;
    margin: 0 auto;
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (${breakpoints.tablet}) {
      .scrolls,
      .right {
        display: none;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .theme-icon {
    display: flex;
  }

  .scrolls {
    display: flex;
    gap: 0.5rem;
    flex-flow: row;
    align-items: center;
    a {
      color: #888;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;

      :hover {
        color: #fff;
      }
    }
  }
`;

export const Brand = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  width: min-content;
  letter-spacing: 2px;
  font-weight: 900;
  line-height: 0.9rem;
  font-size: 0.75rem;

  span {
    color: ${({ theme }) => theme.fg()};
  }

  .logo {
    width: 2rem;
  }

  @media screen and (${breakpoints.mobile}) {
    margin: 0 auto;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li {
    position: relative;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0.5rem;
      height: 2px;
      background: #1e1e1e;
      transition: all 0.25s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  transition: all 0.25s;
  ${({ mobile }) =>
    mobile
      ? css`
          @media screen and (${breakpoints.tablet}) {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            z-index: 9999;
            padding: 1rem 0;
            background-color: #fff;
            transform: translate(0, 0);
            box-shadow: 0 -0.15rem 0.25rem #0001;

            li::after {
              display: none;
            }
          }
        `
      : css`
          @media screen and (max-width: 480px) {
            display: none;
          }
        `};
`;

export const NavLink = styled.a`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  text-transform: capitalize;
`;

export const MenuButton = styled.button`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

export const MenuContainer = styled.div`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    background-color: ${({ theme }) => theme.bg};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 2rem 0;

    .scrolls {
      flex-flow: column;
    }
  }
`;
