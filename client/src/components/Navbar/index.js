import FadeIn from '../Animations';
import { Brand, Container, Nav } from './styled';

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
        </Container>
      </FadeIn>
    </Nav>
  );
}

export default Navbar;
