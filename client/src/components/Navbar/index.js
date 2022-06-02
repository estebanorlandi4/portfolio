import { BiAdjust } from 'react-icons/bi';

import { Brand, Nav } from './styled';

import Logo from '../../assets/images/logo.svg';
import Accounts from '../Accounts';

const ScrollTo = ({ id, children }) => <a href={`#${id}`}>{children}</a>;

function Navbar({ ids, changeTheme }) {
  const { home, about, skills, projects, contact } = ids;

  return (
    <Nav>
      <div className="container">
        <Brand>
          <img loading="lazy" src={Logo} alt="" className="logo" />
          <span>esteban orlandi</span>
        </Brand>

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
      </div>
    </Nav>
  );
}

export default Navbar;
