import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import '../assets/styles/about.css'; // Make sure to create a CSS file for custom styling.
import { fadeIn, textVariant } from "../components/utils/motion";
import AI from '../assets/images/AIM.png';
import Development from '../assets/images/development.png';
import Content from '../assets/images/content.png';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='service-card'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='service-card-inner'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='service-card-content'
      >
        <img
          src={icon}
          alt={title}
          className='service-card-icon'
        />
        <h3 className='service-card-title'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const services = [
    { title: "AI/ML Enthusiast", icon: AI },
    { title: "Frontend Developer", icon: Development },
    { title: "Backend Developer", icon: Development },
    { title: "Content Creator", icon: Content },
  ];

  return (
    <div id="about" className='about'>
      <motion.div variants={textVariant()}>
        <h2 className="section-header">Introduction</h2>
        <h1 className="about-title">About Me.</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='about-description'
      >
        A passionate and adaptable individual with strong leadership skills and a keen interest in new technologies like machine learning, AI, and data science. I thrive in team settings, actively engage in volunteering and sustainable projects, and am dedicated to making a positive impact while continuously expanding my knowledge.
      </motion.p>

      <div className='service-cards-container'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;