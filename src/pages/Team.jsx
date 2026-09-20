import { useState } from "react";
import { Users, Network, LayoutGrid, Search } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import team from "../data/team";

const departments = ["All", "Leadership", "R&D", "Tech", "Social Media & Events"];

function TeamMember({ member }) {
  const links = [{ href: member.github, icon: FaGithub }, { href: member.linkedin, icon: FaLinkedin }, { href: member.instagram, icon: FaInstagram }].filter((x) => x.href);
  return <article className="team-card">
    <div className="team-photo"><img src={member.image} alt={member.name} onError={(e) => { e.currentTarget.src = "/images/logos/logo.svg"; }}/><span>{member.department}</span></div>
    <div className="team-copy"><div className="creator-line">OSCODE CIT</div><h3>{member.name}</h3><p>{member.role}</p><div className="team-links">{links.map(({href, icon: Icon}) => <a key={href} href={href} target="_blank" rel="noreferrer"><Icon size={15}/></a>)}</div></div>
  </article>;
}

export default function Team() {
  const [dept, setDept] = useState("All");
  const [query, setQuery] = useState("");
  const list = team.filter((m) => (dept === "All" || m.department === dept) && m.name.toLowerCase().includes(query.toLowerCase()));
  return <main className="future-page">
    <Container className="!max-w-[1580px]">
      <PageIntro icon={Users} eyebrow="OSCODE / PEOPLE DIRECTORY" title="Meet The" accent="Team" description="Developers, researchers, project leads, event curators, and community builders working together at Cambridge Institute of Technology." stats={[{ value: `${team.length}+`, label: "Members", icon: Users }, { value: "4", label: "Departments", icon: Network }, { value: "2026", label: "Chapter", icon: LayoutGrid }]} />
      <div className="team-toolbar"><div className="future-tabs">{departments.map((d) => <button key={d} className={dept === d ? "active" : ""} onClick={() => setDept(d)}>{d}</button>)}</div><label className="search-box"><Search size={16}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search members..."/></label></div>
      <NeonFrame eyebrow="TEAM COLLECTION" title="OSCode CIT People" description="A clean, spacious member directory with department filters and social profiles.">
        <div className="future-grid four-col">{list.map((member) => <TeamMember key={member.id} member={member}/>)}</div>
      </NeonFrame>
    </Container>
  </main>;
}
