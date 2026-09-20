import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import AchievementCard from "../achievements/AchievementCard";
import { achievements } from "../../data/achievements";

const Achievements = () => {
  const featuredAchievements = achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-16 sm:py-24 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="Milestones & Recognition"
          title="Awards & Community Recognitions"
          description="Key milestones, 'Best Lab Idea' awards, industry delegations, and member placement achievements at OSCode CIT."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {featuredAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex"
            >
              <AchievementCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 hover:bg-[#EF4444] hover:text-black hover:shadow-[0_0_25px_rgba(0,168,255,0.4)] border-red-500/40 bg-red-500/10 font-mono text-red-700  mb-4 dark:shadow-lg"
          >
            View All Achievements
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;