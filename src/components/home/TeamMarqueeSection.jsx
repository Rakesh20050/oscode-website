import { motion } from "framer-motion";
import { Marquee } from "../ui/marquee";
import team from "../../data/team";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import FlipCard from "../common/FlipCard";

export default function TeamMarqueeSection() {
  const row1 = team.slice(0, Math.ceil(team.length / 2));
  const row2 = team.slice(Math.ceil(team.length / 2));

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Section Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-red-500/10 px-4 py-1.5 font-bold text-xs dark:text-red-300 mb-3 border-red-500/40 text-red-700 dark:shadow-lg">
          <Users size={14} className="dark:text-red-400 text-red-700" />
          <span>OSCode CIT Builders & Leads</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight">
          Meet the Minds Behind OSCode CIT
        </h2>
        <p className="mt-2 text-sm dark:text-slate-300 text-slate-600 max-w-xl mx-auto">
          Passionate student leaders, core developers, research leads, and event organizers driving open-source culture at Cambridge Institute of Technology.
        </p>
      </div>

      {/* Marquee Row 1 (Forward) */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]">
          {row1.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </Marquee>

        {/* Marquee Row 2 (Reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
          {row2.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </Marquee>

        {/* Side Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060b18] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060b18] to-transparent z-10" />
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-6 py-2.5 text-xs  text-red-700 hover:border-red-400 hover:bg-red-500/20 hover:text-white transition active:scale-95 shadow-lg shadow-red-500/10 font-mono font-bold  mb-4 dark:shadow-lg"
        >
          <Sparkles size={15} />
          <span>Explore Interactive Team Tree View</span>
        </Link>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }) {
  const front = (
    <div className="group relative flex h-full min-h-[92px] w-64 items-center gap-3.5 rounded-2xl border border-white/10 bg-[#101012]/92 p-3 shadow-md backdrop-blur-xl transition-all duration-300 hover:border-red-400/50 hover:bg-[#161618]">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-red-400/30 bg-black">
        <img
          src={member.image || "/images/logos/logo.svg"}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          onError={(e) => { e.currentTarget.src = "/images/logos/logo.svg"; }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-bold text-white transition-colors group-hover:text-red-300">{member.name}</h4>
        <p className="truncate font-mono text-[11px] font-medium text-red-300">{member.role}</p>
        <span className="mt-0.5 inline-block rounded-md border border-white/5 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-white/40">{member.department}</span>
      </div>
    </div>
  );

  const back = (
    <div className="flex h-full min-h-[92px] w-64 flex-col justify-center rounded-2xl border border-red-500/45 bg-gradient-to-br from-[#19191b] to-[#070708] p-4 text-white">
      <p className="font-mono text-[9px] uppercase tracking-wider text-red-300">OSCode CIT Builder</p>
      <h4 className="mt-1 truncate text-sm font-black">{member.name}</h4>
      <p className="mt-1 text-[10px] text-white/50">{member.role} • {member.department}</p>
      <p className="mt-2 text-[9px] text-white/30">Click to flip back</p>
    </div>
  );

  return <FlipCard front={front} back={back} heightClass="h-[92px] w-64 shrink-0" ariaLabel={`${member.name} team preview`} />;
}

