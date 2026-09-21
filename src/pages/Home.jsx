import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, FolderGit2, Trophy, Users, Sparkles } from "lucide-react";
import Hero from "../components/home/Hero";
import Container from "../components/common/Container";
import NeonFrame from "../components/common/NeonFrame";
import ProjectCard from "../components/projects/ProjectCard";
import EventCard from "../components/events/EventCard";
import AchievementCard from "../components/achievements/AchievementCard";
import { projects } from "../data/projects";
import events from "../data/events";
import { achievements } from "../data/achievements";
import team from "../data/teamData";

function Stat({ Icon, value, label }) {
  return <div className="home-stat"><Icon size={19}/><strong>{value}</strong><span>{label}</span></div>;
}

export default function Home() {
  return <main className="future-home">
    <Hero />
    <Container className="!max-w-[1580px]">
      <div className="home-stat-strip">
        <Stat Icon={FolderGit2} value={`${projects.length}+`} label="Projects & Repositories" />
        <Stat Icon={CalendarDays} value={`${events.length}+`} label="Events & Sessions" />
        <Stat Icon={Trophy} value={`${achievements.length}+`} label="Achievements" />
        <Stat Icon={Users} value={`${team.length}+`} label="Community Members" />
      </div>

      <NeonFrame eyebrow="FEATURED PROJECTS" title="Builds That Move Ideas Forward" description="A compact view of OSCode CIT's active repositories and student-led engineering work.">
        <div className="future-grid three-col">{projects.slice(0,3).map((p) => <ProjectCard key={p.id} project={p}/>)}</div>
        <div className="home-frame-link"><Link to="/projects">View All Projects <ArrowRight size={15}/></Link></div>
      </NeonFrame>

      <NeonFrame eyebrow="FEATURED EVENTS" title="Learn, Build & Grow Together" description="Workshops, summits, visits, and sessions that connect students with technology and open-source practice." className="home-section-frame">
        <div className="future-grid three-col">{events.slice(-3).map((event) => <EventCard key={event.id} event={event}/>)}</div>
        <div className="home-frame-link"><Link to="/events">View All Events <ArrowRight size={15}/></Link></div>
      </NeonFrame>

      <NeonFrame eyebrow="RECOGNITION" title="Achievements & Milestones" description="Recognition earned through technical work, industry exposure, mentorship, and community contribution." className="home-section-frame">
        <div className="future-grid three-col">{achievements.slice(0,3).map((item) => <AchievementCard key={item.id} item={item}/>)}</div>
        <div className="home-frame-link"><Link to="/achievements">View All Achievements <ArrowRight size={15}/></Link></div>
      </NeonFrame>
    </Container>
  </main>;
}
