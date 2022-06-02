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

  padding: 1rem 2rem;
  position: relative;
  background-color: var(--primary);
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 0 1rem #0005;
  width: 100%;
  max-width: 25rem;

  .icon {
    position: absolute;
    top: 0;
    left: 50%;

    display: grid;
    place-items: center;
    margin: 0 auto;
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    background-color: #fff;
    color: var(--primary);
    border-radius: 15px;

    transform: translate(-50%, -50%);
  }

  p,
  h3 {
    text-align: center;
    width: 80%;
  }
  h3 {
    margin: 5.5rem auto 0 auto;
    font-size: 1.75rem;
  }
  p {
    margin: 1rem auto;
    font-size: 0.9rem;
  }

  span {
    display: block;
    font-weight: 500;
    text-transform: capitalize;
    margin: 1rem 0 0 0;
    text-align: center;
    width: max-content;
  }
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
    border: 4px solid #fcf;
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
