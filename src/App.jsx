import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Chamodya, About, Projects, Contact} from './components';

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