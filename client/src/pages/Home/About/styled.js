import styled from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;

  & > div {
    display: flex;
    flex-flow: column;
    gap: 0.75rem;
  }
`;

export const P1 = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;

  @media screen and (${breakpoints.mobile}) {
    font-size: 1.15rem;
    line-height: 1.75rem;
  }
`;

export const P2 = styled.p`
  color: #555;
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 300;

  @media screen and (${breakpoints.mobile}) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const Color = styled.span`
  color: var(--primary);
  font-weight: bold;
`;
