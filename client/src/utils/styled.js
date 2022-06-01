import { createGlobalStyle } from 'styled-components';

const primary = '#764abc';
const accent = '#0ff';

export const theme = {
  light: {
    isDark: false,
    bg: '#fff',
    fg: (opacity) => `rgba(0, 0, 0, ${opacity})`,
    primary,
    accent,
  },
  dark: {
    isDark: true,
    bg: '#1e2025',
    fg: (opacity) => `rgba(255, 255, 255, ${opacity})`,
    primary,
    accent,
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme: th }) => th.bg};
    color: ${({ theme: th }) => th.fg(1)};
    --text: ${({ theme: th }) => (th.isDark ? '#fff' : '#1e1e1e')}
  }
`;
