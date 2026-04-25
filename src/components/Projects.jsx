import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { textVariant } from './utils/motion';
import { ProjectDetails } from './projectDetails';
import '../assets/styles/project.css';

const ExperienceCard = ({ project }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={project.date}
            iconStyle={{ background: project.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={project.icon}
                        alt={project.company_name}
                        className='w-60 h-60 object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-24 font-bold'>{project.title}</h3>
                <p className='text-secondary text-16 font-semibold' style={{ margin: 0 }}>
                    {project.company_name}
                </p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {project.points.map((point, index) => (
                    <li key={`project-point-${index}`} className='text-white text-14 pl-1 tracking-wider'>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Projects = () => {
    return (
        <div id="projects" className="project">
            <motion.div variants={textVariant()}>
                <p className="text-center">What I have done so far</p>
                <h2 className="text-center-1">Projects</h2>
            </motion.div>
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {ProjectDetails.map((project, index) => (
                        <ExperienceCard key={`project-${index}`} project={project} />
                    ))}
                </VerticalTimeline>
            </div>
            <section className="tech-stack">
                <h2>Tech Stack</h2>
                <p>What I Have Been Using</p>
                <a href="https://skillicons.dev" target="_blank" rel="noreferrer" aria-label="My Skills">
                    <img
                        className="tech-stack-badge"
                        src="https://skillicons.dev/icons?i=html,css,js,ts,react,nextjs,nestjs,dotnet,cs,java,python,vite,threejs,nodejs,npm,postgres,supabase,firebase,prisma,aws,vercel,githubactions,git,github,postman,figma,mui,tailwind,vscode,kali,reddot"
                        alt="My Skills"
                    />
                </a>
            </section>

        </div>
    );
};

export default Projects;