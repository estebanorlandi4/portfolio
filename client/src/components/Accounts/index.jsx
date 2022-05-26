import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { AccountsContainer } from './styled';

const Account = ({ children, url }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {children}
  </a>
);

function Accounts() {
  return (
    <AccountsContainer>
      <Account url="https://linkedin.com/in/estebanorlandi4/">
        <BsLinkedin className="icon" />
      </Account>
      <Account url="https://github.com/estebanorlandi4/">
        <BsGithub className="icon" />
      </Account>
      <Account url="mailto:estebanorlandi4@gmail.com">
        <SiGmail className="icon" />
      </Account>
    </AccountsContainer>
  );
}

export default Accounts;
