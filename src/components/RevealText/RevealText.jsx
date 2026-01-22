import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import "./Revealtext.css";

function RevealLine({ line, i, total, scrollYProgress }) {
  const start = i / total;
  const end = (i + 1) / total;

  // Each line gets its own reveal window
  const clipPath = useTransform(
    scrollYProgress,
    [start, end],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <div className="reveal-line">
      <span className="reveal-base">{line}</span>
      <motion.span className="reveal-active" style={{ clipPath }}>
        {line}
      </motion.span>
    </div>
  );
}

export default function RevealText({ text, lines }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });

  const finalLines = useMemo(() => {
    if (Array.isArray(lines) && lines.length) return lines;
    return String(text || "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  }, [text, lines]);

  const total = Math.max(1, finalLines.length);

  return (
    <div ref={ref} className="reveal-lines">
      {finalLines.map((line, i) => (
        <RevealLine
          key={`${i}-${line}`}     // stable enough for text lines
          line={line}
          i={i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
