import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [activeSection, setActiveSection] = useState('about');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <nav>
            <h1>Crystal Lisi</h1>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className={activeSection === 'about' ? 'active' : ''}
                        onClick={() => handleNavClick('about')}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/portfolio" 
                        className={activeSection === 'portfolio' ? 'active' : ''}
                        onClick={() => handleNavClick('portfolio')}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact" 
                        className={activeSection === 'contact' ? 'active' : ''}
                        onClick={() => handleNavClick('contact')}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/resume" 
                        className={activeSection === 'resume' ? 'active' : ''}
                        onClick={() => handleNavClick('resume')}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;