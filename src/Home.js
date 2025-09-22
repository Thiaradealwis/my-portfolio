import React, {useEffect, useState} from "react";
import './Home.css';
import golImage from "./images/gol3.png";
import sepImage from "./images/sep3.png";
import fashion from "./images/fashion.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import cv from "./images/cv.png";
import education from "./images/graduation-cap.png";
import quantum from "./images/qiskit3.png";

const sections = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id : "articles", label: "Articles" },
];

const cardData = [
    {
        title: "Sustainable Meal Marketplace",
        description: "A full stack web application centred around user experience and creating a more sustainable way to order and deliver food. `This is a project developed for a real-life client as part of a university module, where I also acted as as project manager and client liason using agile methodologies. ",
        tags: ["Node.js", "Web Design", "JavaScript", "AWS", "MySQL", "React"],
        image: sepImage
    },
    {
        title: "Game of Life",
        description: "Designed and implemented distributed and parallelised versions of Conway’s Game of Life in Go, leveraging goroutines and concurrency patterns for scalable performance. Conducted benchmarking to evaluate speedup and resource usage across configurations and wrote a detailed report analysing design choices, performance results, and optimisation strategies.",
        tags: ["Go", "Benchmarking", "Report writing", "Parallel computing", "Distributed computing"],
        image: golImage
    },
    {
        title: "ML Fashion Recommendation system",
        description: " A fashion recommendation system that takes a user’s pinterest moodboard and provides personalised\n" +
            "recommendations of ebay listings based on the user’s style using a trained neural network and image\n" +
            "recognition",
        tags: ["Transfer learning on a neural network", "web scraping", "matplotlib", "keras", "tensorflow", "numpy"],
        image: fashion
    },
    {
        title: "Grover's Algorithm Implementation",
        description: " Developed and implemented a basic Grover’s search algorithm using Qiskit to demonstrate quantum speed-up for unstructured search problems. Implemented quantum circuits leveraging superposition, oracle construction, and amplitude amplification to identify the index of a target number within a list, and validated results through simulation on IBM Quantum hardware.",
        tags: ["Quantum Computing", "Grover’s Algorithm", "Qiskit", "Quantum Circuits"],
        image: quantum
    }

];

const experienceData = [
    {
        title: "Softwire",
        sub: "Software Engineering Intern,    Jun - Aug '25",
        description: "Developed a Carbon Insights Dashboard for our client Elexon as part of an Agile team, working full-stack with TypeScript and C#. Engaged with clients to refine requirements, conducted user research to ensure usability and deliver a product aligned with business needs.",
    },
    {
        title: "Teaching Assistant",
        sub: "University of Bristol,    Sep '25 ->",
        description: "Providing academic support for Software Engineering Project and Programming Languages & Computation courses, delivering clear explanations of complex topics, mentoring student teams, and aiding hands-on labs and discussions to encourage student learning. \n - Software Engineering Project \n - Programming Languages and Computation",
    },
    {
        title: "Black Opal Quantum Certification",
        sub: "Black Opal Quantum Professional Course,    Jul '23",
        description: "An interactive course introducing quantum computing principles, including qubits, superposition, entanglement, and quantum algorithms. Gained a practical understanding of quantum logic gates, noise/error effects, and the fundamentals of building and running quantum circuits.",
    }
]

const articleData = [
    {
        title: "Whose morals matter: Programming the Ethical Compass",
        sub: "Epigram - The University of Bristol's Independent Student Newspaper",
        description: "An article exploring how AI systems inherit the moral values and biases of their creators, examining global differences in ethics, risks of cultural dominance in technology, and debates over who should be accountable for AI decisions.",
        link: "https://epigram.org.uk/whose-morals-matter-programming-the-ethical-compass/"
    },
    {
        title: "Is AI a threat to Women? The danger of programs that do it for you",
        sub: "HerCampus - global media company and online magazine for women in university",
        description: "An article discussing how AI systems, built on biased data and male-dominated development, can reinforce gender stereotypes, disadvantage women in hiring and healthcare, and enable abuses like deepfakes—highlighting the need for fair, accountable AI.",
        link: "https://www.hercampus.com/school/bristol/is-ai-a-threat-to-women-the-dangers-of-programs-that-do-it-for-you/"
    },
    {
        title: "The AI stuck in Mary’s Room — Investigating the limits of knowledge and perception",
        sub: "Medium Illumination publication",
        description: "An article drawing on the Mary’s Room thought experiment to question whether AI can ever truly “experience” things—such as seeing a colour or feeling an emotion—as humans do, or merely process them conceptually. It explores what this means for AI art, creativity, and whether human emotion or perception can ever be fully replicated by algorithms.",
        link: "https://medium.com/illumination/the-ai-stuck-in-marys-room-f7b4c26a4f82"
    },
    {
        title: "Ethics 2.0 — How Technology is Redefining our Sense of Right and Wrong",
        sub: "Personal Medium publication",
        description: "An article analyzing how digital technology reshapes ethics, examining how social media fosters echo chambers, misinformation, and radicalisation while conversaly also enabling positive social movements like #MeToo—highlighting the urgent need for updated moral and regulatory frameworks.",
        link: "https://medium.com/@t.dealwis/ethics-2-0-how-technology-is-redefining-our-sense-of-right-and-wrong-6a89d2a4393c"
    },


]

