import { BiAdjust } from 'react-icons/bi';

import { Brand, Nav } from './styled';

import Logo from '../../assets/images/logo.svg';

function Navbar({ changeTheme }) {
  return (
    <Nav>
      <div className="container">
        <Brand>
          <img src={Logo} alt="" className="logo" />
          <span>esteban orlandi</span>
        </Brand>

        <button onClick={changeTheme} type="button">
          <BiAdjust size={20} />
        </button>
      </div>
    </Nav>
  );
}

export default Navbar;
