import styled from 'styled-components';

export const Article = styled.article`
  position: relative;
  margin-top: 5vh;
  padding: 0.5rem 0 0.5rem 1.5rem;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0.25rem;
    background-color: var(--primary);
  }
`;
export const Header = styled.div`
  margin: 0 0 1rem 0;
`;
export const Name = styled.h3``;
export const Description = styled.p`
  line-height: 2rem;
  font-size: 1.1rem;
  color: #555;
`;
export const Place = styled.span`
  font-weight: 400;
  color: #aaa;
`;
