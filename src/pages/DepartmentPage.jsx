import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import BinaryBackground from "../components/BinaryBackground";
import DepartmentLeadCard from "../components/DepartmentLeadCard";
import "./DepartmentPage.css";

import { departments } from "../data/teamData";

export default function DepartmentPage() {
  const { department } = useParams();

  // Find the department from the URL
  const currentDepartment = departments.find(
    (item) =>
      item.shortName
        .toLowerCase()
        .replace("&", "")
        .replace(" ", "-") === department?.toLowerCase()
  );

  // --------------------------------------------------
  // DEPARTMENT NOT FOUND
  // --------------------------------------------------

  if (!currentDepartment) {
    return (
      <main className="department-page">
        <BinaryBackground />

        <div className="department-not-found">
        

          <h1>Department Not Found</h1>

          <p>
            The department you are looking for does not exist
            or the URL is incorrect.
          </p>

          <Link to="/team">
            <ArrowLeft size={16} />
            <span>Back to Team</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`department-page department-page-${currentDepartment.accent}`}
    >
      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <BinaryBackground />

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section className="department-page-hero">

        {/* Back button */}

        <Link
          to="/team"
          className="back-to-team"
        >
          <ArrowLeft size={80} />

          <span> BACK TO TEAM</span>
        </Link>

      

       

        {/* Department name */}

        <h1>
          {currentDepartment.name}
        </h1>

      

      </section>

      {/* ==================================================
          LEAD SECTION
      ================================================== */}

      <section className="department-lead-section">

        {/* ------------------------------------------------
            LEFT — DEPARTMENT LEAD CARD
            Static card. NO FLIP.
        ------------------------------------------------ */}

        <div className="department-lead-card">

          <DepartmentLeadCard
            person={currentDepartment.lead}
            accent={currentDepartment.accent}
          />

        </div>

        {/* ------------------------------------------------
            RIGHT — LEAD INFORMATION
        ------------------------------------------------ */}

        <div className="department-lead-description">

          <span className="section-eyebrow">
            THE PERSON BEHIND THE TEAM
          </span>

          <h2>
            {currentDepartment.lead.name}
          </h2>

          <span className="lead-role">
            {currentDepartment.lead.role}
          </span>

          {/* About Lead */}

          <div className="lead-description-block">

            <h3>
              About the Team
            </h3>

            <p>
              {currentDepartment.lead.description}
            </p>

          </div>

          {/* Contribution */}

          <div className="lead-contribution-block">

            <h3>
              Contribution in OSCODE
            </h3>

            <p>
              As the{" "}
              {currentDepartment.lead.role},{" "}
              this role focuses on strengthening the
              department, supporting its members,
              contributing to OSCODE initiatives,
              and helping turn ideas into meaningful
              activities and projects.
            </p>

          </div>

          {/* Skills */}

          {currentDepartment.lead.skills &&
            currentDepartment.lead.skills.length > 0 && (
              <div className="department-lead-skills">

                {currentDepartment.lead.skills.map(
                  (skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  )
                )}

              </div>
            )}

          {/* Social links */}

          {(currentDepartment.lead.github ||
            currentDepartment.lead.linkedin) && (
            <div className="department-lead-socials">

              {currentDepartment.lead.github && (
                <a
                  href={currentDepartment.lead.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight size={16} />
                </a>
              )}

              {currentDepartment.lead.linkedin && (
                <a
                  href={currentDepartment.lead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight size={16} />
                </a>
              )}

            </div>
          )}

        </div>

      </section>

      {/* ==================================================
          SECTION DIVIDER
      ================================================== */}

      <div className="department-section-divider">
        <span />
      </div>

      {/* ==================================================
          TEAM MEMBERS SECTION
      ================================================== */}

      <section className="department-members-section">

        {/* ------------------------------------------------
            MEMBERS HEADING
        ------------------------------------------------ */}

        <div className="members-heading">

          <div>

            <span className="section-eyebrow">
              THE PEOPLE
            </span>

            <h2>
              {currentDepartment.name}
              <br />

              <span>
                TEAM MEMBERS
              </span>
            </h2>

          </div>

          {/* Member count */}

          <div className="members-count">

            <strong>
              {String(
                currentDepartment.members.length
              ).padStart(2, "0")}
            </strong>

            <span>
              MEMBERS
            </span>

          </div>

        </div>

        {/* ------------------------------------------------
            MEMBER CARDS
        ------------------------------------------------ */}

        <div className="department-members-grid">

          {currentDepartment.members.map(
            (
             member,index
            ) => (

              <article
                className="department-member-card"
                key={member.name}
              >

                {/* Number */}

                <div className="member-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image */}

                <div className="member-image">

                  <img
                    src={member.image}
                    alt={member.name}
                  />

                </div>

                {/* Member information */}

                <div className="member-info">

                  <div>

                    {/* Role */}

                    {member.role && (
                      <span>
                        {member.role}
                      </span>
                    )}

                    {/* Name */}

                    <h3>
                      {member.name}
                    </h3>

                  </div>

                  {/* Social links */}

                  {(member.github ||
                    member.linkedin) && (
                    <div className="member-socials">

                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} GitHub`}
                        >
                          <ArrowUpRight
                            size={15}
                          />
                        </a>
                      )}

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <ArrowUpRight
                            size={15}
                          />
                        </a>
                      )}

                    </div>
                  )}

                </div>

              </article>

            )
          )}

        </div>

      </section>

      {/* ==================================================
          BOTTOM CTA
      ================================================== */}

      <section className="department-page-bottom">

        <span>
          OSCODE CIT
        </span>

        <h2>
          BUILD. COLLABORATE.
          <br />
          CONTRIBUTE.
        </h2>

        <p>
          Explore the people, ideas and teams
          that make OSCODE CIT a community of
          builders and contributors.
        </p>

        <Link to="/team">

          <span>
            EXPLORE ALL TEAMS
          </span>

          <ArrowUpRight size={17} />

        </Link>

      </section>

    </main>
  );
}