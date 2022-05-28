import FadeIn from '../Animations';
import { Brand, Container, Menu, Nav, NavLink } from './styled';

import Logo from '../../assets/images/logo.svg';

function Navbar() {
  return (
    <Nav>
      <FadeIn duration=".5s" from="0, -10rem">
        <Container>
          <Brand>
            <img src={Logo} alt="" className="logo" />
            <span className="name">esteban orlandi</span>
          </Brand>
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
      </FadeIn>
    </Nav>
  );
}

export default Navbar;
