import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw } from "lucide-react";

export default function FlipCard({
  front,
  back,
  className = "",
  heightClass = "min-h-[500px]",
  ariaLabel = "Flip card",
}) {
  const [flipped, setFlipped] = useState(false);

  const toggle = (event) => {
    if (event.target.closest("a, button, input, textarea, select")) return;
    setFlipped((value) => !value);
  };

  return (
    <div
      className={`group os-flip-card os-trace-card perspective-[1400px] h-full w-full ${heightClass} ${className}`}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-pressed={flipped}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped((value) => !value);
        }
      }}
    >
      <motion.div
        className="os-flip-card-inner h-full w-full transform-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileHover={{ y: -7, rotateX: 1.5, rotateZ: flipped ? 0 : -0.35 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="os-flip-face os-flip-front h-full w-full">{front}</div>
        <div className="os-flip-face os-flip-back h-full w-full">{back}</div>
      </motion.div>

      <span className="pointer-events-none absolute right-3 top-3 z-30 flex h-7 w-7 items-center justify-center rounded-full border border-red-400/40 bg-black/60 text-red-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
        <RotateCw size={13} className="os-icon-rotate" />
      </span>
    </div>
  );
}
