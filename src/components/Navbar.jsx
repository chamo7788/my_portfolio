import React, { useState, useEffect } from 'react';
import '../assets/styles/navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state
    const [isScrolled, setIsScrolled] = useState(false); // Scroll state
    const [activeSection, setActiveSection] = useState('about');

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Add background after scrolling 50px

            const sections = ['about', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 180;

            for (const id of sections) {
                const section = document.getElementById(id);
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <p className="logo">My Portfolio | Chamodya Ganegamage</p>
            {/* Toggle Button */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
                ☰
            </button>
            {/* Navigation Links */}
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
