import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import PrimaryButton from "../common/PrimaryButton";
import EventCard from "../events/EventCard";
import { motion, AnimatePresence } from "framer-motion";
import events from "../../data/events";
import AlbumFrame from "../common/AlbumFrame";
import {
  Calendar,
  MapPin,
  X,
  Award,
  Users,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const FeaturedEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    if (selectedEvent?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
    }
  };

  const previousImage = (e) => {
    e?.stopPropagation();
    if (selectedEvent?.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
      );
    }
  };

  const hasMultipleImages = selectedEvent?.images && selectedEvent.images.length > 1;

  return (
    <section className="py-16 sm:py-20 md:py-25 overflow-hidden relative">
      <Container>
        <SectionHeading
          badge="Featured Events"
          title="Learn, Build & Grow With Us"
          description="From workshops to hackathons, explore the events that shape the OSCode CIT community."
        />

        <AlbumFrame
          className="mt-16"
          eyebrow="Featured Events"
          title="Event Photo Albums"
          description="Browse complete event albums without overlays or cropped cards. Click an album to flip it for the full event story."
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.06 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.10 } },
            }}
            className="grid grid-cols-1 items-stretch gap-8 lg:gap-9 md:grid-cols-2 xl:grid-cols-3"
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="min-w-0"
              >
                <EventCard event={event} onCardClick={() => handleOpenModal(event)} />
              </motion.div>
            ))}
          </motion.div>
        </AlbumFrame>

        <div className="mt-14 flex justify-center">
          <Link to="/events">
            <PrimaryButton>View All Events</PrimaryButton>
          </Link>
        </div>
      </Container>

      {/* Global Fixed Modal completely outside the Marquee flow */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border dark:border-[#EF4444]/30 border-slate-300 dark:bg-[#080e1e] bg-white p-6 sm:p-8 shadow-2xl z-10 flex flex-col dark:text-white text-slate-900"
            >
              <button
                onClick={handleCloseModal}
                aria-label="Close dialog"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border dark:border-white/15 border-slate-300 dark:bg-black/60 bg-slate-100 dark:text-slate-300 text-slate-700 hover:bg-slate-200 dark:hover:bg-white/20 transition"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch overflow-y-auto pr-1">
                <div className="lg:col-span-5 flex flex-col items-center justify-start">
                  <div className="relative h-72 sm:h-96 lg:h-[460px] w-full overflow-hidden rounded-2xl border dark:border-white/10 border-slate-200 dark:bg-black/70 bg-slate-100 flex items-center justify-center p-2">
                    <img
                      src={selectedEvent.images?.[currentImageIndex] || selectedEvent.image}
                      alt={selectedEvent.title}
                      className="max-h-full max-w-full object-contain select-none"
                    />

                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={previousImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/90 transition"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white backdrop-blur-sm hover:bg-black/90 transition"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-start space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-400/40 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-300">
                      <Calendar size={13} />
                      {selectedEvent.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 px-3 py-1 text-xs dark:text-slate-300 text-slate-700">
                      <MapPin size={13} className="text-red-600 dark:text-red-400" />
                      {selectedEvent.venue ? selectedEvent.venue.split(",")[0] : selectedEvent.location}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
                    {selectedEvent.title}
                  </h2>

                  <div className="space-y-4 pt-2 border-t dark:border-white/10 border-slate-200">
                    {selectedEvent.about && (
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300 flex items-center gap-1.5">
                          <BookOpen size={14} />
                          About the Event
                        </h3>
                        <p className="mt-1.5 text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                          {selectedEvent.about}
                        </p>
                      </div>
                    )}

                    {selectedEvent.participation && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300 flex items-center gap-1.5">
                          <Users size={14} />
                          OSCode CIT Participation
                        </h3>
                        <p className="mt-1.5 text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                          {selectedEvent.participation}
                        </p>
                      </div>
                    )}

                    {selectedEvent.outcome && (
                      <div className="pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <Award size={14} />
                          Key Learning & Outcomes
                        </h3>
                        <p className="mt-1.5 text-sm dark:text-slate-200 text-slate-700 leading-relaxed">
                          {selectedEvent.outcome}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedEvents;