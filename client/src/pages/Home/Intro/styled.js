import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  .info {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10rem;
  }
  p {
    margin: 2rem 0 0 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 1.25rem;
    height: 1.25rem;
    color: var(--primary);
    font-size: clamp(0.75rem, 0.5rem + 2vw, 1.5rem);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Name = styled.h1`
  text-transform: capitalize;
  font-size: clamp(1.5rem, 1.5rem + 2vw, 4rem);
  letter-spacing: 3px;
  font-weight: 800;

  color: transparent;
  background-clip: text;

  background-image: var(--bg-linear);

  background-size: 300%;
  background-position: 0 0;

  animation: bg 5s infinite linear;

  @keyframes bg {
    from {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    to {
      background-position: 0 50%;
    }
  }
`;

export const STag = styled.span`
  position: relative;
  color: #764abc;
  display: flex;
  gap: 1rem;
  letter-spacing: 1.5px;
  width: max-content;
  padding: 0 0.17rem;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 2px;
    height: 75%;
    background: #764abc;

    animation: type 0.75s linear infinite;
  }

  @keyframes type {
    from {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Resume = styled.button`
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  font-size: 1.15rem;

  background-color: #000;
  color: #fff;

  transition: all 0.25s;

  :hover {
    transform: translate(0, -5px);
    background-color: var(--primary);
  }
`;
