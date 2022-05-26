import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;

  & > div {
    display: flex;
    flex-flow: column;
    gap: 0.75rem;
  }
  p {
  }
`;

export const P1 = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
`;

export const P2 = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 300;
`;

export const Color = styled.span`
  color: var(--primary);
  font-weight: bold;
`;
