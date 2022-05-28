import styled from 'styled-components';

export const AccountsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.5rem;

  ::before,
  ::after {
    content: '';
    width: 2px;
    height: 2rem;
    background: #000;
  }
  ::before {
    margin: 0 0 1rem 0;
  }
  ::after {
    margin: 1rem 0 0 0;
  }

  .icon {
    box-sizing: content-box;
    color: #000;
    padding: 0.25rem;
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
  }
`;

export const Account = styled.a``;
