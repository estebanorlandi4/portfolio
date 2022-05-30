import styled from 'styled-components';

const ToastContainer = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0.25rem 0.5rem;

  z-index: 100;
  cursor: default;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 3px;
  opacity: 0;

  background-color: #000;
  color: #fff;

  transition: all 0.25s;
`;

function Toast({ children, ...props }) {
  return <ToastContainer {...props}>{children}</ToastContainer>;
}

export default Toast;
