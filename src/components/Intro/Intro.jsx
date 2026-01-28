import { motion } from "framer-motion";
import "./Intro.css";
import illustration from "../../assets/ChatGPT Image 28 ene 2026, 18_43_10.png";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <motion.h1
          className="intro__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="intro__first">Paula</span>{" "}
          <span className="intro__rest">Fernandez Aranda</span>
        </motion.h1>

        <motion.p
          className="intro__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full Stack Web Developer
        </motion.p>
      </div>

      <motion.div
        className="intro__illustration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <img src={illustration} alt="Paula Fernandez Aranda" />
      </motion.div>
    </section>
  );
}

