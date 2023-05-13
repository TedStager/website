import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';
import Portfolio from './pages/portfolio/portfolio.js'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/about" exact element={<About />} />     
        <Route exact path="/" exact element={<Home /> } />
        <Route exact path="/portfolio" exact element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;