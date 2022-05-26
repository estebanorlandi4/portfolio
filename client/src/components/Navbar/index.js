import { Brand, Container, Menu, Nav, NavLink } from './styled';

function Navbar() {
  return (
    <Nav>
      <Container>
        <Brand>esteban orlandi</Brand>
        <Menu>
          <li>
            <NavLink as="a" href="#top">
              home
            </NavLink>
          </li>
          <li>
            <NavLink>skills</NavLink>
          </li>
          <li>
            <NavLink>work</NavLink>
          </li>
          <li>
            <NavLink>contact</NavLink>
          </li>
        </Menu>
      </Container>
    </Nav>
  );
}

export default Navbar;
