import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, RotateCw, X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import FlipCard from "../common/FlipCard";

const shorten = (text = "", max = 170) => text.length > max ? `${text.slice(0, max).trim()}…` : text;

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const front = (
    <article className="future-card project-card group">
      <div className="project-cover">
        <img src={project.images?.[0] || "/images/logos/logo.svg"} alt={project.title} onError={(e) => { e.currentTarget.src = "/images/logos/logo.svg"; }} />
        <div className="project-cover-shade" />
        <span className="project-label">PROJECT ALBUM</span>
        <span className={`status-chip ${project.status.includes("Active") ? "active" : ""}`}>{project.status}</span>
      </div>
      <div className="future-card-body">
        <div className="creator-line">BY {project.creator}</div>
        <h3>{project.title}</h3>
        <p>{shorten(project.description, 190)}</p>
        <div className="tech-row">
          {project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
          {project.technologies.length > 4 && <span>+{project.technologies.length - 4}</span>}
        </div>
        <div className="card-actions">
          <button className="outline-action" onClick={(e) => { e.stopPropagation(); setOpen(true); }}>View Details <ArrowUpRight size={15} /></button>
          <span className="flip-label">Flip <RotateCw size={14} /></span>
        </div>
      </div>
    </article>
  );
  const back = (
    <article className="future-card project-card project-back">
      <div className="back-topline"><span>PROJECT DETAILS</span><RotateCw size={17} /></div>
      <h3>{project.title}</h3>
      <p className="back-summary">{shorten(project.fullDescription || project.description, 230)}</p>
      <ul className="feature-list">
        {project.features.slice(0, 3).map((feature) => <li key={feature}><CheckCircle2 size={16} /> <span>{shorten(feature, 130)}</span></li>)}
      </ul>
      <div className="tech-row large">{project.technologies.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="card-actions back-actions">
        <button className="primary-action" onClick={(e) => { e.stopPropagation(); setOpen(true); }}>Open Full Details <ArrowUpRight size={15} /></button>
      </div>
    </article>
  );

  return (
    <>
      <FlipCard front={front} back={back} heightClass="min-h-[590px]" ariaLabel={`${project.title} project album`} />
      <AnimatePresence>
        {open && (
          <div className="modal-layer">
            <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.div className="detail-modal" initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }}>
              <button className="modal-close" onClick={() => setOpen(false)}><X size={19} /></button>
              <span className="future-eyebrow">PROJECT DETAILS</span>
              <h2>{project.title}</h2>
              <p className="modal-lead">{project.fullDescription || project.description}</p>
              <div className="modal-grid">
                <div><h4>KEY FEATURES</h4><ul className="feature-list">{project.features.map((feature) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}</ul></div>
                <div><h4>TECHNOLOGY</h4><div className="tech-row large">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="modal-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><FaGithub size={17}/> GitHub</a>}{project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer"><ExternalLink size={17}/> Live Demo</a>}</div></div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
