import {
  CalendarDays,
  MapPin,
  RotateCw,
  ArrowRight,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import FlipCard from "../common/FlipCard";

const shorten = (text = "", max = 170) =>
  text.length > max ? `${text.slice(0, max).trim()}…` : text;

export default function EventCard({ event, onCardClick }) {
  const image = event.images?.[0] || event.image;

  const front = (
    <motion.article
      className="
        future-card
        event-card
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0a0a0b]
        transition-all
        duration-500
        hover:border-cyan-200/35
        hover:shadow-[0_20px_60px_rgba(103,232,249,.10)]
      "
    >
      {/* ================= SOFT HOVER GLOW ================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          rounded-3xl
          bg-gradient-to-br
          from-cyan-300/8
          via-blue-300/4
          to-transparent
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* ================= EVENT IMAGE ================= */}
      <div
        className="
          relative
          z-10
          mx-4
          mt-4
          h-64
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-black
          sm:h-72
          md:h-80
          lg:h-[350px]
          transition-all
          duration-700
          group-hover:border-cyan-200/35
          group-hover:shadow-[0_12px_40px_rgba(103,232,249,.10)]
        "
      >
        {/* Image */}
        <img
          src={image}
          alt={event.title}
          onError={(e) => {
            e.currentTarget.src = "/images/logos/logo.svg";
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* Cinematic overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/65
            via-black/10
            to-transparent
          "
        />

        {/* Light hover color */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-200/0
            via-blue-200/0
            to-purple-200/0
            opacity-0
            transition-all
            duration-700
            group-hover:from-cyan-200/8
            group-hover:via-blue-200/6
            group-hover:to-purple-200/10
            group-hover:opacity-100
          "
        />

        {/* Soft moving light */}
        <div
          className="
            pointer-events-none
            absolute
            -left-1/2
            top-0
            h-full
            w-[25%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/12
            to-transparent
            blur-2xl
            opacity-0
            transition-all
            duration-[1400ms]
            group-hover:left-[120%]
            group-hover:opacity-100
          "
        />

        {/* ================= EVENT TYPE ================= */}
        <span
          className="
            event-type
            transition-all
            duration-500
            group-hover:border-cyan-200/40
            group-hover:bg-cyan-100/10
            group-hover:text-cyan-100
          "
        >
          Event Album
        </span>

        {/* ================= DATE ================= */}
        <span
          className="
            event-date
            transition-all
            duration-500
            group-hover:border-blue-200/35
            group-hover:bg-blue-100/10
            group-hover:text-blue-50
          "
        >
          <CalendarDays size={13} />
          {event.date}
        </span>

        {/* ================= GALLERY BUTTON ================= */}
        <button
          className="
            image-arrow
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:bg-cyan-100/90
            group-hover:text-slate-900
            group-hover:border-cyan-100
            group-hover:shadow-[0_0_22px_rgba(103,232,249,.22)]
          "
          onClick={(e) => e.stopPropagation()}
          aria-label="Event gallery"
        >
          →
        </button>

        {/* ================= EXPLORE LABEL ================= */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            rounded-full
            border
            border-white/15
            bg-black/35
            px-5
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/70
            opacity-0
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:bottom-6
            group-hover:border-cyan-200/35
            group-hover:text-cyan-100
            group-hover:opacity-100
          "
        >
          Explore Event
        </div>
      </div>

      {/* ================= FRONT CONTENT ================= */}
      <div
        className="
          relative
          z-10
          px-5
          pb-5
          pt-5
          sm:px-6
          sm:pb-6
        "
      >
        {/* Title */}
        <h3
          className="
            text-xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-200
          "
        >
          {event.title}
        </h3>

        {/* Location */}
        <div
          className="
            meta-line
            mt-2
            transition-colors
            duration-300
            group-hover:text-cyan-100/80
          "
        >
          <MapPin
            size={15}
            className="
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:text-cyan-200
            "
          />

          <span>
            {event.venue || event.location}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3">
          {shorten(
            event.description || event.about,
            190
          )}
        </p>

        {/* Actions */}
        <div className="card-actions mt-5">
          <button
            className="
              outline-action
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-200
              hover:bg-cyan-100
              hover:text-slate-900
              hover:shadow-[0_10px_25px_rgba(103,232,249,.14)]
            "
            onClick={(e) => {
              e.stopPropagation();
              onCardClick?.(event);
            }}
          >
            View Details

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>

          <span
            className="
              flip-label
              transition-colors
              duration-300
              group-hover:text-cyan-200
            "
          >
            Flip

            <RotateCw
              size={14}
              className="
                transition-transform
                duration-700
                group-hover:rotate-180
              "
            />
          </span>
        </div>
      </div>
    </motion.article>
  );

  // ============================================================
  // BACK SIDE
  // ============================================================

  const back = (
    <motion.article
      className="
        future-card
        event-card
        event-back
        group
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:border-red-400/40
        hover:shadow-[0_20px_55px_rgba(239,68,68,.16)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-gradient-to-br
          from-red-500/[0.07]
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="back-topline relative z-10">
        <span>FULL EVENT DETAILS</span>

        <RotateCw
          size={17}
          className="
            transition-transform
            duration-500
            group-hover:rotate-180
          "
        />
      </div>

      <h3
        className="
          relative
          z-10
          transition-colors
          duration-300
          group-hover:text-red-300
        "
      >
        {event.title}
      </h3>

      <div className="detail-list relative z-10">
        <div
          className="
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-red-300
          "
        >
          <CalendarDays size={17} />
          <span>{event.date}</span>
        </div>

        <div
          className="
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-red-300
          "
        >
          <MapPin size={17} />
          <span>
            {event.venue || event.location}
          </span>
        </div>

        <div
          className="
            transition-all
            duration-300
            hover:translate-x-1
            hover:text-red-300
          "
        >
          <Users size={17} />
          <span>
            {shorten(event.participation, 150)}
          </span>
        </div>
      </div>

      <div
        className="
          detail-box
          relative
          z-10
          transition-all
          duration-300
          hover:border-red-400/30
        "
      >
        <strong>
          <BookOpen size={15} />
          ABOUT
        </strong>

        <p>{shorten(event.about, 230)}</p>
      </div>

      <div
        className="
          detail-box
          outcome
          relative
          z-10
          transition-all
          duration-300
          hover:border-red-400/30
        "
      >
        <strong>
          <Award size={15} />
          KEY OUTCOME
        </strong>

        <p>{shorten(event.outcome, 190)}</p>
      </div>

      <button
        className="
          primary-action
          relative
          z-10
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_12px_30px_rgba(239,68,68,.25)]
          active:scale-[.98]
        "
        onClick={(e) => {
          e.stopPropagation();
          onCardClick?.(event);
        }}
      >
        Open Full Details

        <ArrowRight
          size={15}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>
    </motion.article>
  );

  return (
    <FlipCard
      front={front}
      back={back}
      heightClass="min-h-[770px]"
      ariaLabel={`${event.title} event album`}
    />
  );
}