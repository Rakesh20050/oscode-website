import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Users, Sparkles, Bell, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Container from "../components/common/Container";
import PageIntro from "../components/common/PageIntro";
import NeonFrame from "../components/common/NeonFrame";
import EventCard from "../components/events/EventCard";
import events from "../data/events";

export default function Events() {
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const upcoming = useMemo(() => events.filter((e) => e.isUpcoming), []);
  const past = useMemo(() => events.filter((e) => !e.isUpcoming), []);
  const list = tab === "upcoming" ? upcoming : tab === "past" ? past : events;

  const open = (event) => { setSelected(event); setImageIndex(0); };
  const next = () => setImageIndex((i) => (i + 1) % (selected?.images?.length || 1));
  const prev = () => setImageIndex((i) => (i - 1 + (selected?.images?.length || 1)) % (selected?.images?.length || 1));

  return (
    <main className="future-page">
      <Container className="!max-w-[1580px]">
        <PageIntro
          icon={CalendarDays}
          eyebrow="OSCODE / ACTIVITY REGISTRY"
          title="Our"
          accent="Events"
          description="Workshops, seminars, hackathons, visits, and community sessions that help OSCode CIT students learn, collaborate, and build together."
          stats={[{ value: `${events.length}+`, label: "Events Conducted", icon: CalendarDays }, { value: "500+", label: "Participants", icon: Users }, { value: "8+", label: "Collaboration", icon: Sparkles }]}
        />
        <div className="future-tabs">
          {[['all', `All Events (${events.length})`], ['upcoming', `Upcoming (${upcoming.length})`], ['past', `Past Events (${past.length})`]].map(([id, label]) => (
            <button key={id} className={tab === id ? "active" : ""} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>
        {tab === "upcoming" && upcoming.length === 0 ? (
          <div className="empty-state"><Bell size={28}/><h3>No Upcoming Events Right Now</h3><p>New workshops, technical sessions, and community activities will appear here.</p></div>
        ) : (
          <NeonFrame eyebrow="EVENT COLLECTION" title="Event Photo Albums" description="Every event has its own complete card with readable details, image, location, and actions.">
            <div className="future-grid three-col">
              {list.map((event, index) => <motion.div key={event.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ delay: index * .035 }}><EventCard event={event} onCardClick={open}/></motion.div>)}
            </div>
          </NeonFrame>
        )}
      </Container>

      <AnimatePresence>
        {selected && (
          <div className="modal-layer">
            <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} />
            <motion.div className="detail-modal event-modal" initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }}>
              <button className="modal-close" onClick={() => setSelected(null)}><X size={19}/></button>
              <div className="event-modal-grid">
                <div className="modal-gallery">
                  <img src={selected.images?.[imageIndex] || selected.image} alt={selected.title}/>
                  {selected.images?.length > 1 && <><button onClick={prev} className="gallery-btn left"><ChevronLeft/></button><button onClick={next} className="gallery-btn right"><ChevronRight/></button></>}
                </div>
                <div className="modal-copy">
                  <span className="future-eyebrow">{selected.date}</span>
                  <h2>{selected.title}</h2>
                  <div className="meta-line"><MapPin size={16}/>{selected.venue || selected.location}</div>
                  <div className="modal-section"><h4>ABOUT</h4><p>{selected.about}</p></div>
                  <div className="modal-section"><h4>OSCODE PARTICIPATION</h4><p>{selected.participation}</p></div>
                  <div className="modal-section outcome"><h4>KEY OUTCOME</h4><p>{selected.outcome}</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
