import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ElementHome } from './screens/ElementHome/ElementHome';
import { AboutUs } from './screens/AboutUs/AboutUs';
import { Features } from './screens/Features/Features';
import { Blogs } from './screens/Blogs/Blogs';
import { Pricing } from './screens/Pricing/Pricing';
import { ContactUs } from './screens/ContactUs/ContactUs';
import { GetStarted } from './screens/GetStarted/GetStarted';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;