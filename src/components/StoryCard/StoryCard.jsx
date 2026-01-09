import RevealText from "/Users/Paula/Desktop/Portfolio/src/components/RevealText/RevealText.jsx";
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
                        
                    ]} />
            </div>
        </section>
    );
}
