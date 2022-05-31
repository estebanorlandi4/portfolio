import { useEffect, useState } from 'react';

import Toast from '../Toast';

import { Card, IconContainer } from './styled';

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
    <Card bg={color}>
      <Toast className="toast" direction="bottom">
        {name}
      </Toast>
      <IconContainer className="icon-container">
        <Icon size={size} />
      </IconContainer>
    </Card>
  );
}

export default Skill;
