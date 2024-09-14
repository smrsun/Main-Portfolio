import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="#about">About Me</Link></li>
                <li><Link to="#portfolio">Portfolio</Link></li>
                <li><Link to="#contact">Contact</Link></li>
                <li><Link to="#resume">Resume</Link></li>
            </ul>
        </nav>
    );
};
export default nav;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/portfolio">Portfolio</Link>
//             <Link to="/contact">Contact</Link>
//         </nav>
//     );
// };

// export default Nav;