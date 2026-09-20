import { motion } from "framer-motion";
import { RotateCw, Users } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import FlipCard from "../common/FlipCard";

const MemberCard = ({ member }) => {
  const socials = [
    { href: member.github, icon: FaGithub, label: "GitHub" },
    { href: member.linkedin, icon: FaLinkedin, label: "LinkedIn" },
    { href: member.instagram, icon: FaInstagram, label: "Instagram" },
  ].filter((item) => item.href);

  const front = (
    <motion.div className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#151517]/96 via-[#0d0d0f]/98 to-[#070708]/98 p-5 text-center shadow-[0_20px_50px_rgba(0,0,0,.28)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />
      <div className="pointer-events-none absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-red-500/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-red-500/20" />
      <div className="relative mt-2">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-red-500 via-white/30 to-red-800 opacity-35 blur-sm transition-all duration-500 group-hover:opacity-80 group-hover:blur-md" />
        <img
          src={member.image}
          alt={member.name}
          className="relative h-24 w-24 rounded-full border-2 border-white/15 object-cover shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:border-red-300"
          onError={(e) => { e.currentTarget.src = "/images/logos/logo.svg"; }}
        />
      </div>
      <div className="relative z-10 mt-4 flex w-full flex-1 flex-col justify-between">
        <div>
          <h3 className="text-base font-black tracking-tight text-white transition group-hover:text-red-300">{member.name}</h3>
          <span className="mt-1.5 inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/65">{member.role}</span>
          {member.department && <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-red-300/70">{member.department}</p>}
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s ${label}`}
              onClick={(e) => e.stopPropagation()}
              className="group/icon flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/65 transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-300"
            >
              <Icon size={15} className="transition-transform duration-500 group-hover/icon:rotate-180" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const back = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-red-500/45 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,.15),transparent_35%),linear-gradient(145deg,#171719,#070708)] p-5 text-white shadow-[0_24px_65px_rgba(0,0,0,.45)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-red-300">Team Profile</span>
          <RotateCw size={16} className="text-red-300 transition-transform duration-500 group-hover:rotate-180" />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/25 bg-red-500/10 text-red-300">
            <Users size={21} className="os-icon-rotate" />
          </div>
          <div>
            <h3 className="text-xl font-black">{member.name}</h3>
            <p className="text-xs text-red-300">{member.role}</p>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-xs text-white/65">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/35">Department</span>
            <p className="mt-1 font-bold text-white/85">{member.department || "OSCode CIT"}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/35">Role</span>
            <p className="mt-1 font-bold text-white/85">{member.role}</p>
          </div>
        </div>
        <p className="mt-auto pt-5 text-center text-[11px] text-white/35">Click the card again to flip back</p>
      </div>
    </div>
  );

  return <FlipCard front={front} back={back} ariaLabel={`${member.name} team card`} />;
};

export default MemberCard;
