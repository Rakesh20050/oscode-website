import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Container from "../components/common/Container";
import GradientText from "../components/common/GradientText";
import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";

function NotFound() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          className="mx-auto flex max-w-xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-black/70 text-left shadow-2xl">
            <div className="terminal-header !px-4 !py-3 border-b border-white/10">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="ml-2 font-mono text-[11px] text-slate-500">
                404.sh
              </span>
            </div>
            <div className="px-5 py-5 font-mono text-xs text-slate-300 sm:text-sm">
              <p>
                <span className="text-violet-400">$</span> cd {window.location.pathname}
              </p>
              <p className="mt-1 text-red-400">
                bash: no such route in this repository
              </p>
              <p className="mt-3 text-slate-500"># try one of these instead</p>
            </div>
          </div>

          <h1 className="mt-8 text-7xl font-black tracking-tight sm:text-8xl">
            <GradientText>404</GradientText>
          </h1>

          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            This page doesn't exist — or hasn't been built yet.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/">
              <PrimaryButton className="flex items-center gap-2">
                <Home size={18} />
                Back to Home
              </PrimaryButton>
            </Link>
            <Link to="/events">
              <SecondaryButton className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Browse Events
              </SecondaryButton>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default NotFound;
