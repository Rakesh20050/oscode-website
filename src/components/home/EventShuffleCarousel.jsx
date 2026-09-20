import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import events from "../../data/events";

export default function EventShuffleCarousel() {
  const featuredEvents = events.slice(0, 6);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % featuredEvents.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, featuredEvents.length]);

  const activeEvent = featuredEvents[currentIndex];

  const activeImage =
    activeEvent?.images?.[0] ||
    "/images/events/bengaluru-tech-summit-2025/bts25-1.webp";

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* =====================================================
          OUTER 3D GLOW
      ===================================================== */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.55 : 0.3,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="
          absolute
          -inset-5
          rounded-[2.4rem]
          bg-gradient-to-r
          from-red-400/50
          via-red-500/40
          to-red-600/50
          blur-2xl
          pointer-events-none
        "
      />

      {/* Secondary glow */}
      <div
        className="
          absolute
          -inset-2
          rounded-[2.2rem]
          bg-gradient-to-r
          from-red-400/20
          via-red-500/20
          to-red-500/25
          blur-xl
          pointer-events-none
        "
      />

      {/* =====================================================
          3D PERSPECTIVE WRAPPER
      ===================================================== */}
      <div
        className="
          relative
          [perspective:1400px]
        "
      >

        {/* =================================================
            MAIN 3D CARD
        ================================================= */}
        <motion.div
          animate={{
            rotateY: isHovered ? -1.5 : -3.5,
            rotateX: isHovered ? 0.5 : 1,
            y: isHovered ? -6 : 0,
            scale: isHovered ? 1.01 : 1,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-red-400/25
            bg-[#06111f]/95
            p-4
            sm:p-5
            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            transition-colors
            duration-500
          "
        >

          {/* =================================================
              3D LEFT INNER EDGE
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-6
              bottom-6
              w-1
              rounded-full
              bg-gradient-to-b
              from-transparent
              via-red-400/70
              to-transparent
              opacity-60
            "
          />

          {/* =================================================
              3D RIGHT OUTER EDGE
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-4
              bottom-4
              w-[3px]
              rounded-full
              bg-gradient-to-b
              from-red-300/80
              via-red-400/60
              to-red-500/70
              shadow-[0_0_18px_rgba(34,211,238,0.5)]
            "
          />

          {/* =================================================
              TOP HEADER
          ================================================= */}
          <div className="relative z-20 mb-4 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span
                className="
                  relative
                  flex
                  h-3
                  w-3
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    absolute
                    h-3
                    w-3
                    rounded-full
                    bg-red-400/30
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-red-400
                    shadow-[0_0_12px_rgba(34,211,238,0.8)]
                  "
                />
              </span>

              <span
                className="
                  font-mono
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-red-300
                "
              >
                Event Highlights
              </span>
            </div>

            {/* Small decorative line */}
            <div
              className="
                hidden
                sm:block
                h-px
                w-20
                bg-gradient-to-r
                from-red-400/50
                to-transparent
              "
            />
          </div>


          {/* =================================================
              IMAGE WINDOW
          ================================================= */}
          <div
            className="
              relative
              aspect-[16/9]
              w-full
              overflow-hidden
              rounded-[1.35rem]
              border
              border-white/10
              bg-slate-950
              shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]
            "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                  x: 25,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  x: -25,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="absolute inset-0"
              >

                {/* Event Image */}
                <img
                  src={activeImage}
                  alt={activeEvent?.title || "Event"}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                  "
                />

                {/* Image dark bottom */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/95
                    via-black/35
                    to-transparent
                  "
                />

                {/* Left cinematic gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/65
                    via-transparent
                    to-transparent
                  "
                />

                {/* Cyan ambient glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-red-500/10
                    via-transparent
                    to-red-600/10
                    pointer-events-none
                  "
                />


                {/* =================================================
                    EVENT CONTENT
                ================================================= */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-4
                    sm:p-6
                    md:p-7
                  "
                >

                  {/* Meta information */}
                  <div
                    className="
                      mb-2
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >

                    {/* Category */}
                    <span
                      className="
                        rounded-full
                        border
                        border-red-400/50
                        bg-red-500/20
                        px-3
                        py-1
                        text-[10px]
                        sm:text-[11px]
                        font-mono
                        font-bold
                        text-red-300
                        backdrop-blur-md
                      "
                    >
                      {activeEvent?.category || "Event"}
                    </span>


                    {/* Date */}
                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        sm:text-[11px]
                        font-mono
                        text-slate-200
                      "
                    >
                      <Calendar
                        size={12}
                        className="text-red-400"
                      />

                      {activeEvent?.date}
                    </span>


                    {/* Location */}
                    <span
                      className="
                        hidden
                        sm:flex
                        items-center
                        gap-1
                        max-w-[300px]
                        truncate
                        text-[10px]
                        sm:text-[11px]
                        font-mono
                        text-slate-200
                      "
                    >
                      <MapPin
                        size={12}
                        className="text-red-400"
                      />

                      {activeEvent?.location}
                    </span>

                  </div>


                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      sm:text-2xl
                      md:text-3xl
                      font-extrabold
                      leading-tight
                      text-white
                      drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]
                    "
                  >
                    {activeEvent?.title}
                  </h3>


                  {/* Description */}
                  <p
                    className="
                      mt-1
                      line-clamp-2
                      max-w-2xl
                      text-xs
                      sm:text-sm
                      leading-relaxed
                      text-slate-200
                    "
                  >
                    {activeEvent?.description ||
                      activeEvent?.about}
                  </p>


                  {/* Explore Button */}
                  <div className="mt-4">

                    <Link
                      to="/events"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-red-400/50
                        bg-red-500/25
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-red-200
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:border-red-300
                        hover:bg-red-400/40
                        hover:text-white
                        hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
                        active:scale-95
                      "
                    >

                      <span>
                        Explore All Events
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />

                    </Link>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>
          </div>


          {/* =================================================
              SLIDE INDICATORS
          ================================================= */}
          <div
            className="
              relative
              z-20
              mt-4
              flex
              items-center
              justify-center
              gap-2
            "
          >

            {featuredEvents.map((ev, idx) => (

              <button
                key={ev.id || idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`
                  relative
                  h-2
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    idx === currentIndex
                      ? "w-9 bg-red-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
                      : "w-2 bg-slate-600 hover:w-4 hover:bg-slate-400"
                  }
                `}
              />

            ))}

          </div>

        </motion.div>
      </div>


      {/* =====================================================
          3D FLOOR SHADOW
      ===================================================== */}
      <div
        className="
          absolute
          -bottom-5
          left-[10%]
          right-[5%]
          h-8
          rounded-full
          bg-red-500/20
          blur-2xl
          pointer-events-none
        "
      />

    </div>
  );
}