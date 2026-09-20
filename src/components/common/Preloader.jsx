import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] !text-white overflow-hidden select-none"
        >
          {/* Cinematic Spotlight */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/25 via-[#030712]/90 to-[#030712] pointer-events-none" />

          {/* Animated Light Beams & Sound Rings */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 1.1], opacity: [0.3, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute h-96 w-96 rounded-full bg-red-500/20 blur-[100px] pointer-events-none"
          />

          {/* Movie Intro Center Logo Box */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            
            {/* Logo Glow Ring */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-red-500 via-red-500 to-red-600 opacity-60 blur-xl animate-pulse" />
              
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl border border-red-400/50 bg-[#060c1d] p-4 shadow-[0_0_60px_rgba(0,168,255,0.4)] backdrop-blur-2xl">
                <img
                  src="/images/logos/logo.svg"
                  alt="OSCode Logo"
                  className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(0,210,255,0.8)]"
                />
              </div>
            </motion.div>

            {/* Cinematic Text Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={14} className="!text-red-400 animate-pulse" />
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.3em] !text-red-400">
                  PRESENTS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-[0.25em] !text-white drop-shadow-[0_0_35px_rgba(0,168,255,0.5)]">
                O S C O D E
              </h1>

              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.2em] !text-slate-300">
                Cambridge Institute of Technology
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              className="mt-8 h-[2px] w-48 sm:w-64 rounded-full bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-[0_0_15px_#EF4444]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
