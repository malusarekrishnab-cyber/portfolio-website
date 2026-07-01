import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const techList = ["React", "Node.js", "JavaScript", "CSS", "Database"];
const techIconUrl = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Database": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
};

export default function RestroBillCard({ index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  const cardNum = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setHoveredTech(null); }}
      className="group relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #0d1a1a 100%)",
        border: isHovered ? "1.5px solid rgba(0,255,209,0.5)" : "1.5px solid rgba(0,255,209,0.12)",
        boxShadow: isHovered
          ? "0 0 40px rgba(0,255,209,0.2), 0 0 80px rgba(0,255,209,0.08)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: 200 }}>
        {/* Restro themed image */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
          alt="Restro Bill System"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{
            opacity: isHovered ? 0.08 : 0.5,
            filter: isHovered ? "blur(3px) saturate(0.3)" : "saturate(1.1) brightness(0.7)",
          }}
        />

        {/* Gradient */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, #0a0a0a 5%, rgba(10,10,10,0.5) 60%, transparent 100%)"
        }} />

        {/* Scan lines */}
        <AnimatePresence>
          {isHovered && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,209,0.025) 3px, rgba(0,255,209,0.025) 4px)` }}
            />
          )}
        </AnimatePresence>

        {/* Glow */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,255,209,0.15) 0%, transparent 70%)", filter: "blur(20px)" }}
            />
          )}
        </AnimatePresence>

        {/* Card number */}
        <div className="absolute top-3 left-4 font-mono font-bold text-2xl z-10"
          style={{ color: isHovered ? "rgba(0,255,209,0.6)" : "rgba(255,255,255,0.25)", transition: "color 0.3s" }}
        >
          {cardNum}
        </div>

        {/* Status */}
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[10px] font-mono rounded-full"
          style={{ background: "rgba(0,255,209,0.08)", color: "#00ffd1", border: "1px solid rgba(0,255,209,0.3)" }}
        >
          Built
        </div>

        {/* Tech icons on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
              className="relative z-10 flex items-center justify-center gap-3 px-4 pt-6 pb-4 flex-wrap"
            >
              {techList.map((t, i) => (
                <motion.div key={t}
                  className="flex flex-col items-center gap-1.5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                  transition={{
                    opacity: { delay: i * 0.07 }, scale: { delay: i * 0.07 },
                    y: { duration: 2, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" },
                  }}
                  onMouseEnter={() => setHoveredTech(t)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: hoveredTech === t ? "rgba(0,255,209,0.18)" : "rgba(255,255,255,0.08)",
                      border: hoveredTech === t ? "1.5px solid rgba(0,255,209,0.7)" : "1.5px solid rgba(255,255,255,0.15)",
                      boxShadow: hoveredTech === t ? "0 0 20px rgba(0,255,209,0.5)" : "none",
                    }}
                  >
                    <img src={techIconUrl[t]} alt={t} className="w-7 h-7 object-contain" />
                  </div>
                  <AnimatePresence>
                    {hoveredTech === t && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="text-[10px] font-mono whitespace-nowrap" style={{ color: "#00ffd1" }}
                      >{t}</motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isHovered && <div className="py-8" />}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-1 transition-colors duration-300"
          style={{ color: isHovered ? "#00ffd1" : "#ffffff" }}
        >
          Restro Bill System
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          A restaurant billing management system for generating, tracking, and managing customer bills with a clean UI and smooth workflow.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/malusarekrishnab-cyber" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-full text-zinc-400 hover:text-white transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}