/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import 'animate.css';
import '../assets/styles/chamodya.css';
import { ReactTyped } from "react-typed";

import myImage from '../assets/images/profile.png';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="backdrop"></div>

      <div className="intro">
        <p className="hero-pill">Available for internships and freelance work</p>
        <h1>Hi, I&apos;m <span className="purple-text">Chamodya</span></h1>
        <ReactTyped
          className="typed-text"
          strings={["AI/ML enthusiast,", "Full-stack Developer,", "Software Engineering Undergraduate,"]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
        <p className="hero-description">
          I design and build modern digital products with clean code, scalable architecture,
          and delightful user experiences.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Let&apos;s Connect</a>
        </div>
      </div>
      
      <div className="images">
        <img
          src={myImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span></span>
      </a>
    </div>
  );
};

export default Home;