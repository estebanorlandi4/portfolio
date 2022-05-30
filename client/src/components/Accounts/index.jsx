import styled from 'styled-components';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import FadeIn from '../Animations';
import Contact from '../Contact';

import { AccountsContainer } from './styled';
import breakpoints from '../../utils/breakpoints';
import Toast from '../Toast';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 2rem;
  z-index: 9999;
  transform: translate(0, -50%);

  @media screen and (${breakpoints.mobile}) {
    display: none;
  }
`;

function Accounts() {
  return (
    <Container>
      <FadeIn duration=".5s" from="-10rem, 0">
        <AccountsContainer>
          <Contact
            className="contact"
            url="https://linkedin.com/in/estebanorlandi4/"
          >
            <Toast direction="left" className="toast">
              LinkedIn
            </Toast>
            <BsLinkedin className="icon" />
          </Contact>
          <Contact
            className="contact"
            url="https://github.com/estebanorlandi4/"
          >
            <Toast direction="left" className="toast">
              GitHub
            </Toast>
            <BsGithub className="icon" />
          </Contact>
          <Contact className="contact" url="mailto:estebanorlandi4@gmail.com">
            <Toast direction="left" className="toast">
              Gmail
            </Toast>
            <SiGmail className="icon" />
          </Contact>
        </AccountsContainer>
      </FadeIn>
    </Container>
  );
}

export default Accounts;
