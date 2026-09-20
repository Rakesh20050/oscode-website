import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Cpu } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../projects/ProjectCard";
import AlbumFrame from "../common/AlbumFrame";
import { projects } from "../../data/projects";

const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.section
      id="projects"
      className="py-16 sm:py-24 relative overflow-hidden transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Live Animated Floating Background Tech Orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-red-500/10 dark:bg-red-500/15 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -40, 0],
            scale: [0.9, 1.1, 1, 0.9],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] bottom-[15%] h-80 w-80 rounded-full bg-red-500/10 dark:bg-red-500/15 blur-[140px]"
        />

        {/* Floating Code/Tech Icon Watermarks */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[40%] text-red-500/10 dark:text-red-400/10 pointer-events-none hidden sm:block"
        >
          <Code size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[30%] text-red-500/10 dark:text-red-400/10 pointer-events-none hidden sm:block"
        >
          <Cpu size={64} />
        </motion.div>
      </div>

      <Container>
        {/* Animated Badge & Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="What We Build"
            title="Featured Projects & Repositories"
            description="A selection of student-led software builds, hardware research, and active open-source repositories."
          />
        </motion.div>

        <AlbumFrame
          className="mt-14"
          eyebrow="Featured Projects"
          title="Build Archive"
          description="A complete album of selected student-led builds. Hover for 3D depth and click any project to flip it for details."
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
            }}
            className="grid grid-cols-1 items-stretch gap-8 lg:gap-9 md:grid-cols-2 xl:grid-cols-3"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="min-w-0"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AlbumFrame>

        {/* Animated Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2.5 rounded-full border border-red-500/40 bg-red-500/10 px-8 py-3.5 text-sm font-bold text-red-700 dark:text-[#FF4D4D] transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-slate-950 dark:hover:text-black hover:shadow-[0_0_30px_rgba(0,168,255,0.5)] active:scale-95"
          >
            <Sparkles size={16} className="text-red-500 dark:text-red-300 group-hover:rotate-12 transition-transform" />
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Projects;