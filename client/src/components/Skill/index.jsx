import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import FadeIn from '../Animations';

export const Card = styled.li`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  transition: all 0.25s;

  .card-icon {
    padding: 1.5rem;
    display: grid;
    height: 100%;
    place-items: center;
  }

  ${({ bg }) =>
    bg &&
    css`
      .card-icon {
        background: ${bg};
        color: #fff;
      }
    `}

  h3 {
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;
    margin: 0.25rem 0 0 0;
    color: #000;

    transition: all 0.25s;
  }
`;

function Skill({ icon, name, color, size }) {
  const [animate, setAnimate] = useState(null);
  const Icon = icon || 'img';

  const auxX = Math.floor(Math.random() * 200);
  const rx = Math.round(Math.random()) ? auxX : auxX * -1;
  const ry = Math.floor(Math.random() * (200 - 100) + 100);

  useEffect(() => {
    setAnimate(`${rx}px, ${ry}px`);
  }, []);

  if (!animate) return null;
  return (
    <FadeIn duration=".5s" from={animate}>
      <Card bg={color}>
        <div className="card-icon">
          <Icon size={size} />
        </div>
        <h3>{name}</h3>
      </Card>
    </FadeIn>
  );
}

export default Skill;
