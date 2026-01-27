import RevealText from "../RevealText/RevealText.jsx";
import email from "../../assets/email-9-svgrepo-com (2).svg"
import github from "../../assets/github-outline-fill-svgrepo-com (1).svg"
import linkedin from "../../assets/linkedin-svgrepo-com (3).svg"
import "./StoryCard.css";

export default function StoryCard() {
    return (
        <section className="story-wrapper">
            <div className="story-card">
                <RevealText
                    lines={[
                        "Hi! I'm Paula, a Full-Stack Developer who enjoys building clean, functional, and",
                        "reliable web applications.",
                        "",
                        "Most of my experience comes from personal and training projects, where I've worked",
                        "on complete applications involving frontend and backend logic, API integration,",
                        "authentication, and CRUD operations.",
                        "",
                        "I'm a proactive learner who enjoys problem-solving and continuously improving my skills",
                        "while building real, well-structured products.",

                        

                    ]}
                    
                     />
                <div className="story-logos">
                    <a
                        href="https://github.com/Paulafrdz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <img src={github} alt="GitHub" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/paulafernandezaranda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <img src={linkedin} alt="LinkedIn" />
                    </a>

                    <a
                        href="mailto:paulafa8@email.com"
                        aria-label="Email"
                    >
                        <img src={email} alt="Email" className="logo-email"/>
                    </a>
                </div>
            </div>
        </section>
    );
}
