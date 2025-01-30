import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chamodya from './components/Chamodya';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Chamodya />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

export default App;