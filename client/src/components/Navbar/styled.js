import styled from 'styled-components';

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

  .name {
    color: #1e1e1e;
  }

  .logo {
    width: 2rem;
  }
`;

export const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
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
