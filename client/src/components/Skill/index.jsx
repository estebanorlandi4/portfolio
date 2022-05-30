import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import FadeIn from '../Animations';
import Toast from '../Toast';

export const Card = styled.li`
  width: 100%;
  aspect-ratio: 1/1;

  transition: all 0.25s;

  :hover .toast {
    opacity: 1;
    transform: translate(-50%, -100%);
  }

  .card-icon {
    padding: 1.5rem;
    display: grid;
    height: 100%;
    place-items: center;
    border-radius: 5px;
  }

  ${({ bg }) =>
    bg &&
    css`
      .card-icon {
        background: linear-gradient(
            -45deg,
            transparent 30%,
            #fff3 50%,
            transparent 70%
          ),
          ${bg};
        background-size: 300%;
        color: #fff;
        box-shadow: 0 0.5rem 0.5rem -0.3rem ${bg}55;
        transform: translate(0, 0) scale(100%);
        transition: all 0.25s;
      }

      :hover .card-icon {
        animation: bg 2s linear infinite;
        transform: translate(0, -5px) scale(115%);
        box-shadow: 0 0.75rem 0.5rem -0.3rem ${bg}88;
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
        <Toast className="toast">{name}</Toast>
        <div className="card-icon">
          <Icon size={size} />
        </div>
      </Card>
    </FadeIn>
  );
}

export default Skill;
