import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import "./Revealtext.css";

function RevealLine({ line, i, total, scrollYProgress }) {
  const start = i / total;
  const end = (i + 1) / total;

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 430);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile 
      ? ["start 45%", "end 70%"]  // Mobile
      : ["start 60%", "end 70%"]  // Desktop
  });

  // Empty lines for use them as paragraph gaps
  const finalLines = useMemo(() => {
    if (Array.isArray(lines) && lines.length) return lines;

    return String(text || "")
      .split("\n")
      .map((l) => l.trim()); 
  }, [text, lines]);

  // Ignore empty spacers
  const revealLinesCount = Math.max(
    1,
    finalLines.filter((l) => l && l.trim()).length
  );
  const total = revealLinesCount;


  let revealIndex = 0;

  return (
    <div ref={ref} className="reveal-lines">
      {finalLines.map((line, i) => {
        if (!line) {
          return <div key={`spacer-${i}`} className="reveal-paragraph-gap" />;
        }

        const currentIndex = revealIndex;
        revealIndex += 1;

        return (
          <RevealLine
            key={`${i}-${line}`}
            line={line}
            i={currentIndex}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}
