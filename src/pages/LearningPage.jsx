import { useState } from "react";
import { BookOpen, GitBranch, GraduationCap, Code, Cpu, ExternalLink, CheckCircle2 } from "lucide-react";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import { learningTracks } from "../data/learning";

const iconMap = { GitBranch, GraduationCap, Code, Cpu };
export default function LearningPage() {
  const [active, setActive] = useState(learningTracks[0]);
  const Icon = iconMap[active.icon] || Code;
  return <main className="future-page">
    <Container className="!max-w-[1580px]">
      <PageIntro icon={BookOpen} eyebrow="OSCODE / LEARNING HUB" title="Learning" accent="Pathways" description="Curated roadmaps, technical tracks, open-source guides, and practical resources created for CIT students." stats={[{ value: `${learningTracks.length}+`, label: "Learning Tracks", icon: BookOpen }, { value: "Beginner", label: "To Advanced", icon: GraduationCap }, { value: "Open", label: "Resources", icon: Code }]} />
      <NeonFrame eyebrow="LEARNING ARCHIVE" title="Choose a Roadmap" description="Select a track to view modules, practical goals, and recommended resources.">
        <div className="learning-layout">
          <aside className="learning-list">{learningTracks.map((track) => { const TrackIcon = iconMap[track.icon] || Code; return <button key={track.id} className={active.id === track.id ? "active" : ""} onClick={() => setActive(track)}><span className="learning-icon"><TrackIcon size={19}/></span><span><strong>{track.title}</strong><small>{track.level}</small></span></button>; })}</aside>
          <section className="learning-detail">
            <div className="learning-detail-head"><span className="future-eyebrow">{active.category}</span><span className="level-pill">{active.level}</span><div className="learning-title"><div className="future-icon"><Icon size={25}/></div><h2>{active.title}</h2></div><p>{active.description}</p></div>
            <div className="learning-section"><h4>CORE MODULES</h4><div className="module-grid">{active.modules.map((m) => <div key={m}><CheckCircle2 size={16}/><span>{m}</span></div>)}</div></div>
            <div className="learning-section"><h4>RECOMMENDED RESOURCES</h4><div className="resource-grid">{active.resources.map((r) => <a key={r.name} href={r.link} target="_blank" rel="noreferrer"><BookOpen size={15}/><span>{r.name}</span><ExternalLink size={14}/></a>)}</div></div>
          </section>
        </div>
      </NeonFrame>
    </Container>
  </main>;
}
