import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [activeSection, setActiveSection] = useState('about-me');
  
    const handleNavClick = (section) => {
      setActiveSection(section);
    };
  
    return (
      <header>
        <h1>Crystal Lisi</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className={activeSection === 'about-me' ? 'active' : ''}
                onClick={() => handleNavClick('about-me')}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className={activeSection === 'portfolio' ? 'active' : ''}
                onClick={() => handleNavClick('portfolio')}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className={activeSection === 'resume' ? 'active' : ''}
                onClick={() => handleNavClick('resume')}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  