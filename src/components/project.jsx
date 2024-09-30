import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
        <div className="project-1">
            <img src='./src/assets/images/' alt="Leafy Dreams Home Page" />
            <h3>{title}</h3>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed Page</a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
    );
};

