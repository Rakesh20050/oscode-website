import { useState } from "react";
import { Trophy, Medal, Users, Star } from "lucide-react";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import AchievementCard from "../components/achievements/AchievementCard";
import { achievements } from "../data/achievements";

export default function AchievementsPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Hackathon", "Summit", "Alumni"];
  const list = filter === "All" ? achievements : achievements.filter((a) => filter === "Hackathon" ? a.category.toLowerCase().includes("award") : filter === "Summit" ? a.category === "Summit" : filter === "Alumni" ? a.category.includes("Individual") : true);
  return (
    <main className="future-page">
      <Container className="!max-w-[1580px]">
        <PageIntro icon={Trophy} eyebrow="OSCODE / RECOGNITION REGISTRY" title="Our" accent="Achievements" description="A clean archive of awards, technical recognition, summit participation, mentorship, and alumni milestones." stats={[{ value: `${achievements.length}+`, label: "Milestones", icon: Trophy }, { value: "1st", label: "Best Lab Idea", icon: Medal }, { value: "8+", label: "Categories", icon: Star }]} />
        <div className="future-tabs">{filters.map((f) => <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <NeonFrame eyebrow="ACHIEVEMENT COLLECTION" title="Recognition Albums" description="Every milestone stays inside a complete, spacious card with image, metric, description, and details.">
          <div className="future-grid three-col">{list.map((item) => <AchievementCard key={item.id} item={item}/>)}</div>
        </NeonFrame>
      </Container>
    </main>
  );
}
