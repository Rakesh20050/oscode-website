import { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import {
  Code2,
  Trophy,
  FolderGit2,
  GitPullRequest,
  Cpu,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const bentoItems = [
  {
    id: "open-source",
    icon: Code2,
    badge: "CORE FOCUS",
    title: "Open Source Engineering",
    tagline: "Building software in the open with industrial Git workflows.",
    desc: "We contribute to production-ready open-source repositories, manage pull requests, organize code reviews, and build real-world software tools for developers.",
    highlights: [
      "GitHub Pull Requests",
      "Peer Code Reviews",
      "Modular React & Node Systems",
    ],
    color: "cyan",
    badgeColor:
      "dark:bg-red-500/20 bg-red-100 text-red-700 dark:text-red-300 dark:border-red-400/40 border-red-300",
  },
  {
    id: "hackathons",
    icon: Trophy,
    badge: "NATIONAL STAGE",
    title: "Hackathons & Innovation Sprints",
    tagline: "Solving real problem statements in 24 to 48-hour marathons.",
    desc: "From Smart India Hackathon (SIH) to Microsoft TechSync, our student teams pitch lab prototypes, build AI & hardware solutions, and secure accolades.",
    highlights: [
      "Best Lab Idea Winner",
      "SIH Grand Finalists",
      "24-Hour Hardware Sprints",
    ],
    color: "amber",
    badgeColor:
      "dark:bg-amber-500/20 bg-amber-100 text-amber-800 dark:text-amber-300 dark:border-amber-400/40 border-amber-300",
  },
  {
    id: "projects",
    icon: FolderGit2,
    badge: "STUDENT BUILDS",
    title: "End-to-End Product Design",
    tagline: "Translating concepts into deployed web & mobile products.",
    desc: "Members build AI copywriters (Vibe-Tagger), live collaboration workspaces (OS.CLUB), campus navigation hubs, and web IDE tools.",
    highlights: [
      "Kirithi's Vibe-Tagger",
      "Durga's OS.CLUB Engine",
      "Vivek's Campus Navigator",
    ],
    color: "emerald",
    badgeColor:
      "dark:bg-emerald-500/20 bg-emerald-100 text-emerald-800 dark:text-emerald-300 dark:border-emerald-400/40 border-emerald-300",
  },
  {
    id: "gsoc",
    icon: GitPullRequest,
    badge: "GLOBAL MENTORSHIP",
    title: "GSoC & Global Mentorship",
    tagline: "Structured roadmaps to crack international open-source programs.",
    desc: "Preparation sessions breaking down organization triage, community bonding, IRC/Discord etiquette, and high-scoring proposal writing.",
    highlights: [
      "Organization Triage",
      "Proposal Drafting Guide",
      "Maintainer Communication",
    ],
    color: "purple",
    badgeColor:
      "dark:bg-red-500/20 bg-red-100 text-red-800 dark:text-red-300 dark:border-red-400/40 border-red-300",
  },
  {
    id: "workshops",
    icon: Cpu,
    badge: "HANDS-ON LABS",
    title: "Workshops & Tech Sessions",
    tagline: "Peer-led hardware, drone, and full-stack technical bootcamps.",
    desc: "Practical bootcamps on Git version control, LinkedIn branding, quadcopter hardware assembly, and cloud deployment pipelines.",
    highlights: [
      "NMIT Drone Assembly",
      "Git & GitHub 101",
      "LinkedIn Developer Branding",
    ],
    color: "blue",
    badgeColor:
      "dark:bg-red-500/20 bg-red-100 text-red-800 dark:text-red-300 dark:border-red-400/40 border-red-300",
  },
  {
    id: "community",
    icon: Sparkles,
    badge: "COMMUNITY",
    title: "Building Together",
    tagline: "A student-driven environment where ideas turn into action.",
    desc: "We create an environment where students learn from each other, collaborate on ambitious ideas, experiment with emerging technologies, and grow through real engineering experiences.",
    highlights: [
      "Peer Learning",
      "Team Collaboration",
      "Engineering Culture",
    ],
    color: "rose",
    badgeColor:
      "dark:bg-rose-500/20 bg-rose-100 text-rose-800 dark:text-rose-300 dark:border-rose-400/40 border-rose-300",
  },
];

const colorMap = {
  cyan: {
    glow: "bg-red-500/20",
    border: "hover:border-red-400/60",
    icon: "text-red-600 dark:text-red-300",
    line: "via-red-400/50",
  },
  amber: {
    glow: "bg-amber-500/20",
    border: "hover:border-amber-400/60",
    icon: "text-amber-600 dark:text-amber-300",
    line: "via-amber-400/50",
  },
  emerald: {
    glow: "bg-emerald-500/20",
    border: "hover:border-emerald-400/60",
    icon: "text-emerald-600 dark:text-emerald-300",
    line: "via-emerald-400/50",
  },
  purple: {
    glow: "bg-red-500/20",
    border: "hover:border-red-400/60",
    icon: "text-red-600 dark:text-red-300",
    line: "via-red-400/50",
  },
  blue: {
    glow: "bg-red-500/20",
    border: "hover:border-red-400/60",
    icon: "text-red-600 dark:text-red-300",
    line: "via-red-400/50",
  },
  rose: {
    glow: "bg-rose-500/20",
    border: "hover:border-rose-400/60",
    icon: "text-rose-600 dark:text-rose-300",
    line: "via-rose-400/50",
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function FeatureCard({ item, index, activeItem, setActiveItem }) {
  const Icon = item.icon;
  const colors = colorMap[item.color];
  const isActive = activeItem === item.id;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setActiveItem(item.id)}
      onMouseLeave={() => setActiveItem(null)}
      animate={{
        y: isActive ? -8 : [0, -5, 0, 5, 0],
      }}
      transition={
        isActive
          ? {
              duration: 0.3,
              ease: "easeOut",
            }
          : {
              duration: 6 + index * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }
      }
      className="relative z-20 h-full"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: isActive ? 0.35 : 0.12,
          scale: isActive ? 1.15 : 1,
        }}
        transition={{ duration: 0.4 }}
        className={`absolute -inset-3 rounded-[2rem] blur-2xl ${colors.glow}`}
      />

      <div
        className={`
          group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl
          border dark:border-white/10 border-slate-200
          dark:bg-[#07101f]/90 bg-white/95
          p-5 sm:p-6
          backdrop-blur-xl
          shadow-sm dark:shadow-black/20
          transition-all duration-500
          ${colors.border}
        `}
      >
        {/* Animated Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-x-6 top-0 h-[2px] origin-center bg-gradient-to-r from-transparent ${colors.line} to-transparent`}
        />

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <motion.div
              animate={{
                rotate: isActive ? [0, -8, 8, 0] : 0,
                scale: isActive ? 1.08 : 1,
              }}
              transition={{ duration: 0.4 }}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-white/5 bg-slate-100 ${colors.icon}`}
            >
              <Icon size={22} />
            </motion.div>

            <span
              className={`rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider ${item.badgeColor}`}
            >
              {item.badge}
            </span>
          </div>

          {/* Content */}
          <h3 className="mt-5 text-lg sm:text-xl font-black tracking-tight dark:text-white text-slate-900">
            {item.title}
          </h3>

          <p className="mt-1 font-mono text-[11px] font-medium text-red-600 dark:text-red-400">
            {item.tagline}
          </p>

          <p className="mt-3 text-sm leading-relaxed dark:text-slate-300 text-slate-600">
            {item.desc}
          </p>
        </div>

        {/* Hover Corner Accent */}
        <motion.div
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 rounded-tl-full bg-red-400/5"
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background Ambient Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[140px]" />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-red-500 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-red-500 blur-[120px]"
        />
      </div>

      <Container>
        <SectionHeading
          badge="WHAT WE DO & BUILD"
          title="Fostering Practical Engineering Culture"
          description="OSCode CIT bridges academic learning with real-world developer practices through hands-on open source, hackathons, and technical mentorship."
        />

        {/* ========================================================= */}
        {/* DESKTOP CONSTELLATION LAYOUT                              */}
        {/* ========================================================= */}

        <div className="relative mx-auto mt-20 hidden min-h-[920px] max-w-7xl lg:block">
          {/* Connection Lines */}
          <div className="pointer-events-none absolute inset-0">
            {/* Top Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute left-1/2 top-[10%] h-[28%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-400/30 to-red-400/60"
            />

            {/* Middle Left Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute left-[24%] top-[45%] h-px w-[20%] origin-right bg-gradient-to-l from-red-400/60 via-red-400/20 to-transparent"
            />

            {/* Middle Right Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute right-[24%] top-[45%] h-px w-[20%] origin-left bg-gradient-to-r from-red-400/60 via-red-400/20 to-transparent"
            />

            {/* Bottom Left Diagonal Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute left-[36%] top-[62%] h-[24%] w-px origin-top rotate-[32deg] bg-gradient-to-b from-red-400/50 to-transparent"
            />

            {/* Bottom Right Diagonal Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
              className="absolute right-[36%] top-[62%] h-[24%] w-px origin-top -rotate-[32deg] bg-gradient-to-b from-red-400/50 to-transparent"
            />

            {/* Small moving particles */}
            <motion.div
              animate={{ y: [0, 80, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[15%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />

            <motion.div
              animate={{ x: [0, 100, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute left-[30%] top-[45%] h-1.5 w-1.5 rounded-full bg-red-400"
            />
          </div>

          {/* Central Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
            }}
            className="absolute left-1/2 top-[45%] z-30 -translate-x-1/2 -translate-y-1/2"
          >
            {/* Outer Rings */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-8 rounded-full border border-dashed border-red-400/20"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-5 rounded-full bg-red-400/10 blur-xl"
            />

            {/* Core */}
            <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-red-400/30 bg-white/95 shadow-2xl shadow-red-500/10 backdrop-blur-xl dark:bg-[#07101f]/95">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-3 rounded-full border border-dashed border-red-400/20"
              />

              <Code2
                size={34}
                className="relative text-red-600 dark:text-red-300"
              />

              <span className="relative mt-2 text-lg font-black tracking-tight dark:text-white text-slate-900">
                OSCode
              </span>

              <span className="relative font-mono text-[9px] tracking-[0.25em] text-red-600 dark:text-red-400">
                CIT BANGALORE
              </span>
            </div>
          </motion.div>

          {/* Feature Cards Spaced Perfectly Without Overlapping */}
          {/* Top Card */}
          <div className="absolute left-1/2 top-0 w-[350px] -translate-x-1/2">
            <FeatureCard
              item={bentoItems[0]}
              index={0}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>

          {/* Middle Left Card */}
          <div className="absolute left-0 top-[35%] w-[350px]">
            <FeatureCard
              item={bentoItems[1]}
              index={1}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>

          {/* Middle Right Card */}
          <div className="absolute right-0 top-[35%] w-[350px]">
            <FeatureCard
              item={bentoItems[2]}
              index={2}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>

          {/* Bottom Left Card */}
          <div className="absolute left-[4%] bottom-0 w-[350px]">
            <FeatureCard
              item={bentoItems[3]}
              index={3}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>

          <div className="absolute right-[4%] bottom-0 w-[350px]">
            <FeatureCard
              item={bentoItems[4]}
              index={4}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>

          {/* Bottom Center Card (Community) */}
          <div className="absolute left-1/2 bottom-[-12%] w-[340px] -translate-x-1/2">
            <FeatureCard
              item={bentoItems[5]}
              index={5}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE / TABLET VERSION                                   */}
        {/* ========================================================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:hidden">
          {/* Mobile Central Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-3 flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-red-400/20 bg-white/80 p-8 text-center shadow-sm backdrop-blur-xl dark:bg-[#07101f]/80 sm:col-span-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-40 w-40 rounded-full bg-red-400 blur-3xl"
            />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-red-400/30 bg-red-50 dark:bg-red-500/10">
              <Code2
                size={30}
                className="text-red-600 dark:text-red-300"
              />
            </div>

            <h3 className="relative mt-4 text-xl font-black dark:text-white text-slate-900">
              OSCode CIT
            </h3>

            <p className="relative mt-1 font-mono text-[10px] tracking-[0.2em] text-red-600 dark:text-red-400">
              BUILD • LEARN • COLLABORATE
            </p>
          </motion.div>

          {bentoItems.map((item, index) => (
            <FeatureCard
              key={item.id}
              item={item}
              index={index}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}