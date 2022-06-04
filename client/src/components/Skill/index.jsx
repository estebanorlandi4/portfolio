import Toast from '../Toast';

import { Card, IconContainer } from './styled';

const getRandom = () => {
  const r = Math.floor(Math.random() * (100 - 50) + 50);
  return Math.round(Math.random()) ? r * -1 : r;
};

function Skill({ exit, icon, name, color, size }) {
  const Icon = icon || 'img';

  return (
    <div>
      <Card
        initial={{ y: 0, x: 0, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        bg={color}
      >
        <Toast className="toast" direction="bottom">
          {name}
        </Toast>
        <IconContainer className="icon-container">
          <Icon size={size} />
        </IconContainer>
      </Card>
    </div>
  );
}

export default Skill;
