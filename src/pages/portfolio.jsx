import React from 'react';
import Project from '../components/project';

function Portfolio() {
    const projects = [
      {
        title: 'Leafy Dreams',
        image: '/src/assets/images/HomePageLeafyDreams.png',
        deployedLink: 'https://leafy-dreams-zl5u.onrender.com',
        repoLink: 'https://github.com/thomassmith0526/Leafy-Dreams',
      },
      {
        title: 'Note Taker',
        image: '/src/assets/images/NoteTaker.png',
        deployedLink: 'https://notetaker-y9tn.onrender.com/',
        repoLink: 'https://github.com/smrsun/noteTaker',
      },
      {
        title: 'SVG Maker',
        image: '/src/assets/images/SVGMaker.png',
        repoLink: 'https://github.com/smrsun/svgMaker',
      }
      // Add more projects as needed
    ];
  
    return (
      <section id="portfolio">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </section>
    );
  };

const Portfolio = () => {
    return (
        <div>
            <h1>My Projects</h1>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default Portfolio;