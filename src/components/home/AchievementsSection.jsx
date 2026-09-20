import { motion } from "framer-motion";
import { Trophy, ArrowUpRight, Award, Sparkles } from "lucide-react";
import Container from "../common/Container";
import SectionBadge from "../common/SectionBadge";
import GlassCard from "../common/GlassCard";
import GradientText from "../common/GradientText";
import { achievements } from "../../data/achievements";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Milestones & Pride</SectionBadge>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold">
            Hall of <GradientText>Fame & Impact</GradientText>
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Celebrating outstanding milestones, campus placement breakthroughs, and hackathon wins driven by OSCode members.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              className="lg:col-span-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 lg:p-10 border-red-500/30 bg-linear-to-br from-[#0c1329]/90 to-[#070b1a]/95">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-full bg-linear-to-r from-amber-400 via-red-400 to-violet-500 opacity-60 blur-md" />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="relative h-44 w-44 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
                      />
                      <span className="absolute bottom-1 right-2 rounded-full bg-amber-400 p-2 text-slate-950 shadow-lg">
                        <Trophy size={18} />
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-red-300 font-mono tracking-wide">{item.role}</p>
                  </div>

                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 border border-amber-400/30">
                          <Sparkles size={13} />
                          {item.badge}
                        </span>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-baseline gap-4">
                        <h4 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-yellow-200 to-amber-500">
                          {item.metric}
                        </h4>
                        <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                          {item.metricLabel}
                        </span>
                      </div>

                      <p className="mt-4 text-slate-300 leading-relaxed text-base">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span>Cambridge Institute of Technology, Bengaluru</span>
                      <span className="flex items-center gap-1 text-red-400 font-medium">
                        Inspiring Future Batches <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AchievementsSection;