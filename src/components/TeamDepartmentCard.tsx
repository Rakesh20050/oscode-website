import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Department } from "../data/teamData";

interface Props {
  department: Department;
}

export default function TeamDepartmentCard({
  department,
}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/team/${department.shortName
        .toLowerCase()
        .replace("&", "")
        .replace(" ", "-")}`
    );
  };

  return (
    <article
      className={`department-card department-${department.accent}`}
    >
      {/* Animated border */}
      <div className="department-card-border" />

      {/* Glass body */}
      <div className="department-card-inner">

        {/* Background glow */}
        <div className="department-card-glow" />

        {/* Lead image */}
        <div className="department-lead-image">
          <img
            src={department.lead.image}
            alt={department.lead.name}
          />
        </div>

        {/* Content */}
        <div className="department-content">

          

          <h3>{department.name}</h3>

          <p>
            {department.description}
          </p>

          <div className="department-lead-info">
          
            <strong>{department.lead.name}</strong>
          </div>

        </div>

        {/* Meet team button */}
        <button
          className="meet-team-button"
          onClick={handleClick}
        >
          <span>MEET TEAM</span>

          <span className="meet-team-arrow">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </button>

      </div>
    </article>
  );
}