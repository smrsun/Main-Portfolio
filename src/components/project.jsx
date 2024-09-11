import React from "react";

const project = ({ title, image, deployedLink, githubLink }) => {
    return (
        <div className="project">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <Link href={deployedLink} />
            <Link href={githubLink} />
        </div>
    );
};

export default project;