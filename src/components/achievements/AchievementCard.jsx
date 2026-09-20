import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Trophy,
  ArrowUpRight,
  X,
  Award,
  CheckCircle2,
  RotateCw,
} from "lucide-react";
import FlipCard from "../common/FlipCard";

const AchievementCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const front = (
    <motion.div
      onMouseMove={handleMouseMove}
      className="
        group
        relative
        flex
        h-full
        flex-col
        justify-between
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-b
        from-[#151517]/96
        to-[#070708]/98
        p-5
        shadow-[0_20px_50px_rgba(0,0,0,.28)]
        sm:p-6
      "
    >
      {/* Top Red Line */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-red-500
          to-transparent
          opacity-80
        "
      />

      {/* Mouse Glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(239,68,68,.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        {/* IMAGE
            Only image height increased.
        */}
        <div
          className="
            relative
            h-64
            sm:h-80
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-75
            "
          />

          {/* Badge */}
          <div
            className="
              absolute
              left-3
              top-3
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-black/75
              px-3
              py-1
              text-xs
              font-bold
              text-red-300
              backdrop-blur-md
            "
          >
            <Trophy
              size={13}
              className="os-icon-rotate text-red-400"
            />

            {item.badge}
          </div>
        </div>

        {/* Title + Metric */}
        <div
          className="
            mt-5
            flex
            items-baseline
            justify-between
            border-b
            border-white/10
            pb-4
          "
        >
          <div>
            <h3
              className="
                line-clamp-1
                text-xl
                font-bold
                text-white
                transition
                group-hover:text-red-300
              "
            >
              {item.name}
            </h3>

            <p className="mt-0.5 text-xs text-white/45">
              {item.role}
            </p>
          </div>

          <div className="shrink-0 pl-2 text-right">
            <span className="text-lg font-black text-red-300">
              {item.metric}
            </span>

            <p
              className="
                font-mono
                text-[10px]
                uppercase
                text-white/40
              "
            >
              {item.metricLabel}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-4
            line-clamp-3
            text-xs
            leading-relaxed
            text-white/65
            sm:text-sm
          "
        >
          {item.description}
        </p>
      </div>

      {/* Bottom */}
      <div
        className="
          relative
          z-10
          mt-6
          flex
          items-center
          justify-between
          border-t
          border-white/10
          pt-4
        "
      >
        <div className="flex flex-wrap gap-1.5">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-2.5
                py-0.5
                text-[11px]
                text-white/55
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className="
            flex
            items-center
            gap-1
            text-xs
            font-bold
            text-red-300
          "
        >
          Flip

          <RotateCw
            size={13}
            className="os-icon-rotate"
          />
        </span>
      </div>
    </motion.div>
  );

  const back = (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-red-500/45
        bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,.15),transparent_35%),linear-gradient(145deg,#171719,#070708)]
        p-5
        text-white
        shadow-[0_24px_65px_rgba(0,0,0,.45)]
        sm:p-6
      "
    >
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-red-400
          to-transparent
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className="
              rounded-full
              border
              border-red-400/30
              bg-red-500/10
              px-3
              py-1
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              text-red-300
            "
          >
            Recognition
          </span>

          <RotateCw
            size={16}
            className="
              text-red-300
              transition-transform
              duration-500
              group-hover:rotate-180
            "
          />
        </div>

        <h3 className="mt-5 text-2xl font-black">
          {item.name}
        </h3>

        <p
          className="
            mt-2
            line-clamp-5
            text-sm
            leading-relaxed
            text-white/70
          "
        >
          {item.fullDetails || item.description}
        </p>

        {item.highlights?.length > 0 && (
          <ul className="mt-5 space-y-2">
            {item.highlights.slice(0, 4).map((h, idx) => (
              <li
                key={idx}
                className="
                  flex
                  gap-2
                  text-xs
                  text-white/75
                "
              >
                <CheckCircle2
                  size={14}
                  className="
                    mt-0.5
                    shrink-0
                    text-red-400
                  "
                />

                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {item.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="
                  rounded-md
                  border
                  border-white/10
                  bg-white/5
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  text-white/60
                "
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-500
              px-4
              py-3
              text-xs
              font-black
              text-white
              shadow-[0_10px_30px_rgba(239,68,68,.22)]
              transition
              hover:bg-red-400
              active:scale-[.98]
            "
          >
            Open Full Details

            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <FlipCard
        front={front}
        back={back}
        ariaLabel={`${item.name} achievement card`}
      />

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-3
              sm:p-6
            "
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
                absolute
                inset-0
                bg-black/80
                backdrop-blur-md
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{ duration: 0.25 }}
              className="
                relative
                z-10
                flex
                max-h-[92vh]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-slate-300
                bg-white
                p-6
                text-slate-900
                shadow-2xl
                dark:border-[#EF4444]/30
                dark:bg-[#080e1e]
                dark:text-white
                sm:p-8
              "
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close dialog"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-slate-100
                  text-slate-700
                  transition
                  hover:bg-slate-200
                  dark:border-white/15
                  dark:bg-black/60
                  dark:text-slate-300
                  dark:hover:bg-white/20
                "
              >
                <X size={18} />
              </button>

              <div
                className="
                  grid
                  grid-cols-1
                  items-stretch
                  gap-6
                  overflow-y-auto
                  pr-1
                  sm:gap-8
                  lg:grid-cols-12
                "
              >
                {/* Image */}
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-start
                    lg:col-span-5
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-64
                      w-full
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-100
                      p-3
                      dark:border-white/10
                      dark:bg-black/70
                      sm:h-80
                      lg:h-[380px]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        max-h-full
                        max-w-full
                        select-none
                        object-contain
                      "
                    />
                  </div>

                  <div
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-4
                      dark:border-white/10
                      dark:bg-white/[0.03]
                    "
                  >
                    <div>
                      <p
                        className="
                          text-xs
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Award / Metric
                      </p>

                      <p
                        className="
                          text-base
                          font-bold
                          text-red-600
                          dark:text-[#FF4D4D]
                        "
                      >
                        {item.metric}
                      </p>
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-red-400/30
                        bg-red-500/10
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        text-red-700
                        dark:text-red-300
                      "
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div
                  className="
                    flex
                    flex-col
                    justify-start
                    space-y-5
                    lg:col-span-7
                  "
                >
                  <div>
                    <span
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-100
                        px-3
                        py-1
                        font-mono
                        text-xs
                        text-slate-700
                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-slate-300
                      "
                    >
                      {item.category} Milestone
                    </span>

                    <h2
                      className="
                        mt-3
                        text-2xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-slate-900
                        dark:text-white
                        sm:text-3xl
                      "
                    >
                      {item.name}
                    </h2>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-600
                        dark:text-slate-400
                      "
                    >
                      {item.role}
                    </p>
                  </div>

                  <div
                    className="
                      space-y-4
                      border-t
                      border-slate-200
                      pt-2
                      dark:border-white/10
                    "
                  >
                    <div>
                      <h3
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-red-600
                          dark:text-[#FF4D4D]
                        "
                      >
                        <Award size={14} />
                        Milestone Summary
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-sm
                          leading-relaxed
                          text-slate-700
                          dark:text-slate-200
                        "
                      >
                        {item.fullDetails || item.description}
                      </p>
                    </div>

                    {item.highlights &&
                      item.highlights.length > 0 && (
                        <div className="pt-2">
                          <h3
                            className="
                              mb-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-wider
                              text-red-600
                              dark:text-red-300
                            "
                          >
                            Key Recognition Points
                          </h3>

                          <ul className="space-y-1.5">
                            {item.highlights.map((h, idx) => (
                              <li
                                key={idx}
                                className="
                                  flex
                                  items-start
                                  gap-2
                                  text-xs
                                  text-slate-700
                                  dark:text-slate-300
                                  sm:text-sm
                                "
                              >
                                <CheckCircle2
                                  size={15}
                                  className="
                                    mt-0.5
                                    shrink-0
                                    text-red-600
                                    dark:text-[#FF4D4D]
                                  "
                                />

                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    <div className="pt-2">
                      <h3
                        className="
                          mb-2
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        Categories & Tags
                      </h3>

                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="
                              rounded-full
                              border
                              border-slate-200
                              bg-slate-100
                              px-2.5
                              py-0.5
                              text-xs
                              text-slate-700
                              dark:border-white/10
                              dark:bg-white/5
                              dark:text-slate-300
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AchievementCard;