import { useState } from 'react';

import Input from '../Input';

import { ContactMethods, Icons } from '../../utils';
import { Container, SectionHeader } from '../Styled';
import { Contacts, FooterContainer, Form, Grid } from './styled';
import Contact from '../Contact';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function Footer() {
  const [inputs, setInputs] = useState(initialState);

  const onChange = ({ target: { name, value } }) => {
    setInputs((old) => ({ ...old, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(inputs);
  };

  return (
    <FooterContainer>
      <div className="divider" />

      <Container>
        <section>
          <SectionHeader>Contacto</SectionHeader>

          <Grid>
            <Form onSubmit={onSubmit}>
              <div className="inline">
                <Input
                  onChange={onChange}
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />

                <Input
                  onChange={onChange}
                  name="email"
                  placeholder="Your Email"
                  type="text"
                />
              </div>

              <Input
                onChange={onChange}
                name="message"
                placeholder="Type your message here"
                as="textarea"
              />

              <button type="submit">Send message</button>
            </Form>

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
  );
}

export default Footer;
