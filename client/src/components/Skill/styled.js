import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  position: relative;
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

        transform: translate(0, 0) scale(100%);
        transition: all 0.25s;
      }

      :hover .icon-container {
        animation: bg-2 1s linear infinite;
        transform: translate(0, -5px) scale(115%);
      }

      @keyframes bg-2 {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 100% 100%;
        }
      }

      ${({ theme }) =>
        !theme.isDark &&
        css`
          .icon-container {
            box-shadow: 0 0.5rem 0.5rem -0.3rem ${bg}55;
          }
          :hover .icon-container {
            box-shadow: 0 0.75rem 0.5rem -0.3rem ${bg}88;
          }
        `}
    `}
`;

export const IconContainer = styled.div`
  display: grid;
  width: 7rem;
  height: 7rem;
  place-items: center;
  border-radius: 5px;
`;
