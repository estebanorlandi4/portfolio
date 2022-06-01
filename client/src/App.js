import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import Accounts from './components/Accounts';
import Footer from './components/Footer';
import { Container } from './components/Styled';

import Home from './pages/Home';
import Test from './pages/Test';

import { GlobalStyles, theme } from './utils/styled';

const preferedTheme =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

function App() {
  const [isDark, setIsDark] = useState(preferedTheme);

  const toggleTheme = () => setIsDark((old) => !old);

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <GlobalStyles />

      <div id="top">
        <Navbar changeTheme={toggleTheme} />
        <Accounts />

        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
