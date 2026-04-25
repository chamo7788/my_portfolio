import IIT from "../assets/images/IIT.png";
import USJP from "../assets/images/USJP.png";
import IEEE from "../assets/images/IEEE.png";
import NexoraLabs from "../assets/images/Nexoralab.jpg";
import TutorOS from "../assets/images/TutorOS.png";

const ProjectDetails = [
    {
        title: "TutorOS (Institute and Student Management Application)",
        company_name: "Personal / Ongoing",
        icon: TutorOS,
        iconBg: "#FFFFFF",
        date: "2026 - Present",
        points: [
            "Developed a monorepo-based CRM for the Sri Lankan tuition market to automate student enrollment, fee management, and class scheduling.",
            "Streamlined administrative operations for educators using a scalable, unified architecture.",
            "Technologies: Next.js, NestJS, PostgreSQL, Turborepo (Monorepo), Tailwind CSS, Supabase, Git/GitHub, Swagger.",
        ],
    },
    {
        title: "TopDoctors (E-Channeling Platform)",
        company_name: "NexoraLabs - Intern Software Engineer",
        icon: NexoraLabs,
        iconBg: "#FFFFFF",
        date: "May 2025 - March 2026",
        points: [
            "Developed a healthcare platform for the Sri Lankan market featuring doctor profile management and a secure e-channeling system.",
            "Implemented appointment booking workflows and streamlined patient-doctor interactions through a responsive web interface.",
            "Technologies: Next.js, PostgreSQL, Swagger, Tailwind CSS, Git/GitHub, CI/CD (Coolify), AWS S3, Capacitor.",
        ],
    },
    {
        title: "Resunova (HR Automation and Job Portal)",
        company_name: "NexoraLabs - Intern Software Engineer",
        icon: NexoraLabs,
        iconBg: "#FFFFFF",
        date: "May 2025 - March 2026",
        points: [
            "Engineered a job publishing platform and company HR automation system to facilitate talent acquisition for recruiters and job seekers.",
            "Built features for automated job matching and streamlined application tracking to enhance recruitment efficiency.",
            "Technologies: Next.js, PostgreSQL, Swagger, Tailwind CSS, Git/GitHub, CI/CD (Coolify), Gemini API.",
        ],
    },
    {
        title: "Styloft (Academic)",
        company_name: "Institute of Information Technology",
        icon: IIT,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Developed a web platform for fashion designers and students to showcase, sell designs, connect with businesses, and access mentorship. Features include designing tool, design challenges, portfolios, secure payments, and scalable cloud hosting.",
            "Technologies: React, NestJS, Bootstrap CSS, Firebase, PostgresSQL, Canvas API, Git/Github, Postman.",
        ],
    },
    {
        title: "Wine Analytics Platform (Competition - PyData)",
        company_name: "University of Sri Jayewardenepura",
        icon: USJP,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Developed a dynamic web application Wine Analytics and Predictions in the world wine market .",
            "Technologies: Python, Jupyter Notebook, HTML/CSS.",
        ],
    },
    {
        title: "Real-Time Event Ticketing System (Academic)",
        company_name: "Institute of Information Technology",
        icon: IIT,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Developed a dynamic web application using React for the frontend and Spring Boot for the backend, focusing on scalability, responsiveness, and robust RESTful APIs. And CLI part I create a simulation for that application using advance OOP concepts.",
            "Technologies: Java (CLI Part), React, Spring Boot, PostgreSQL, Advance OOP concepts.",
        ],
    },
    {
        title: "E-Learning Platform (Competition - Code Sprint)",
        company_name: "IEEE Student Branch Chapter - IIT",
        icon: IEEE,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "Developed an E-Learning platform with OpenAI API, featuring a pointing system to reward engagement and an AI Personal Assistant for personalized support.",
            "Technologies: React, NestJS, PostgreSQL, Boostrap CSS, Postman, OpenAI API, Git/Github.",
        ],
    },
    {
        title: "Plane Ticket Management System (Academic)",
        company_name: "Institute of Information Technology",
        icon: IIT,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2024",
        points: [
            "User - Friendly plane ticket management system. Enable user to book a seat and can cancel it any time and a real-time seating map.",
            "Technologies: Java, OOP concepts.",
        ],
    },
    {
        title: "Life on Land Website (Academic)",
        company_name: "Institute of Information Technology",
        icon: IIT,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2023",
        points: [
            "Created a interactive webpage for United Nation Sustainable Goal(Life on Land).",
            "Technologies: HTML/CSS, JavaScript.",
        ],
    },
    {
        title: "University Student Progress Predictor (Academic)",
        company_name: "Institute of Information Technology",
        icon: IIT,  // Reusing existing icon
        iconBg: "#FFFFFF",  // White background
        date: "2023",
        points: [
            "A Python-based tool to predict academic progression outcomes, validate student credit inputs, and generate visual histograms of results using the graphics.py module.",
            "Technologies: Python, graphics.py.",
        ],
    },
]
export const techStack = [
    { name: "FaHtml5", label: "HTML5" },
    { name: "FaCss3Alt", label: "CSS3" },
    { name: "SiJavascript", label: "JavaScript" },
    { name: "FaReact", label: "React" },
    { name: "FaNodeJs", label: "Node.js" },
    { name: "SiJson", label: "JSON" },
    { name: "SiNestjs", label: "NestJS" },
    { name: "SiPostgresql", label: "PostgreSQL" },
    { name: "SiPostman", label: "Postman" },
    { name: "FaGitAlt", label: "Git" },
    { name: "FaGithub", label: "GitHub" },
    { name: "FaFigma", label: "Figma" },
    { name: "FaPython", label: "Python" },
    { name: "FaJava", label: "Java" },
    { name: "SiSpring", label: "Spring" },
    { name: "FaBootstrap", label: "Bootstrap" },
  ];
  
export {ProjectDetails};