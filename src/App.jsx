
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import AboutMe from './pages/aboutMe'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'

import { useState } from 'react'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
