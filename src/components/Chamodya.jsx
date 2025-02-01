/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import 'animate.css';
import '../assets/styles/chamodya.css';
import { ReactTyped } from "react-typed";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import myImage from '../assets/images/profile.png';

import ComputersCanvas from './canvas/Computers';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="backdrop"></div>

      <div className="intro">
        <h1>Hi, I'm <span className="purple-text">Chamodya</span></h1>
        <ReactTyped
          className="typed-text"
          strings={["AI/ML enthusiast,", "Full-stack Developer,", "Software Engineering Undergraduate,"]}
          typeSpeed={60}
          backSpeed={80}
          loop
        />
      </div>
      
      <div className="images">
        <img
          src={myImage}
          alt="Profile"
          className="profile-image"
        />
      </div>

      
    </div>
  );
};

export default Home;