import styled, { css } from 'styled-components';

export const Grid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  width: 100%;
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

export const footerTheme = ({ theme }) =>
  theme.isDark &&
  css`
    background: #0004;
  `;
export const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  color: #fff;
  padding: 4rem 0;
  background: #1e2025;

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

  ${footerTheme}
`;

export const PopupContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  padding: 1rem 2rem 2rem 2rem;
  position: relative;
  border-radius: 5px;

  width: 100%;
  max-width: 25rem;

  .icon {
    display: grid;
    place-items: center;
    margin: 0 auto;
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    color: var(--accent);
  }

  p,
  h3 {
    text-align: center;
  }
  h3 {
    margin: 2rem auto 0 auto;
    font-size: 1.75rem;
  }
  p {
    margin: 1rem auto;
    font-size: 0.9rem;
  }

  span {
    display: block;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--primary);
    text-transform: capitalize;
    margin: 1.5rem 0 0 0;
    text-align: center;
    width: max-content;
  }

  ${({ theme }) =>
    theme.isDark
      ? css`
          background-color: #1a1c20;
          box-shadow: 0 0 1rem #0005;
          color: #fff;
        `
      : css`
          background-color: #fff;
          box-shadow: 0 0 1rem #0002;
          color: #1e1e1e;
        `}
`;

export const Loader = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  width: 70px;
  height: 70px;

  div {
    position: absolute;
    top: 36px;
    left: 36px;
    position: absolute;
    border: 4px solid var(--primary);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
