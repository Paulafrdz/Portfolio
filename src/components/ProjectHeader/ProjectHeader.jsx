import { motion } from "framer-motion";
import "./ProjectHeader.css";

export default function ProjectHeader({ name, description, tags }) {
  return (
    <motion.header
      className="project-header"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="project-header__content">
        <h2 className="project-header__name">{name}</h2>
        {description && (
          <p className="project-header__description">{description}</p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="project-header__tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
              </div>
    </motion.header>
  );
}