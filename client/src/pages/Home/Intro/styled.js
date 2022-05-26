import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: ${window.innerHeight}px;

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
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Name = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  letter-spacing: 2px;
`;

export const STag = styled.span`
  position: relative;
  color: #764abc;
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
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
  background-color: #000;
  border: none;

  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  color: #fff;
`;
