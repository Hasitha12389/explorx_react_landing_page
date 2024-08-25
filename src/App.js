// App.js
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ContactDetail from './components/ContactDetail';
import GlobalStyles from './styles/GlobalStyles';
import Footer from './components/Footer';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <GlobalStyles theme={theme} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/contact/:detailId" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;


/*
Commands

npm install @fortawesome/fontawesome-free


*/