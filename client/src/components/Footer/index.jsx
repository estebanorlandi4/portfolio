import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BiCheck, BiErrorAlt } from 'react-icons/bi';
import { ContactMethods, Icons } from '../../utils';

import Contact from '../Contact';
import FormContact from '../Forms';
import Popup from '../Popup';

import { Container, SectionHeader } from '../Styled';
import {
  Contacts,
  FooterContainer,
  Grid,
  Loader,
  PopupContent,
} from './styled';

const init = {
  succes: null,
  message: null,
  res: null,
  isLoading: false,
};
function Footer() {
  const [popup, setPopup] = useState(init);

  const handlePopup = ({ message, success, isLoading, wasSend }) => {
    setPopup((old) => ({ ...old, success, message, wasSend, isLoading }));
  };

  return (
    <>
      <FooterContainer>
        <div className="divider" />

        <Container>
          <section>
            <SectionHeader>Contacto</SectionHeader>
            <FormContact cb={handlePopup} />

            <Grid>
              <Contacts>
                <li>
                  <Contact url={ContactMethods.linkedin.url}>
                    <Icons.Linkedin size={24} />
                  </Contact>
                </li>
                <li>
                  <Contact url={ContactMethods.github.url}>
                    <Icons.Github size={24} />
                  </Contact>
                </li>
                <li>
                  <Contact url={ContactMethods.gmail.url}>
                    <Icons.Gmail size={24} />
                  </Contact>
                </li>
              </Contacts>
            </Grid>
          </section>
        </Container>
      </FooterContainer>

      <AnimatePresence>
        {popup.isLoading && (
          <Popup>
            <PopupContent>
              <Loader>
                <div />
                <div />
              </Loader>
              <span>Sending message...</span>
            </PopupContent>
          </Popup>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {popup.wasSend ? (
          <Popup hideAfter={7 * 1000} hide={() => setPopup(init)} close>
            {popup.success ? (
              <PopupContent>
                <BiCheck className="icon" />
                <h3>Thank you!!!</h3>
                <p>
                  Thank you for contacting me, I will answer you as soon as
                  possible.
                </p>
              </PopupContent>
            ) : (
              <PopupContent>
                <BiErrorAlt className="icon" />
                <h3>Sorry!!!</h3>
                <p>
                  Something went wrong while sending the email, please try again
                  later or use another form of contact.
                </p>
              </PopupContent>
            )}
          </Popup>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Footer;
