import ProjectCard from "../Card/ProjectCard";
import "./LayoutCards.css";

export default function LayoutCards({ cards }) {
  return (
    <section className="layout-grid">
      {cards.map((card, index) =>
        card ? (
          <ProjectCard key={index} {...card} />
        ) : (
          <div key={index} className="grid-hole" />
        )
      )}
    </section>
  );
}
