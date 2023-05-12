import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" exact element={<Home /> } />
        <Route exact path="/about" exact element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;