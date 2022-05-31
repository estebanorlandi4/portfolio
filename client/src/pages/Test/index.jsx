import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const grid = css`
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  ${grid}
  padding: 20vh 0;
`;

const Box = styled.div`
  ${grid}
  width: 10rem;
  height: 10rem;
  box-shadow: 0 0.25rem 0.5rem #0003;
  border-radius: 15px;
  background: #fff;
`;

function Test() {
  return (
    <Container>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        style={{ zIndex: 9999999 }}
      >
        <Box>Test</Box>
      </motion.div>
    </Container>
  );
}

export default Test;
