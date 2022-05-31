import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
`;

export const Contacts = styled.ul`
  margin: 2rem 0 0 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  ::before,
  ::after {
    content: '';
    display: block;
    width: 3rem;
    height: 1px;
    background-color: #fff;
  }

  li {
    display: flex;
  }
`;

export const Form = styled.form`
  margin: 2rem 0 0 0;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 100%;

  .inline {
    display: flex;
    gap: 1rem;
  }

  label {
    width: 100%;
    display: flex;
    flex-flow: column;
  }

  textarea {
    height: 10rem;
  }

  button[type='submit'] {
    background-color: var(--primary);
    border: none;
    border-radius: 3px;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: max-content;
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  color: #fff;
  background-color: #000;
  padding: 4rem 0;

  .divider {
    --size: 1.5rem;
    position: absolute;
    top: calc(-1 * var(--size));
    left: 0;
    width: 100%;
    height: var(--size);
    background-color: var(--primary);
    clip-path: polygon(50% 75%, 100% 0, 100% 100%, 0 100%, 0 0);
    animation: clip-anim 2s infinite linear;
  }
`;
