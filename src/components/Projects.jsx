import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import '../assets/styles/project.css';
import StackIcon from "tech-stack-icons";

const Projects = () => {
    const techStack = [
        { name: "html5", label: "HTML5" },
        { name: "css3", label: "CSS3" },
        { name: "js", label: "JavaScript" },
        { name: "reactjs", label: "React" },
        { name: "nodejs", label: "Node.js" },
        { name: "json", label: "JSON" },
        { name: "nestjs", label: "NestJS" },
        { name: "postgresql", label: "PostgreSQL" },
        { name: "postman", label: "Postman" },
        { name: "git", label: "Git" },
        { name: "github", label: "GitHub" },
        { name: "figma", label: "Figma" },
        { name: "python", label: "Python" },
        { name: "java", label: "Java" },
        { name: "spring", label: "Spring" },
        { name: "bootstrap4", label: "Bootstrap" },
    ];
    return (
        <div id="projects" className="project">
            <Timeline position="alternate">
                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2024- ongoing
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/IIT Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                Styloft (Academic)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                Institute of Information Technology
                            </Typography>
                            <ul>
                                <li>Developed a web platform for fashion designers and students to showcase, sell
                                    designs, connect with
                                    businesses, and access mentorship. Features include designing tool, design
                                    challenges, portfolios, secure payments,
                                    and scalable cloud hosting.
                                </li>
                                <li>Technologies: React, NestJS, Bootstrap CSS, Firebase, PostgresSQL, Canvas API,
                                    Git/Github, Postman
                                </li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/USJP Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                Wine Analytics Platform (Competition - PyData)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                University of Sri Jayewardenepura
                            </Typography>
                            <ul>
                                <li>Developed a dynamic web application Wine Analytics and Predictions in the world wine
                                    market .
                                </li>
                                <li>Technologies: Python, Jupyter Notebook, HTML/CSS</li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/IIT Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                Real-Time Event Ticketing System (Academic)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                Institute of Information Technology
                            </Typography>
                            <ul>
                                <li>Developed a dynamic web application using React for the frontend and Spring Boot for
                                    the backend,
                                    focusing on scalability, responsiveness, and robust RESTful APIs. And CLI part I
                                    create a simulation for
                                    that application using advance OOP concepts
                                </li>
                                <li>Technologies: Java (CLI Part), React, Spring Boot, PostgreSQL, Advance OOP
                                    concepts
                                </li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2024 - Ongoing
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/IEEE Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                E-Learning Platform (Competition - Code Sprint)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                IEEE Student Branch Chapter - IIT
                            </Typography>
                            <ul>
                                <li>Developed an E-Learning platform with OpenAI API, featuring a pointing
                                    system to reward engagement and an AI Personal Assistant for personalized support.
                                </li>
                                <li>Technologies: React, NestJS, PostgreSQL, Boostrap CSS, Postman, OpenAI API,
                                    Git/Github
                                </li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/IIT Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                Plane Ticket Management System (Academic)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                institute of Information Technology
                            </Typography>
                            <ul>
                                <li>User - Friendly plane ticket management system. Enable user to book a seat and can
                                    cancel it any time
                                    and a real-time seating map
                                </li>
                                <li>Technologies: Java, OOP concepts.</li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/IIT Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                Life on Land Website (Academic)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                institute of Information Technology
                            </Typography>
                            <ul>
                                <li>Created a interactive webpage for United Nation Sustainable Goal(Life on Land).</li>
                                <li>Technologies: HTML/CSS, JavaScript</li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem className="timeline-item">
                    <TimelineOppositeContent
                        sx={{m: 'auto 0'}}
                        align="right"
                        variant="body2"
                        color="white"
                    >
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                        <TimelineDot>
                            <img
                                src="src/assets/images/IIT Logo.png"
                                alt="Institute Logo"
                                className="timeline-logo"
                            />
                        </TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#ffffff', height: '5px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className="timeline-card">
                            <Typography variant="h6" component="span" fontWeight="bold">
                                University Student Progress Predictor (Academic)
                            </Typography>
                            <Typography variant="subtitle2" color="#aaa">
                                Institute of Information Technology
                            </Typography>
                            <ul>
                                <li>A Python-based tool to predict academic progression outcomes, validate student
                                    credit inputs, and generate visual histograms of results using the graphics.py
                                    module.
                                </li>
                                <li>Technologies: Python, graphics.py</li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <section className="tech-stack">
                <h2>Tech Stack</h2>
                <p>What I Have Been Using</p>
                <div className="tech-icons">
                    {techStack.map((tech) => (
                        <div className="tech-item" key={tech.name}>
                            <StackIcon name={tech.name}/>
                            <p>{tech.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
