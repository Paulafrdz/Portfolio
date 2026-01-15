import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import "./RevealText.css";

export default function RevealText({
  lines, // <-- array de líneas (importante)
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // rango más largo para que llegue hasta el final de la card
    offset: ["start 50%", "end 50%"],
  });

  const n = lines.length;

  return (
    <div ref={ref} className="rlc">
      {lines.map((line, i) => {
        const start = i / n;
        const end = (i + 1) / n;

        // progreso SOLO para esta línea (0..1)
        const local = useTransform(scrollYProgress, [start, end], [0, 1]);

        // clip-path de izquierda a derecha
        const clip = useTransform(
          local,
          [0, 1],
          ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
        );

        return (
          <div key={i} className="rlc-line">
            {/* base gris */}
            <span className="rlc-base">{line}</span>

            {/* overlay blanco que se revela */}
            <motion.span className="rlc-active" style={{ clipPath: clip }}>
              {line}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
}
