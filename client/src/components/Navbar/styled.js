import styled from 'styled-components';

export const Brand = styled.p`
  text-transform: uppercase;
  width: min-content;
  letter-spacing: 2px;
  font-weight: bold;
  line-height: clamp(0.75rem, 1rem + 2vw, 1rem);
  font-size: clamp(0.75rem, 1rem + 0.3vw, 1rem);
`;

export const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  padding: 0.75rem 0;
  display: flex;
  justify-content: space-between;
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
`;

export const Nav = styled.nav`
  background: #fff;
  position: fixed;
  z-index: 9999;
  width: 100%;
`;

export const NavLink = styled.a`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  text-transform: capitalize;
`;
