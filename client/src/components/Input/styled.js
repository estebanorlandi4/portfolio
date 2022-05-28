import styled from 'styled-components';

export const Label = styled.label`
  input,
  textarea {
    border: none;
    color: #fff;
    background-color: #1e1e1e;
    border-radius: 3px;
    padding: 0.75rem 1rem;
    margin: 0.25rem 0 0 0;
    font-size: 1rem;
    border: 1px solid #333;
  }

  input::placeholder,
  textarea::placeholder {
    color: #888;
  }

  span {
    color: #888;
    font-size: 0.9rem;
  }
`;

export default '';
