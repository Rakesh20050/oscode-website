import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const GlassCard = ({ children, className = "", onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative transform-gpu rounded-3xl border border-white/15 bg-black/85 p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/60 hover:shadow-[0_20px_50px_-8px_rgba(239,68,68,0.24)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;