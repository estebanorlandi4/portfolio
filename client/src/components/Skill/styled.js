import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  transition: all 0.25s;

  :hover .toast {
    opacity: 1;
    transform: translate(-50%, -100%);
  }

  ${({ bg }) =>
    bg &&
    css`
      .icon-container {
        background: linear-gradient(
            -45deg,
            transparent 30%,
            #fff3 50%,
            transparent 70%
          ),
          ${bg};
        background-size: 500%;
        color: #fff;
        box-shadow: 0 0.5rem 0.5rem -0.3rem ${bg}55;
        transform: translate(0, 0) scale(100%);
        transition: all 0.25s;
      }

      :hover .icon-container {
        animation: bg-2 1s linear infinite;
        transform: translate(0, -5px) scale(115%);
        box-shadow: 0 0.75rem 0.5rem -0.3rem ${bg}88;
      }
      @keyframes bg-2 {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 100% 100%;
        }
      }
    `}
`;
export const IconContainer = styled.div`
  padding: 1.5rem;
  display: grid;
  height: 100%;
  place-items: center;
  border-radius: 5px;
`;
