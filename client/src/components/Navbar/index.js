import { useState } from 'react';
import { BiBookAlt, BiHomeAlt } from 'react-icons/bi';
import { AiOutlineCode } from 'react-icons/ai';
import { MdOutlineContacts } from 'react-icons/md';

import FadeIn from '../Animations';
import { Brand, Container, Menu, Nav, NavLink } from './styled';

import Logo from '../../assets/images/logo.svg';

const size = 20;
function NavMenu({ mobile, show }) {
  return (
    <Menu show={show} mobile={mobile}>
      <li>
        <NavLink as="a" href="#top">
          {mobile ? <BiHomeAlt size={size} /> : 'home'}
        </NavLink>
      </li>
      <li>
        <NavLink>{mobile ? <BiBookAlt size={size} /> : 'skills'}</NavLink>
      </li>
      <li>
        <NavLink>{mobile ? <AiOutlineCode size={size} /> : 'work'}</NavLink>
      </li>
      <li>
        <NavLink>{mobile ? <MdOutlineContacts size={size} /> : 'work'}</NavLink>
      </li>
    </Menu>
  );
}

function Navbar() {
  const [state, setState] = useState(false);

  const toggle = () => setState((old) => !old);
  return (
    <>
      <Nav>
        <FadeIn duration=".5s" from="0, -10rem">
          <Container>
            <Brand>
              <img src={Logo} alt="" className="logo" />
              <span className="name">esteban orlandi</span>
            </Brand>

            <NavMenu />
          </Container>
        </FadeIn>
      </Nav>

      <NavMenu show={state} mobile />
    </>
  );
}

export default Navbar;
