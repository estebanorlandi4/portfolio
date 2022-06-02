import styled, { css } from 'styled-components';
import breakpoints from '../../utils/breakpoints';

export const AccountsContainer = styled.div`
  display: flex;
  flex-flow: column;

  align-items: center;
  gap: 0.5rem;
  padding: 0;
  height: max-content;

  ::before,
  ::after {
    content: '';
    width: 2px;
    height: 2rem;
    background: var(--text);
  }
  ::before {
    margin: 0 0 1rem 0;
  }
  ::after {
    margin: 1rem 0 0 0;
  }

  ${({ flow }) =>
    flow &&
    css`
      flex-flow: ${flow || 'column'};
      ::before,
      ::after {
        display: none;
      }
    `};

  .icon {
    box-sizing: content-box;
    color: var(--text);
    padding: 0.25rem;
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
  }

  .contact {
    position: relative;
    display: flex;
    align-items: center;

    .toast {
      top: 50%;
      transform: translate(1rem, -50%);
    }

    :hover .toast {
      opacity: 1;
      left: 100%;
    }
  }
`;

export const Container = styled.div`
  position: relative;

  ${({ always }) =>
    !always &&
    css`
      top: 50%;
      left: 2rem;
      z-index: 9999;
      transform: translate(0, -50%);
      position: fixed;
      @media screen and (max-width: ${breakpoints.values.pc}px) {
        display: none;
      }
    `}
`;
