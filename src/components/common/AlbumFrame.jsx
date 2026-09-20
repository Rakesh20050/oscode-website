import { motion } from "framer-motion";

export default function AlbumFrame({
  children,
  eyebrow = "OSCODE CIT",
  title,
  description,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`os-album relative overflow-hidden rounded-[2rem] border border-red-500/20 bg-[linear-gradient(145deg,rgba(22,22,24,.94),rgba(5,5,6,.98))] p-3 shadow-[0_30px_90px_rgba(0,0,0,.45)] sm:p-4 lg:p-5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(239,68,68,.10),transparent_28%),radial-gradient(circle_at_90%_100%,rgba(239,68,68,.06),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />

      {(title || description) && (
        <div className="relative z-10 border-b border-white/10 px-5 pb-6 pt-5 sm:px-7 sm:pt-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-red-300">
              {eyebrow}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Digital Album
            </span>
          </div>

          {title && (
            <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-2 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="relative z-10 p-3 sm:p-4 lg:p-5">
        {children}
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-7">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          OSCode CIT • Open Source Community
        </span>
        <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-red-300/45 sm:block">
          Archive / Collection
        </span>
      </div>
    </motion.div>
  );
}
