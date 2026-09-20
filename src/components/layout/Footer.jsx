import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Heart, Terminal } from "lucide-react";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t dark:border-white/10 border-slate-200 dark:bg-[#0b0b0b] bg-slate-100 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

      <Container>
        <div className="py-16 grid gap-12 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img
                src="/images/logos/logo.svg"
                alt="OSCode CIT Logo"
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-5 text-sm dark:text-slate-300 text-slate-600 leading-relaxed max-w-sm">
              The student-led open source chapter of Cambridge Institute of
              Technology. Fostering development, collaborative software, and
              peer innovation.
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full border dark:border-white/10 border-slate-300 dark:bg-white/[0.03] bg-white px-3.5 py-1.5 text-xs dark:text-slate-400 text-slate-600 shadow-sm">
              <Terminal size={14} className="text-red-600 dark:text-red-400" />
              <span>SMV Block, CIT Bengaluru</span>
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              Navigation
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm dark:text-slate-300 text-slate-700">
              <li>
                <Link to="/" className="hover:text-red-600 dark:hover:text-red-400 transition font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-red-600 dark:hover:text-red-400 transition font-medium">
                  Projects & Repos
                </Link>
              </li>
              <li>
                <Link to="/hackathons" className="hover:text-red-600 dark:hover:text-red-400 transition font-medium">
                  Hackathons
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-red-600 dark:hover:text-red-400 transition font-medium">
                  Events & Activities
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-red-600 dark:hover:text-red-400 transition font-medium">
                  Core Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-600 dark:hover:text-red-400 transition font-medium">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              Connect With Us
            </h3>
            <p className="mt-3 text-sm dark:text-slate-400 text-slate-600">
              Follow our latest builds, workshops, and open calls.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/oscode-cit"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-white dark:text-white text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 shadow-sm"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/company/oscodecit/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-white text-red-600 transition-all duration-300 hover:-translate-y-1 hover:border-red-400 shadow-sm"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="https://www.instagram.com/oscodecit"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border dark:border-white/10 border-slate-300 dark:bg-white/5 bg-white text-pink-600 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 shadow-sm"
              >
                <FaInstagram size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-white/10 border-slate-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-slate-400 text-slate-500">
          <p>© {new Date().getFullYear()} OSCode CIT. All rights reserved.</p>
          <p className="flex items-center gap-1.5 dark:text-slate-300 text-slate-700 font-medium">
            Crafted with{" "}
            <Heart size={14} className="text-pink-500 fill-pink-500" /> by
            OSCode CIT Technical Team
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
