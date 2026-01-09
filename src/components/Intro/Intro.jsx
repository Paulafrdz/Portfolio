import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section style={{ padding: "40px 80px" }}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontSize: "96px", lineHeight: 1.05, marginBottom: "20px" }}
      >
        <span style={{ color: "var(--color-burgundy)" }}>Paula</span>{" "}
        Fernandez Aranda
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ fontSize: "40px", lineHeight: 1.05 }}

      >
        Full Stack Web Developer
      </motion.p>
    </section>
  );
}
