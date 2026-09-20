import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Mail, User, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function AuthModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("signin"); // "signin" | "register"
  const [role, setRole] = useState("student");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    usn: "",
    department: "CSE",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-red-500/30 bg-[#080d1a]/95 p-6 shadow-[0_0_50px_rgba(0,168,255,0.25)] text-slate-100 backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-400">
                <Lock size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">OSCode Member Portal</h3>
                <p className="text-xs text-slate-400">Cambridge Institute of Technology</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Submitted Toast State */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-12 text-center flex flex-col items-center justify-center gap-3"
            >
              <CheckCircle2 size={48} className="text-emerald-400 animate-bounce" />
              <h4 className="text-xl font-bold text-white">
                {tab === "signin" ? "Welcome Back!" : "Application Submitted!"}
              </h4>
              <p className="text-sm text-slate-400 max-w-xs">
                {tab === "signin"
                  ? "Redirecting to OSCode developer dashboard..."
                  : "Welcome to OSCode CIT community! Your account is activated."}
              </p>
            </motion.div>
          ) : (
            <>
              {/* Tab Selector */}
              <div className="mt-4 flex rounded-xl border border-white/10 bg-black/40 p-1">
                <button
                  onClick={() => setTab("signin")}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                    tab === "signin"
                      ? "bg-red-500 text-black shadow-md shadow-red-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setTab("register")}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                    tab === "register"
                      ? "bg-red-500 text-black shadow-md shadow-red-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Join OSCode
                </button>
              </div>

              {/* Social Login Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSubmit({ preventDefault: () => {} })}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-medium text-slate-200 transition hover:border-red-500/40 hover:bg-white/10 active:scale-95"
                >
                  <FaGithub size={16} />
                  GitHub
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit({ preventDefault: () => {} })}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-medium text-slate-200 transition hover:border-red-500/40 hover:bg-white/10 active:scale-95"
                >
                  <FaGoogle size={14} className="text-red-400" />
                  Google
                </button>
              </div>

              <div className="relative my-4 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <span className="relative bg-[#080d1a] px-3 font-mono text-[10px] uppercase text-slate-500">
                  Or email
                </span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {tab === "register" && (
                  <>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-400 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Alex Rivera"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-black/50 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">
                          USN / Student ID
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="1CD22CS000"
                          value={formData.usn}
                          onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-black/50 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none uppercase"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-400 mb-1">
                          Department
                        </label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full rounded-xl border border-white/10 bg-black/50 py-2 px-2 text-xs text-white focus:border-red-500 focus:outline-none"
                        >
                          <option value="CSE">CSE</option>
                          <option value="ISE">ISE</option>
                          <option value="AI&ML">AI & ML</option>
                          <option value="ECE">ECE</option>
                          <option value="EEE">EEE</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="student@cit.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                {tab === "register" && (
                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Member Role
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                      {["student", "contributor", "mentor"].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`rounded-lg border py-1.5 uppercase transition ${
                            role === r
                              ? "border-red-400 bg-red-500/20 text-red-300 font-bold"
                              : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-red-600 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-red-500/30 transition hover:from-red-400 hover:to-red-500 active:scale-95"
                >
                  <span>{tab === "signin" ? "Sign In to Dashboard" : "Register Account"}</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-1 text-center font-mono text-[10px] text-slate-500">
                <ShieldCheck size={12} className="text-red-400" />
                OSCode CIT Security Protocol • Open Source Network
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
