import { useState } from 'react';
import { BiAdjust } from 'react-icons/bi';

import { Brand, MenuButton, MenuContainer, Nav } from './styled';

import Logo from '../../assets/images/logo.svg';
import Accounts from '../Accounts';

const ScrollTo = ({ id, children }) => <a href={`#${id}`}>{children}</a>;

function Menu({ ids, changeTheme, mobile }) {
  const { home, about, skills, projects, contact } = ids;
  return (
    <>
      <div className="scrolls">
        <ScrollTo id={home}>Home</ScrollTo>
        <ScrollTo id={about}>about</ScrollTo>
        <ScrollTo id={skills}>skills</ScrollTo>
        <ScrollTo id={projects}>projects</ScrollTo>
        <ScrollTo id={contact}>contact</ScrollTo>
      </div>

      <div className="right">
        <Accounts flow="row" always />

        <button onClick={changeTheme} type="button">
          <BiAdjust className="theme-icon" size={20} />
        </button>
      </div>
    </>
  );
}

function Navbar({ ids, changeTheme }) {
  const [show, setShow] = useState(false);
  return (
    <Nav>
      <div className="container">
        <Brand>
          <img loading="lazy" src={Logo} alt="" className="logo" />
          <span>esteban orlandi</span>
        </Brand>

        <Menu ids={ids} changeTheme={changeTheme} />
        <MenuButton onClick={() => setShow((old) => !old)}>menu</MenuButton>
      </div>
      {show && (
        <MenuContainer>
          <Menu mobile ids={ids} changeTheme={changeTheme} />
        </MenuContainer>
      )}
    </Nav>
  );
}

export default Navbar;
