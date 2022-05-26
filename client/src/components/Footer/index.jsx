import styled from 'styled-components';
import { Container as GeneralContainer } from '../Styled';

const Container = styled.footer`
  color: #fff;
  background-color: #000;
  padding: 4rem 0;
`;
const Form = styled.form`
  margin: 1rem 0 0 0;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 100%;
`;

function Footer() {
  return (
    <Container>
      <GeneralContainer>
        <h2>Contacto</h2>
        <Form>
          <label htmlFor="name">
            Your Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Complete Name"
            />
          </label>

          <label htmlFor="message">
            Your Message
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="Your message"
            />
          </label>
        </Form>
      </GeneralContainer>
    </Container>
  );
}

export default Footer;
