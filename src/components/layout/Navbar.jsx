import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Terminal,
  Home,
  FolderGit2,
  Trophy,
  CalendarDays,
  Users,
  Mail,
  Sun,
  Moon,
  Flame,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Hackathons", path: "/hackathons", icon: Flame },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Events", path: "/events", icon: CalendarDays },
  { name: "Team", path: "/team", icon: Users },
  { name: "Learning", path: "/learning", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

const menuVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md xl:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 z-50 w-full px-3 sm:px-5">
        <div
          className={`mx-auto mt-3 max-w-[1500px] rounded-2xl border px-3 sm:px-4 py-3 backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "border-red-500/35 bg-[#050505]/92 shadow-[0_14px_45px_rgba(0,0,0,.45),0_0_28px_rgba(239,68,68,.08)]"
              : "border-white/10 bg-black/45 shadow-[0_10px_35px_rgba(0,0,0,.22)]"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="group flex shrink-0 items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-500/30 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="/images/logos/logo.svg"
                  alt="OSCode CIT Logo"
                  className="relative h-9 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-10"
                />
              </div>
              <span className="hidden items-center gap-1.5 rounded-full border border-red-500/35 bg-red-500/10 px-3 py-1 font-mono text-[11px] font-bold tracking-wide text-red-300 sm:inline-flex">
                <Terminal size={12} className="transition-transform duration-500 group-hover:rotate-180" />
                CIT Chapter
              </span>
            </Link>

            <nav className="hidden items-center gap-1.5 rounded-full border border-cyan-300/20 bg-[#020914]/80 p-1.5 xl:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  className="group relative rounded-full px-4.5 py-2.5 text-[14px] font-bold tracking-[0.01em] transition-all duration-300"
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-red-500 shadow-[0_0_24px_rgba(239,68,68,.28)]"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full bg-red-500/0 transition-colors duration-300 group-hover:bg-red-500/10" />
                      )}
                      <span
                        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/70 group-hover:text-red-300"
                        }`}
                      >
                        <link.icon size={14} className={isActive ? "text-white" : "text-cyan-300/70 group-hover:text-cyan-200"} />
                        {link.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Thin red brightness/theme circle */}
              <button
                onClick={toggleTheme}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-red-500/65 bg-black/35 text-red-300 shadow-[0_0_18px_rgba(239,68,68,.08)] transition-all duration-300 hover:border-red-400 hover:bg-red-500/10 hover:shadow-[0_0_28px_rgba(239,68,68,.22)] active:scale-90"
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle brightness/theme"
              >
                <span className="absolute inset-1 rounded-full border border-red-500/15 transition-transform duration-500 group-hover:rotate-180" />
                {isDark
                  ? <Sun size={17} className="relative transition-transform duration-500 group-hover:rotate-90" />
                  : <Moon size={17} className="relative transition-transform duration-500 group-hover:-rotate-12" />}
              </button>

              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-500/35 bg-white/[0.04] text-white transition hover:border-red-400 hover:bg-red-500/10 active:scale-95 xl:hidden"
                aria-label="Toggle Navigation"
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-3 right-3 top-[76px] z-50 mx-auto max-w-[1440px] overflow-hidden rounded-2xl border border-red-500/30 bg-[#080808]/98 shadow-2xl backdrop-blur-2xl xl:hidden"
          >
            <div className="flex h-9 items-center justify-between border-b border-white/10 px-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[11px] text-white/40">~/oscode-navigation</span>
            </div>

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto p-2"
            >
              {navLinks.map((link, index) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path !== "/" && location.pathname.startsWith(link.path));
                const Icon = link.icon;

                return (
                  <motion.div key={link.name} variants={itemVariants}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={`group relative flex items-center gap-3.5 overflow-hidden rounded-xl px-4 py-3 transition-all duration-300 ${
                        isActive ? "bg-red-500/15" : "hover:bg-red-500/10"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,.8)]" />
                      )}
                      <span className="font-mono text-[10px] text-white/30">{String(index + 1).padStart(2, "0")}</span>
                      <Icon
                        size={18}
                        className={`transition-transform duration-500 group-hover:rotate-12 ${
                          isActive ? "text-red-400" : "text-white/50 group-hover:text-red-300"
                        }`}
                      />
                      <span className={`text-sm font-bold ${isActive ? "text-red-300" : "text-white/80 group-hover:text-white"}`}>
                        {link.name}
                      </span>
                    </NavLink>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
