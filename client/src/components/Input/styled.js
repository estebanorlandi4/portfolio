import styled from 'styled-components';

export const Label = styled.label`
  input,
  textarea {
    width: 100%;
    border: none;
    color: #fff;
    background-color: #8882;
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

  textarea {
    resize: vertical;
  }

  span {
    color: #888;
    font-size: 0.9rem;
  }

  input:focus,
  textarea:focus {
    outline: 1.5px solid var(--primary);
  }
`;

export default '';
