import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TechStack from "../TechStack/TechStack"; 
import "./TechToProjectsScene.css";

export default function TechToProjectsScene() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Fade out and slightly shrink TechStack 
  const techOpacity = useTransform(p, [0.0, 0.22], [1, 0]);
  const techScale = useTransform(p, [0.0, 0.22], [1, 0.98]);

  // Dark overlay to separate sections visually
  const dimOpacity = useTransform(p, [0.06, 0.18], [0, 0.25]);

  // Burgundy background wash to avoid visible cuts
  const washOpacity = useTransform(p, [0.16, 0.30], [0, 1]);

  // Big letter "P" appearance
  const bOpacity = useTransform(p, [0.06, 0.12], [0, 1]);        
  const bScale = useTransform(p, [0.10, 0.92], [0.9, 36]);       
  const bRotate = useTransform(p, [0.12, 0.55], [-8, 0]);        

  // Final section title
  const titleOpacity = useTransform(p, [0.32, 0.46], [0, 1]);
  const titleY = useTransform(p, [0.22, 0.36], [24, 0]);

  return (
    <section ref={ref} className="scene">
      <div className="scene__sticky">
        {/* Tech stack section (background layer) */}
        <motion.div
          className="scene__tech"
          style={{
            opacity: techOpacity,
            scale: techScale,
          }}
        >
          <TechStack />
        </motion.div>

        {/* Dark overlay between sections */}
        <motion.div className="scene__dim" style={{ opacity: dimOpacity }} />

        {/* Burgundy wash that fills the screen */}
        <motion.div className="scene__wash" style={{ opacity: washOpacity }} />

        {/* Large animated letter */}
        <motion.div
          className="scene__b"
          style={{ opacity: bOpacity, scale: bScale, rotate: bRotate }}
          aria-hidden="true"
        >
          P
        </motion.div>

        {/* Final projects title */}
        <motion.div className="scene__title" style={{ opacity: titleOpacity, y: titleY }}>
          <h2>Projects</h2>
          <p>Projects & case studies</p>
        </motion.div>
      </div>
    </section>
  );
}
