import { BiAdjust } from 'react-icons/bi';

import { Brand, Nav } from './styled';

import Logo from '../../assets/images/logo.svg';
import Accounts from '../Accounts';

function Navbar({ changeTheme }) {
  return (
    <Nav>
      <div className="container">
        <Brand>
          <img loading="lazy" src={Logo} alt="" className="logo" />
          <span>esteban orlandi</span>
        </Brand>

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
