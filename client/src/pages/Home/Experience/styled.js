import styled, { css } from 'styled-components';
import breakpoints from '../../../utils/breakpoints';

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

  @media screen and (${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;
export const Header = styled.div`
  margin: 0 0 1rem 0;

  @media screen and (${breakpoints.mobile}) {
    margin: 0 0 0.5rem 0;
  }
`;
export const Name = styled.h3`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .dates {
    width: max-content;
    color: #aaa;
    font-size: 0.8rem;
    display: flex;
    gap: 0.5rem;

    time {
      width: max-content;
    }
  }
`;

const descriptionDark = ({ theme }) =>
  theme.isDark
    ? css`
        color: #888;
      `
    : css`
        color: #555;
      `;

export const Description = styled.p`
  line-height: 2rem;
  font-size: 1.1rem;

  @media screen and (${breakpoints.mobile}) {
    line-height: 1.37rem;
    font-size: 0.85rem;
  }

  ${descriptionDark}
`;
export const Place = styled.span`
  font-weight: 400;
  color: #aaa;

  @media screen and (${breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;
