import { useEffect, useState } from 'react';

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
  const tags = ['Web Developer', 'Full Stack Developer'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (tags[index + 1]) setIndex(index + 1);
      else setIndex(0);
    }, 4 * 1000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container>
      <div className="info">
        <Header>
          <Name>esteban Orlandi</Name>

          <p>
            &lt;{tags.map((label, i) => i === index && <Tag label={label} />)}
            &gt;
          </p>
        </Header>

        <Resume type="button">Resume</Resume>
      </div>
    </Container>
  );
}

export default Intro;
