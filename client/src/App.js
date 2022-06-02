import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from './components/Styled';

import Home from './pages/Home';
import Test from './pages/Test';

import { GlobalStyles, theme } from './utils/styled';
import './utils/emailjs';

const preferedTheme =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

function App() {
  const [isDark, setIsDark] = useState(preferedTheme);
  const toggleTheme = () => setIsDark((old) => !old);

  const ids = {
    home: 'home',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    contact: 'contact',
  };

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <GlobalStyles />

      <Navbar ids={ids} changeTheme={toggleTheme} />

      <Container>
        <Routes>
          <Route exact path="/" element={<Home ids={ids} />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Container>

      <div id={ids.contact}>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
