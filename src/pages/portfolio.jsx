import React from 'react';
import Project from '../components/projectd';

const projects = [
    {
        title: 'project 1',
        image: 'path/to/image1.png',
        deployedLink: 'https://example.com/project1',
        githubLink: 'https://github.com/smrsun/project1'
    },
    {
        title: 'project 2',
        image: 'path/to/image1.png',
        deployedLink: 'https://example.com/project2',
        githubLink: 'https://github.com/smrsun/project2'
    },
    {
        title: 'project 3',
        image: 'path/to/image1.png',
        deployedLink: 'https://example.com/project3',
        githubLink: 'https://github.com/smrsun/project3'
    },
    // Add more projects here
];

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