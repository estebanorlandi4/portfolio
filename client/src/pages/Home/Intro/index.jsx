import { useEffect, useState } from 'react';

import CV from '../../../assets/Esteban Orlandi - CV - Full Stack.pdf';
import FadeIn from '../../../components/Animations';
import { Container, Header, Name, Resume, STag } from './styled';

export function Tag({ label }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [label]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < label.length) setIndex(index + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return <STag>{label.split('').slice(0, index).join('')}</STag>;
}

function Intro() {
  const tags = [
    'Web Developer',
    'Full Stack Developer',
    'Front End',
    'Back End',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tags[index + 1]) setIndex(index + 1);
      else setIndex(0);
    }, tags[index].length * 100 + 1 * 1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container style={{ height: `${window.innerHeight}px` }}>
      <div className="info">
        <Header>
          <FadeIn duration="1s" from="0, -10rem">
            <Name>esteban Orlandi</Name>
          </FadeIn>

          <FadeIn duration="1s" delay="1s" from="0, -10rem">
            <p>
              &lt;{tags.map((label, i) => i === index && <Tag label={label} />)}
              &gt;
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
