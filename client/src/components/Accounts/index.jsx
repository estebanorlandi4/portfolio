import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import FadeIn from '../Animations';
import Contact from '../Contact';

import { AccountsContainer, Container } from './styled';
import Toast from '../Toast';

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
