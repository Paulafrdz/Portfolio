import RevealText from "/Users/Paula/Desktop/Portfolio/src/components/RevealText/RevealText.jsx";
import email from "../../assets/email-9-svgrepo-com (2).svg"
import github from "../../assets/github-outline-fill-svgrepo-com (1).svg"
import linkedin from "../../assets/linkedin-svgrepo-com (3).svg"
import "./Storycard.css";

export default function StoryCard() {
    return (
        <section className="story-wrapper">
            <div className="story-card">
                <RevealText
                    lines={[
                        "Creative Frontend Developer with strong attention to detail and skilled at building",
                        "accessible, visually refined web interfaces.",
                        "Adaptable, a collaborative team player,problem-solver, and ",
                        "passionate about crafting products that balance functionality and design. ",

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
