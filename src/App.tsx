import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ElementHome } from './screens/ElementHome/ElementHome';
import { AboutUs } from './screens/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementHome />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;