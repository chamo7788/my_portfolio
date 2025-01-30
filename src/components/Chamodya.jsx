/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import 'animate.css';
import '../assets/styles/chamodya.css';
import { ReactTyped } from "react-typed";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/models/scene.gltf");

  // Use a ref to keep track of the mesh for rotation
  const computerRef = useRef();

  // Use the `useFrame` hook to rotate the object on each frame
  useFrame(() => {
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.01; // Rotate on Y-axis continuously
    }
  });

  return (
    <mesh ref={computerRef}>
      <hemisphereLight intensity={1} groundColor='blue' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={30} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.5}
        position={isMobile ? [0, -3.2, -1] : [0, -3.2, -0.8]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

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
          src="src/assets/images/profile-image.png"
          alt="Profile"
          className="profile-image"
        />
      </div>

      
    </div>
  );
};

export default Home;