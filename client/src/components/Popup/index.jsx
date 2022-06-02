import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { IoIosClose } from 'react-icons/io';
import { useEffect } from 'react';

const Container = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999;

  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    ${({ theme }) =>
      theme.isDark
        ? css`
            color: #fff;
          `
        : css`
            color: #1e1e1e;
          `}
    z-index: 1;
  }
`;
function Popup({ hide, hideAfter, children, close }) {
  useEffect(() => {
    if (hideAfter) setTimeout(hide, hideAfter);
  }, []);
  return (
    <Container
      initial={{ opacity: 0, y: '0%', x: '-50%' }}
      animate={{ opacity: 1, y: '-50%', x: '-50%' }}
      exit={{ opacity: 0, y: '0%', x: '-50%' }}
    >
      {close && (
        <button className="close" onClick={hide} type="button">
          <IoIosClose size={24} />
        </button>
      )}
      <div>{children}</div>
    </Container>
  );
}

export default Popup;
