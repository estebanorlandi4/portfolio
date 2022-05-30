import { useEffect, useState } from 'react';

import CV from '../../../assets/Esteban Orlandi - CV - Full Stack.pdf';
import FadeIn from '../../../components/Animations';
import { useArrayInterval, useTagAnimation } from '../../../hooks';
import { Container, Header, Name, Resume, STag } from './styled';

const tags = ['Web Developer', 'Full Stack Developer', 'Front End', 'Back End'];
const speed = 100;

function Intro() {
  const { current } = useArrayInterval({
    tags,
    speed: (tag) => tag.length * speed + 1 * 1000,
  });
  const label = useTagAnimation({ label: current, speed });

  return (
    <Container style={{ height: `100vh` }}>
      <div className="info">
        <Header>
          <FadeIn duration="1s" from="0, -10rem">
            <Name>esteban Orlandi</Name>
          </FadeIn>

          <FadeIn duration="1s" delay="1s" from="0, -10rem">
            <p>
              &lt; <STag>{label}</STag> /&gt;
            </p>
          </FadeIn>
        </Header>

        <FadeIn duration="1s" delay="2s" from="0, 10rem">
          <Resume as="a" href={CV} target="_blank" rel="noreferrer">
            Resume
          </Resume>
        </FadeIn>
      </div>
    </Container>
  );
}

export default Intro;
