import React from 'react';

function Resume() {
    return (
        <section id="resume">
            <h1>Resume</h1>
            <div className="resume-content">
                <div className="resume-actions">
                    {/* <a href="/assets/crystal_lisi_resume.pdf" download className="resume-button download-button">
                        Download Resume
                    </a> */}
                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:us:25f78cc7-d37d-4183-9127-ea2885a63dfe" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="resume-button view-button">
                        View Resume
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