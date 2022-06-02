import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
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
    box-shadow: 0 0.25rem 0.5rem ${({ theme }) => theme.primary}00;
    transition: all 0.25s;

    :hover {
      transform: translate(0, -2px);
      box-shadow: 0 0.25rem 0.5rem ${({ theme }) => theme.primary}33;
    }
  }
`;

export default '';
