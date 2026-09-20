import { motion } from "framer-motion";

export default function PageIntro({ icon: Icon, eyebrow, title, accent, description, stats = [], action }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="future-intro"
    >
      <div className="future-intro-main">
        <div className="future-icon"><Icon size={28} /></div>
        <div>
          <div className="future-eyebrow">{eyebrow}</div>
          <h1>{title} <span>{accent}</span></h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="future-intro-side">
        {stats.length > 0 && (
          <div className="future-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="future-stat">
                {stat.icon && <stat.icon size={19} />}
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        {action}
      </div>
    </motion.div>
  );
}