export default function Home() {
    const [selected, setSelected] = useState(cardData[0]);
    const [open, setOpen] = useState(false);

    const handleNavClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <div className="Background">
            <div className="menu-container">
                <button
                    className={`hamburger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    <span/>
                    <span/>
                    <span/>
                </button>

                <nav className={`menu ${open ? "show" : ""}`}>
                    <button
                        className="close-btn"
                        onClick={() => setOpen(false)}
                        aria-label="Close navigation"
                    >
                        ✕
                    </button>
                    {sections.map((sec) => (
                        <button
                            key={sec.id}
                            className="menu-item"
                            onClick={() => handleNavClick(sec.id)}
                        >
                            {sec.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div id="home" className="Header">
                <span className="Title">Thiara de Alwis</span>
                <div className="Subtitle">
                    <img src={cv} alt={"cv"} className={"icon"}/>
                    <img src={linkedin} alt={"linkedin"} className={"icon"}/>
                    <img src={github} alt={"github"} className={"icon"}/>
                </div>
            </div>
            <div id="education" className="Education">
                <div className="EducationWrapper">
                    <img src={education} alt={"Education"} className={"gradIcon"}/>
                    <div className="education-content">
                        <span className="education-title">Bsc Computer Science - University of Bristol</span>
                        <span className="education-grade">Working grade: 1st Class</span>
                        <br/>
                        <span className="education-description">Studying core areas of computing while building strong programming, problem-solving, and software engineering skills. Key modules include:</span>
                        <li>AI</li>
                        <li>Machine Learning</li>
                        <li>Human Computer Interaction</li>
                    </div>
                </div>
            </div>
            <div id="experience" className="Experience">
                <div className="experience-header">
                    <span>Experience</span>
                </div>
                <div className="experience-content">
                    {experienceData.map((item, idx) => (
                        <div className="experience-item" key={idx}>
                            <span className="experience-title">{item.title}</span>
                            <span className="experience-subtitle">{item.sub}</span>
                            <span className="experience-description">{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div id="projects" className="Project">
                <div className="projects-header">
                    <span>Projects</span>
                </div>
                <div className="page">
                    <div className="big-card">
                        <div className="big-card-inner">
                            <img src={selected.image} alt={selected.title} className="big-image-left"/>
                            <div className="big-content">
                                <div className="big-content-inner">
                                    <span className="big-title">{selected.title}</span>
                                    <p className="big-description">{selected.description}</p>
                                </div>
                                <div className="tags">
                                    {selected.tags.map((tag, idx) => (
                                        <span className="tag" key={idx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="thumb-strip">
                        {cardData.map((item, idx) => (
                            <div
                                key={idx}
                                className={`thumb-card ${
                                    selected.title === item.title ? "active" : ""
                                }`}
                                onClick={() => setSelected(item)}
                            >
                                <img src={item.image} alt={item.title} className="thumb-image"/>
                                <p className="thumb-title">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="articles" className="Articles">
                <div className="projects-header">
                    <span>Articles</span>
                </div>
                <p className="articles-intro">In my spare time I enjoy writing articles exploring subjects around
                    computer science and tech ethics, some of which have been published in University newspapers. A
                    selection of these articles can be read below:</p>
                <div className="article-content">
                    {articleData.map((item, idx) => (
                        <a className="article-item" key={idx} href={item.link}>
                            <span className="article-title">{item.title}</span>
                            <span className="experience-subtitle">{item.sub}</span>
                            <span className="experience-description">{item.description}</span>
                        </a>
                    ))}
                </div>
            </div>

        </div>
    )
}