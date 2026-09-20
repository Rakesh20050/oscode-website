import { useState } from "react";
import { FolderGit2, Code2, Users, Sparkles } from "lucide-react";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Open Source", "Developer Tools"];
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <main className="future-page">
      <Container className="!max-w-[1580px]">
        <PageIntro icon={FolderGit2} eyebrow="OSCODE / ENGINEERING ARCHIVE" title="Featured" accent="Projects" description="Real-world applications, AI experiments, open-source engines, and developer tools built by OSCode CIT members." stats={[{ value: `${projects.length}+`, label: "Repositories", icon: FolderGit2 }, { value: "4+", label: "Tech Tracks", icon: Code2 }, { value: "100%", label: "Student Built", icon: Users }]} />
        <div className="future-tabs">{filters.map((f) => <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <NeonFrame eyebrow="PROJECT COLLECTION" title="Complete Repository Albums" description="More width, more height, readable text, and consistent spacing across every project card.">
          <div className="future-grid three-col">{list.map((project) => <ProjectCard key={project.id} project={project}/>)}</div>
        </NeonFrame>
      </Container>
    </main>
  );
}
