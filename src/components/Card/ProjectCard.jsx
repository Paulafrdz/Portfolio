import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({
  index = "01",
  title,
  description,
  image,
  variant = "dark", // "dark" | "light" | "medium"
}) {
  return (
    <motion.article
      className={`service-card ${variant}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <span className="service-index">{`{ ${index} }`}</span>

      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}
