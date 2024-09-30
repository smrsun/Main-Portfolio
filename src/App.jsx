import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav'
import Footer from './components/footer'
import AboutMe from './pages/aboutMe'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
