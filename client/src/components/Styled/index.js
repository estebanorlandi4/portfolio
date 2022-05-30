import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

export const Container = styled.div`
  width: 60vw;
  min-width: 30rem;
  max-width: 55rem;
  margin: 0 auto;

  @media screen and (${breakpoints.mobile}) {
    width: 100%;
    min-width: 20rem;
    margin: 0 auto;
    padding: 0 5vw;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 2rem;
`;

export const Section = styled.section`
  padding: 0 0;
  margin: 20vh auto;
`;
