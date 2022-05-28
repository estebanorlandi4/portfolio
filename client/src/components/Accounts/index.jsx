import styled from 'styled-components';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import FadeIn from '../Animations';
import Contact from '../Contact';

import { AccountsContainer } from './styled';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 2rem;
  z-index: 9999;
  transform: translate(0, -50%);
`;

function Accounts() {
  return (
    <Container>
      <FadeIn duration=".5s" from="-10rem, 0">
        <AccountsContainer>
          <Contact url="https://linkedin.com/in/estebanorlandi4/">
            <BsLinkedin className="icon" />
          </Contact>
          <Contact url="https://github.com/estebanorlandi4/">
            <BsGithub className="icon" />
          </Contact>
          <Contact url="mailto:estebanorlandi4@gmail.com">
            <SiGmail className="icon" />
          </Contact>
        </AccountsContainer>
      </FadeIn>
    </Container>
  );
}

export default Accounts;
