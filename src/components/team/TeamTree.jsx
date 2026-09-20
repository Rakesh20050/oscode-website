import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Shield,
  Code,
  FlaskConical,
  Share2,
  Search,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import team from "../../data/team";

const facultyNode = {
  id: "faculty-1",
  name: "OSCode CIT Faculty Coordinator",
  role: "Faculty Advisor & Mentor",
  department: "Administration & Guidance",
  image: "/images/logos/logo.svg",
  linkedin: "https://www.linkedin.com/company/oscodecit/",
  github: "https://github.com/oscode-cit",
  instagram: "https://www.instagram.com/oscodecit",
  bio: "Guiding OSCode CIT students towards open-source excellence, research initiatives, and technical innovation at Cambridge Institute of Technology.",
};

export default function TeamTree() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Initially collapsed to show ONLY faculty/leads first as requested
  const [expandedNodes, setExpandedNodes] = useState({
    root: true,
    leadership: false,
    tech: false,
    rnd: false,
    social: false,
  });

  const toggleNode = (nodeId) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const expandAll = () => {
    setExpandedNodes({
      root: true,
      leadership: true,
      tech: true,
      rnd: true,
      social: true,
    });
  };

  const collapseAll = () => {
    setExpandedNodes({
      root: false,
      leadership: false,
      tech: false,
      rnd: false,
      social: false,
    });
  };

  const leadershipMembers = team.filter((m) => m.department === "Leadership");
  const rndLeads = team.filter((m) => m.department === "R&D" && m.role.toLowerCase().includes("lead"));
  const rndMembers = team.filter((m) => m.department === "R&D" && !m.role.toLowerCase().includes("lead"));
  const techLeads = team.filter((m) => m.department === "Tech" && m.role.toLowerCase().includes("lead"));
  const techMembers = team.filter((m) => m.department === "Tech" && !m.role.toLowerCase().includes("lead"));
  const socialLeads = team.filter((m) => m.department === "Social Media & Events" && m.role.toLowerCase().includes("lead"));
  const socialMembers = team.filter((m) => m.department === "Social Media & Events" && !m.role.toLowerCase().includes("lead"));

  const filteredTeam = searchTerm
    ? team.filter(
        (m) =>
          m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.department.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <div className="relative w-full">
      {/* Search & Tree Control Toolbar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border dark:border-red-500/30 border-slate-300 dark:bg-[#070d1b]/90 bg-white p-5 shadow-xl backdrop-blur-xl">
        <div className="relative flex-1 min-w-[260px]">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 dark:text-red-400" />
          <input
            type="text"
            placeholder="Search member name, role, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border dark:border-white/10 border-slate-300 dark:bg-black/50 bg-slate-50 py-3 pl-12 pr-4 text-sm dark:text-white text-slate-900 placeholder-slate-400 focus:border-red-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={expandAll}
            className="flex items-center gap-2 rounded-2xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 px-4 py-2 text-xs font-mono font-medium dark:text-slate-300 text-slate-700 hover:border-red-500 transition shadow-xs"
          >
            <Maximize2 size={14} className="text-red-600 dark:text-red-400" />
            <span>Expand All</span>
          </button>
          <button
            onClick={collapseAll}
            className="flex items-center gap-2 rounded-2xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 px-4 py-2 text-xs font-mono font-medium dark:text-slate-300 text-slate-700 hover:border-red-500 transition shadow-xs"
          >
            <Minimize2 size={14} className="text-red-600 dark:text-red-400" />
            <span>Collapse</span>
          </button>
        </div>
      </div>

      {filteredTeam ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeam.map((member) => (
            <TreeNodeCard
              key={member.id}
              member={member}
              onSelect={() => setSelectedMember(member)}
            />
          ))}
        </div>
      ) : (
        <div className="relative flex flex-col items-center space-y-6">
          {/* ROOT NODE (Faculty / Lead) */}
          <div className="flex flex-col items-center">
            <TreeNodeCard
              member={facultyNode}
              isRoot
              expanded={expandedNodes.root}
              onToggle={() => toggleNode("root")}
              onSelect={() => setSelectedMember(facultyNode)}
            />
            {expandedNodes.root && (
              <div className="h-10 w-1 bg-gradient-to-b from-red-400 to-red-600 my-1 animate-pulse rounded-full" />
            )}
          </div>

          {/* LEVEL 1: EXECUTIVE LEADERSHIP BRANCH */}
          <AnimatePresence>
            {expandedNodes.root && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full flex flex-col items-center"
              >
                <div className="mb-6 flex items-center gap-2 rounded-full border dark:border-red-400/40 border-red-400 dark:bg-red-500/10 bg-red-100 px-5 py-2 font-mono text-xs font-bold text-red-700 dark:text-red-300 shadow-lg cursor-pointer hover:bg-red-200 transition" onClick={() => toggleNode("leadership")}>
                  <Shield size={16} className="text-red-600 dark:text-red-400" />
                  <span>Executive Leadership</span>
                  <span className="ml-1">{expandedNodes.leadership ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
                </div>

                <AnimatePresence>
                  {expandedNodes.leadership && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full flex flex-wrap justify-center gap-6 mb-8"
                    >
                      {leadershipMembers.map((lead) => (
                        <TreeNodeCard
                          key={lead.id}
                          member={lead}
                          onSelect={() => setSelectedMember(lead)}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="h-10 w-1 bg-gradient-to-b from-red-600 to-red-600 my-4 rounded-full" />

                {/* LEVEL 2: DEPARTMENT BRANCHES */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                  <DepartmentBranch
                    title="Technology & Engineering"
                    icon={Code}
                    expanded={expandedNodes.tech}
                    onToggle={() => toggleNode("tech")}
                    leads={techLeads}
                    members={techMembers}
                    onSelectMember={setSelectedMember}
                  />

                  <DepartmentBranch
                    title="Research & Development"
                    icon={FlaskConical}
                    expanded={expandedNodes.rnd}
                    onToggle={() => toggleNode("rnd")}
                    leads={rndLeads}
                    members={rndMembers}
                    onSelectMember={setSelectedMember}
                  />

                  <DepartmentBranch
                    title="Social Media & Events"
                    icon={Share2}
                    expanded={expandedNodes.social}
                    onToggle={() => toggleNode("social")}
                    leads={socialLeads}
                    members={socialMembers}
                    onSelectMember={setSelectedMember}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {selectedMember && (
        <MemberDetailModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  );
}

function TreeNodeCard({ member, isRoot = false, expanded, onToggle, onSelect }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex items-center gap-5 rounded-3xl border p-5 shadow-xl backdrop-blur-2xl transition-all cursor-pointer ${
        isRoot
          ? "border-red-500 dark:text-white text-slate-900 text-white min-w-[320px] shadow-red-500/20"
          : "dark:border-white/15 border-slate-300 dark:bg-[#091124]/95 bg-white hover:border-red-400 dark:text-slate-100 text-slate-900"
      }`}
      onClick={onSelect}
    >
      {/* Significantly larger profile picture */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-red-400/40 shadow-md bg-slate-200 dark:bg-slate-800">
        <img
          src={member.image || "/images/logos/logo.svg"}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
          }}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="truncate text-base font-bold dark:text-white text-slate-900 group-hover:text-red-500 dark:group-hover:text-red-300 transition-colors">
            {member.name}
          </h4>
          {onToggle && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="rounded-xl p-1.5 dark:text-slate-400 text-slate-500 hover:bg-slate-200 dark:hover:bg-white/10 transition"
              aria-label="Toggle node"
            >
              {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
          )}
        </div>
        <p className="truncate font-mono text-xs text-red-600 dark:text-red-400 font-semibold mt-0.5">{member.role}</p>
        <span className="inline-block mt-2 rounded-lg dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-200 px-2.5 py-0.5 font-mono text-[10px] dark:text-slate-300 text-slate-600 shadow-xs">
          {member.department}
        </span>
      </div>
    </motion.div>
  );
}

function DepartmentBranch({title,icon: Icon,expanded,onToggle,leads,members,onSelectMember}){
  return (
    <div className="flex flex-col items-center rounded-3xl border dark:border-white/15 border-slate-200 dark:bg-[#060c18]/90 bg-white p-6 shadow-2xl backdrop-blur-xl">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 rounded-2xl border dark:border-red-500/40 border-red-300 dark:bg-red-500/10 bg-red-50 px-5 py-3.5 font-mono text-xs font-bold text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-500/20 transition shadow-sm"
      >
        <div className="flex items-center gap-2.5">
          <Icon size={18} className="text-red-600 dark:text-red-400" />
          <span className="text-sm font-bold">{title}</span>
        </div>
        {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>

      {/* Initially, sub-departments/members are collapsed until the department is clicked */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full mt-5 space-y-4 overflow-hidden"
          >
            {leads.length > 0 && (
              <div>
                <span className="font-mono text-[11px] uppercase text-red-600 dark:text-red-400 font-bold tracking-wider mb-3 block">
                  Department Lead(s)
                </span>
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <TreeNodeCard
                      key={lead.id}
                      member={lead}
                      onSelect={() => onSelectMember(lead)}
                    />
                  ))}
                </div>
              </div>
            )}

            {members.length > 0 && (
              <div className="pt-3 border-t dark:border-white/10 border-slate-200">
                <span className="font-mono text-[11px] uppercase dark:text-slate-400 text-slate-500 font-bold tracking-wider mb-3 block">
                  Core Members ({members.length})
                </span>
                <div className="space-y-3">
                  {members.map((mem) => (
                    <TreeNodeCard
                      key={mem.id}
                      member={mem}
                      onSelect={() => onSelectMember(mem)}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MemberDetailModal({ member, onClose }) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 25 }}
          className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border dark:border-red-500/40 border-slate-300 dark:bg-[#070e1e]/95 bg-white p-8 shadow-2xl dark:text-white text-slate-900 backdrop-blur-2xl"
        >
          <div className="flex justify-end">
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="rounded-xl p-2 dark:text-slate-400 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10 transition"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center text-center -mt-4">
            {/* Large high-res profile photo in popup */}
            <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-2 border-red-400 shadow-2xl shadow-red-500/40 bg-slate-200 dark:bg-slate-800">
              <img
                src={member.image || "/images/logos/logo.svg"}
                alt={member.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
                }}
              />
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-black dark:text-white text-slate-900">{member.name}</h3>
            <p className="font-mono text-sm sm:text-base font-bold text-red-600 dark:text-red-400 mt-1">{member.role}</p>
            <span className="mt-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-1 font-mono text-xs font-semibold text-red-700 dark:text-red-300">
              {member.department}
            </span>

            {member.bio && (
              <p className="mt-4 text-sm dark:text-slate-300 text-slate-600 leading-relaxed max-w-sm">{member.bio}</p>
            )}

            <div className="mt-8 flex items-center justify-center gap-4 w-full pt-6 border-t dark:border-white/10 border-slate-200">
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 px-5 py-2.5 text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800 transition hover:border-red-500 hover:bg-red-500/10"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 px-5 py-2.5 text-xs sm:text-sm font-bold text-red-600 transition hover:border-red-400 hover:bg-red-500/10"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              )}

              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-2xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-slate-100 px-5 py-2.5 text-xs sm:text-sm font-bold text-pink-600 transition hover:border-pink-400 hover:bg-pink-500/10"
                >
                  <FaInstagram size={18} />
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}