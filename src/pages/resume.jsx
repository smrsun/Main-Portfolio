import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <h1>Resume</h1>
            <div className="resume-content">
                <div className="resume-download">
                    <a href="/path-to-your-resume.pdf" download className="download-button">
                        Download Resume
                    </a>
                </div>
                <div className="skills">
                    <h2>Proficiencies</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>RESTful APIs</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;