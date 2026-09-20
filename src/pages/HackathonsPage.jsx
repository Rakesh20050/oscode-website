import { useState } from "react";
import { Flame, Trophy, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import FlipCard from "../components/common/FlipCard";
import { hackathons } from "../data/hackathons";

const cut = (s = "", n = 230) => s.length > n ? `${s.slice(0,n).trim()}…` : s;

export default function HackathonsPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "Winners" ? hackathons.filter((h) => /winner|runner/i.test(h.status)) : hackathons;
  return (
    <main className="future-page">
      <Container className="!max-w-[1580px]">
        <PageIntro icon={Flame} eyebrow="OSCODE / INNOVATION ARENA" title="Hackathons &" accent="Innovation" description="Fast-paced engineering sprints where OSCode teams turn problem statements into prototypes, products, and technical demonstrations." stats={[{ value: `${hackathons.length}+`, label: "Hackathons", icon: Flame }, { value: "24–48h", label: "Sprint Format", icon: Trophy }, { value: "Open", label: "Build Culture", icon: FaGithub }]} />
        <div className="future-tabs"><button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All Hackathons</button><button className={filter === "Winners" ? "active" : ""} onClick={() => setFilter("Winners")}>🏆 Award Winners</button></div>
        <NeonFrame eyebrow="HACKATHON COLLECTION" title="Innovation Sprint Albums" description="Challenge, team, technology, and outcome — arranged in spacious cards with no collapsed content.">
          <div className="future-grid two-col">{list.map((h) => {
            const front = <article className="future-card hack-card"><div className="hack-image"><img src={h.image} alt={h.title}/><span>{h.category}</span></div><div className="future-card-body"><div className="status-row"><span>{h.status}</span><small>{h.date}</small></div><h3>{h.title}</h3><p>{cut(h.description, 220)}</p><div className="tech-row">{(h.techStack || []).slice(0,5).map((t) => <span key={t}>{t}</span>)}</div><div className="card-actions"><span className="flip-label">Flip <ArrowUpRight size={14}/></span><span className="outline-mini">Open Details</span></div></div></article>;
            const back = <article className="future-card hack-card project-back"><div className="back-topline"><span>FULL HACKATHON DETAILS</span><Trophy size={17}/></div><h3>{h.title}</h3><div className="detail-box"><strong>PROBLEM STATEMENT</strong><p>{cut(h.problemStatement, 270)}</p></div><div className="detail-box"><strong>RESULT</strong><p>{cut(h.result || h.description, 230)}</p></div><div className="tech-row large">{(h.techStack || []).map((t) => <span key={t}>{t}</span>)}</div><button className="primary-action">View Repository <FaGithub size={15}/></button></article>;
            return <FlipCard key={h.id} front={front} back={back} heightClass="min-h-[610px]" ariaLabel={`${h.title} hackathon album`}/>;
          })}</div>
        </NeonFrame>
      </Container>
    </main>
  );
}
