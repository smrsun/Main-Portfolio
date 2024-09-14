import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;