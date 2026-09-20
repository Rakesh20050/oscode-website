export default function NeonFrame({ children, eyebrow, title, description, className = "" }) {
  return (
    <section className={`neon-frame ${className}`}>
      <div className="neon-frame-head">
        <div>
          {eyebrow && <div className="future-eyebrow">{eyebrow}</div>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
        <span className="digital-label">OSCODE / DIGITAL ARCHIVE</span>
      </div>
      <div className="neon-frame-body">{children}</div>
    </section>
  );
}
