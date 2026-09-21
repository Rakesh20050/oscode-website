import type { Person } from "../data/teamData";

interface Props {
  person: Person;
  accent?: "blue" | "cyan" | "purple" | "green";
}

export default function DepartmentLeadCard({
  person,
  accent = "blue",
}: Props) {
  return (
    <div className={`department-lead-card-new accent-${accent}`}>
      
      {/* Rotating colorful border */}
      <div className="department-lead-rotating-border" />

      {/* Main glass card */}
      <div className="department-lead-card-content">

        {/* Ambient glow */}
        <div className="department-lead-ambient-glow" />

       

        {/* Image */}
        <div className="department-lead-photo">

          <img
            src={person.image}
            alt={person.name}
          />

          <div className="department-lead-photo-overlay" />

        </div>

        
        {/* Small decorative line */}
        <div className="department-lead-card-line" />

        
      </div>
    </div>
  );
}