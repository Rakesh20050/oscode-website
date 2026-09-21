import { motion } from "framer-motion";
import BinaryBackground from "../components/BinaryBackground";
import GlassContainer from "../components/GlassContainer";
import PersonFlipCard from "../components/PersonFlipCard";
import TeamDepartmentCard from "../components/TeamDepartmentCard";

import {
  organizer,
  leadership,
  departments,
} from "../data/teamData";

export default function TeamPage() {

  return (
    <main className="team-page">

      <BinaryBackground />

      {/* HERO */}
      <section className="team-hero">

        <motion.div
          className="hero-small-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          OSCODE CIT / THE PEOPLE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Minds Behind
          <span> OSCODE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The people building, leading and shaping the
          open-source community at OSCODE CIT.
        </motion.p>

      </section>


      {/* ORGANIZER */}
      <section className="organizer-section">

        <GlassContainer className="organizer-container">

          <div className="section-label">
            Club Head
          </div>

          <div className="organizer-card-wrapper">

            <PersonFlipCard
              person={organizer}
            
            />

          </div>

        </GlassContainer>

      </section>


      {/* LEADERSHIP */}
      <section className="leadership-section">

        <div className="section-heading">

          

          <h2>
            The people
             leading the way.
          </h2>

        </div>

        <div className="leadership-grid">

          {leadership.map((person) => (
            <PersonFlipCard
              key={person.name}
              person={person}
            />
          ))}

        </div>

      </section>


      {/* DEPARTMENTS */}
      <section className="departments-section">

        <div className="section-heading">

        

          <h2>
            Different minds.
             One community.
          </h2>

        

        </div>


        <div className="department-grid">

          {departments.map((department) => (
            <TeamDepartmentCard
              key={department.name}
              department={department}
            />
          ))}

        </div>

      </section>


      {/* FOOTER STATEMENT */}
      <section className="team-ending">

        <GlassContainer>

          <span>OSCODE CIT</span>

          <h2>
            Built by people.
            <br />
            Powered by ideas.
          </h2>

          <p>
            Open source is more than code.
            It's a community.
          </p>

        </GlassContainer>

      </section>

    </main>
  );
}