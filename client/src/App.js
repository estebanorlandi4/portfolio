import { Route, Routes } from 'react-router';

import Navbar from './components/Navbar';
import Accounts from './components/Accounts';
import Footer from './components/Footer';
import { Container } from './components/Styled';

import Home from './pages/Home';

import './App.css';
import Test from './pages/Test';

function App() {
  return (
    <div id="top">
      {/* Navigation */}
      <Navbar />
      <Accounts />

      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
