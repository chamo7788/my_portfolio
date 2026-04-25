import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../assets/styles/contact.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

// Animated Background Component
function AnimatedBackground({ interval = 100 }) {
    const prevTimeRef = React.useRef();
    const frameRef = React.useRef();
    const ref = React.useRef(null);

    function getRandomSpawnLocation() {
        const parent = ref.current?.parentElement;
        if (!parent) {
            return null;
        }

        const spawnLocationX = Math.round(
            Math.random() * parent.scrollWidth - 80
        );
        const spawnLocationY = Math.round(
            Math.random() * parent.scrollHeight - 80
        );
        return [spawnLocationX + "px", spawnLocationY + "px"];
    }

    function animate(timestamp) {
        if (prevTimeRef.current === undefined) {
            prevTimeRef.current = timestamp;
        }
        if (timestamp - prevTimeRef.current > interval && ref.current) {
            const particle = document.createElement("div");
            particle.classList.add("sparkle");
            particle.onanimationend = () => particle.remove();
            const location = getRandomSpawnLocation();

            if (location) {
                [particle.style.left, particle.style.top] = location;
                ref.current.append(particle);
                prevTimeRef.current = timestamp;
            }
        }
        frameRef.current = window.requestAnimationFrame(animate);
    }

    useEffect(() => {
        frameRef.current = window.requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                window.cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return <div ref={ref} className="background"></div>;
}

AnimatedBackground.propTypes = {
    interval: PropTypes.number,
};

// Contact Component
export default function Contact() {
    const socialLinks = [
        { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/chamodya-ganegamage" },
        { name: "GitHub", icon: <FaGithub />, url: "https://github.com/chamo7788" },
        { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/+94765395117" },
        { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/chamodya_gane/profilecard/?igsh=MXhzazhsb3VyNjJzMg==" },
    ];

    return (
        <div id="contact" className="background-video-container">
            {/* Animated Background */}
            <AnimatedBackground />

            {/* Social Links Section */}
            <div className="social-links-container">
                <p className="sub-heading">Connect with Me</p>
                <h2 className="heading">Social Links</h2>
                <div className="social-icons">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label={link.name}
                        >
                            {link.icon}
                            <span className="social-name">{link.name}</span>
                        </a>
                    ))}
                </div>
                <a
                    href="https://drive.google.com/file/d/1Q020T49r3xbl_M42xJzF_LMpc8o2NJTH/view?usp=drive_link"
                    className="download-cv-button"
                    download
                >
                    Download My CV
                </a>
            </div>
        </div>
    );
}
