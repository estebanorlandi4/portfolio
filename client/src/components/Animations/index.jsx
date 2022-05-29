import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  transform: translate(${({ from }) => from});
  opacity: 0;
`;

function FadeIn({ children, duration, delay, from, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref || !ref.current) return () => {};

    ref.current.style.transition = `all ${duration || '.25s'} ${delay || '0s'}`;
    ref.current.style.transform = `translate(${from || '0, 0'})`;
    ref.current.style.opacity = '0';

    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.opacity = '1';
    return () => {};
  }, [ref]);

  return (
    <Container ref={ref} from={from} {...props}>
      {children}
    </Container>
  );
}

export default FadeIn;
