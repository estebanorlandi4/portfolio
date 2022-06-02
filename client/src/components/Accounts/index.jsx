import Contact from '../Contact';

import { AccountsContainer, Container } from './styled';
import Toast from '../Toast';
import { ContactMethods } from '../../utils';

function Accounts({ flow, always, toast }) {
  return (
    <Container always={always}>
      <AccountsContainer flow={flow}>
        {Object.entries(ContactMethods).map(([key, { url, icon: Icon }]) => (
          <Contact className="contact" url={url}>
            {toast && (
              <Toast direction="left" className="toast">
                {key}
              </Toast>
            )}
            {Icon && <Icon className="icon" />}
          </Contact>
        ))}
      </AccountsContainer>
    </Container>
  );
}

export default Accounts;
