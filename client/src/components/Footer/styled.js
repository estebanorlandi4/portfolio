import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
`;

export const Contacts = styled.div`
  ul {
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
  }
`;

export const Form = styled.form`
  margin: 2rem 0 0 0;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 100%;

  label {
    display: flex;
    flex-flow: column;
  }

  button[type='submit'] {
    background-color: var(--primary);
    border: none;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: max-content;
  }
`;

export const FooterContainer = styled.footer`
  color: #fff;
  background-color: #000;
  padding: 4rem 0;
`;
