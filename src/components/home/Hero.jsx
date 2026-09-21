import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Terminal,
  ArrowRight,
  Sparkles,
  CalendarDays,
  Users,
  FolderGit2,
} from "lucide-react";

import EventShuffleCarousel from "./EventShuffleCarousel";

import team from "../../data/teamData";
import event from "../../data/events";
import { projects } from "../../data/projects";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#050505] pt-28 pb-16">

      {/* =========================================================
          VIDEO BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        >
          <source
            src="/videos/hero-background.MP4"
            type="video/mp4"
          />
        </video>

        {/* Dark readability layer */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Cinematic blue layer */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-[#120606]/55
            to-[#180505]/55
          "
        />

        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-[0.13]" />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-52
            bg-gradient-to-t
            from-[#020617]
            via-[#020617]/70
            to-transparent
          "
        />
      </div>


      {/* =========================================================
          AMBIENT GLOW
      ========================================================= */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-red-500/10
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[5%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-red-700/10
          blur-[140px]
        "
      />


      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6">

        <div className="grid items-center gap-10 lg:grid-cols-12 xl:gap-8">


          {/* =====================================================
              LEFT SIDE
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-20 lg:col-span-6"
          >

            {/* =================================================
                BADGE
            ================================================= */}
            <motion.div
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              className="
                group
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-red-400/35
                bg-red-400/[0.08]
                px-4
                py-2
                font-mono
                text-[11px]
                font-bold
                tracking-wider
                text-red-200
                backdrop-blur-xl
                shadow-[0_0_25px_rgba(239,68,68,0.10)]
                transition-all
                duration-300
                hover:border-red-300/70
                hover:bg-red-400/[0.14]
              "
            >
              <Terminal
                size={14}
                className="
                  text-red-300
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />

              <span>OSCODE CIT CHAPTER</span>

              <span className="text-red-500">
                •
              </span>

              <span>2026</span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-red-500
                  shadow-[0_0_10px_rgba(239,68,68,0.9)]
                  animate-pulse
                "
              />
            </motion.div>


            {/* =================================================
                HEADING
            ================================================= */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="
                text-5xl
                font-black
                leading-[0.98]
                tracking-[-0.045em]
                sm:text-6xl
                lg:text-[4.15rem]
                xl:text-[4.6rem]
              "
            >
              <span className="block text-white">
                Open Source.
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-red-400
                  to-red-600
                  bg-clip-text
                  text-transparent
                "
              >
                Real Engineering.
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-slate-100
                  to-red-200
                  bg-clip-text
                  text-transparent
                "
              >
                Zero Boundaries.
              </span>
            </motion.h1>


            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-6
                max-w-xl
                text-[17px]
                leading-relaxed
                text-white/70
                sm:text-[18px]
              "
            >
              Build. Collaborate. Innovate.

              <span className="font-semibold text-red-300">
                {" "}Turning ideas into impactful open-source projects.
              </span>
            </motion.p>


            {/* =================================================
                BUTTONS
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              {/* Projects */}
              <Link
                to="/projects"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-r
                  from-red-400
                  via-red-500
                  to-red-600
                  px-6
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-lg
                  shadow-red-500/25
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)]
                  active:scale-95
                "
              >
                <span
                  className="
                    absolute
                    inset-y-0
                    -left-[100%]
                    w-[65%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <FolderGit2
                  size={17}
                  className="relative"
                />

                <span className="relative">
                  Explore Projects
                </span>

                <ArrowRight
                  size={17}
                  className="
                    relative
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>


              {/* Team */}
              <Link
                to="/team"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-red-400/30
                  bg-white/[0.05]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-red-200
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-300/70
                  hover:bg-red-500/10
                  hover:shadow-[0_15px_30px_rgba(239,68,68,0.15)]
                  active:scale-95
                "
              >
                <Sparkles
                  size={17}
                  className="
                    transition-transform
                    duration-500
                    group-hover:rotate-180
                  "
                />

                <span>
                  Meet Team
                </span>
              </Link>


              {/* Events */}
              <Link
                to="/events"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/15
                  bg-white/[0.04]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-400/50
                  hover:bg-red-500/10
                  hover:text-white
                  active:scale-95
                "
              >
                <CalendarDays size={16} />

                <span>
                  View Events
                </span>
              </Link>

            </motion.div>


            {/* =================================================
                STATS
                ONLY THESE 3 CARDS ARE TRANSPARENT
            ================================================= */}
            <div
              className="
                mt-10
                grid
                max-w-xl
                grid-cols-3
                gap-3
              "
            >

              {/* =================================================
                  EVENTS HOSTED
                  Transparent - video fully visible
              ================================================= */}
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-red-400/20
                  bg-transparent
                  p-4
                  transition-all
                  duration-300
                  hover:border-red-400/55
                  hover:bg-transparent
                  hover:shadow-[0_15px_35px_rgba(34,211,238,0.12)]
                "
              >
                <CalendarDays
                  size={17}
                  className="
                    mb-3
                    text-red-300
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    bg-gradient-to-r
                    from-white
                    to-red-400
                    bg-clip-text
                    font-mono
                    text-2xl
                    font-black
                    text-transparent
                  "
                >
                  {event.length - 1}+
                </div>

                <div className="mt-1 text-xs text-slate-400">
                  Events Hosted
                </div>
              </motion.div>


              {/* =================================================
                  CLUB MEMBERS
                  Transparent - video fully visible
              ================================================= */}
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-red-400/20
                  bg-transparent
                  p-4
                  transition-all
                  duration-300
                  hover:border-red-400/55
                  hover:bg-transparent
                  hover:shadow-[0_15px_35px_rgba(239,68,68,0.12)]
                "
              >
                <Users
                  size={17}
                  className="
                    mb-3
                    text-red-300
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    bg-gradient-to-r
                    from-red-300
                    to-pink-400
                    bg-clip-text
                    font-mono
                    text-2xl
                    font-black
                    text-transparent
                  "
                >
                  {team.length - 1}+
                </div>

                <div className="mt-1 text-xs text-slate-400">
                  Club Members
                </div>
              </motion.div>


              {/* =================================================
                  MAJOR PROJECTS
                  Transparent - video fully visible
              ================================================= */}
              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-red-400/20
                  bg-transparent
                  p-4
                  transition-all
                  duration-300
                  hover:border-red-400/55
                  hover:bg-transparent
                  hover:shadow-[0_15px_35px_rgba(239,68,68,0.12)]
                "
              >
                <FolderGit2
                  size={17}
                  className="
                    mb-3
                    text-red-300
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    bg-gradient-to-r
                    from-red-300
                    to-red-400
                    bg-clip-text
                    font-mono
                    text-2xl
                    font-black
                    text-transparent
                  "
                >
                  {projects.length - 1}+
                </div>

                <div className="mt-1 text-xs text-slate-400">
                  Major Projects
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>


      {/* =========================================================
          BOTTOM LINE
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-red-400/60
          to-transparent
        "
      />

    </section>
  );
}