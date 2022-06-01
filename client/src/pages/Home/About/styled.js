import styled from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;

  & > div {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
  }
`;

export const P1 = styled.p`
  color: ${({ theme }) => (theme.isDark ? theme.fg() : theme.fg())};
  line-height: 2rem;
  font-size: 1.25rem;
  font-weight: 500;

  @media screen and (${breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.5rem;
  }
`;

export const P2 = styled.p`
  color: ${({ theme }) => (theme.isDark ? theme.fg(0.5) : theme.fg(1))};
  line-height: 2.5ch;
  letter-spacing: 0.5px;
  font-size: 1rem;
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
