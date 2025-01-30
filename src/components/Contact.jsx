import React, { useEffect } from "react";
import "../assets/styles/contact.css";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

// Animated Background Component
function AnimatedBackground({ interval = 100 }) {
    let prevTime;
    const ref = React.useRef(null);

    function getRandomSpawnLocation() {
        const spawnLocationX = Math.round(
            Math.random() * ref.current.parentElement.scrollWidth - 80
        );
        const spawnLocationY = Math.round(
            Math.random() * ref.current.parentElement.scrollHeight - 80
        );
        return [spawnLocationX + "px", spawnLocationY + "px"];
    }

    function animate(timestamp) {
        if (prevTime === undefined) {
            prevTime = timestamp;
        }
        if (timestamp - prevTime > interval) {
            const particle = document.createElement("div");
            particle.classList.add("sparkle");
            particle.onanimationend = () => particle.remove();
            [
                particle.style.left,
                particle.style.top
            ] = getRandomSpawnLocation();
            ref.current.append(particle);
            prevTime = timestamp;
        }
        window.requestAnimationFrame(animate);
    }

    useEffect(() => {
        window.requestAnimationFrame(animate);
    }, []);

    return <div ref={ref} className="background"></div>;
}

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
                    href="/path/to/your-cv.pdf"
                    className="download-cv-button"
                    download
                >
                    Download My CV
                </a>
            </div>
        </div>
    );
}
