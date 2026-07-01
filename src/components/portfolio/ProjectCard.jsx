import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const techIconUrl = {
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Android": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "AI/ML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "AI Fundamentals": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Automation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  "OpenAI API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "8086 Assembly": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "EMU8086": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Database": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
};

const dedupe = (arr) => [...new Set(arr)];

// Rotating label circle — right to left cycling
function TechCircle({ tech }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx(i => (i + 1) % tech.length);
    }, 700);
    return () => clearInterval(id);
  }, [tech.length]);

  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ border: "1.5px dashed rgba(34,211,238,0.4)" }}
        />
        {/* Tech name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIdx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[9px] font-mono font-bold text-center leading-tight px-1"
              style={{ color: "#22D3EE" }}
            >
              {tech[activeIdx].length > 8 ? tech[activeIdx].slice(0, 7) + "…" : tech[activeIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const techList = dedupe(project.tech).slice(0, 5);
  const cardNum = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setHoveredTech(null); }}
      className="group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, #0a0f0f 0%, #0d1a1a 100%)",
        border: isHovered ? "1.5px solid rgba(34,211,238,0.5)" : "1.5px solid rgba(255,255,255,0.06)",
        boxShadow: isHovered
          ? "0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(34,211,238,0.08)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Image / icon area */}
      <div className="relative overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: 200 }}>

        {/* Project image */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            style={{
              opacity: isHovered ? 0.1 : 0.6,
              filter: isHovered ? "blur(3px) saturate(0.5)" : "saturate(1.2) brightness(0.85)",
            }}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to top, #0a0f0f 5%, rgba(10,15,15,0.4) 60%, transparent 100%)"
        }} />

        {/* Scan lines on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(34,211,238,0.025) 3px, rgba(34,211,238,0.025) 4px)` }}
            />
          )}
        </AnimatePresence>

        {/* Glow orb on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)", filter: "blur(20px)" }}
            />
          )}
        </AnimatePresence>

        {/* Card number */}
        <div className="absolute top-3 left-4 font-mono font-bold text-2xl z-10"
          style={{ color: isHovered ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.25)", transition: "color 0.3s" }}
        >
          {cardNum}
        </div>

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-3 right-3 z-10 px-2 py-0.5 text-[10px] font-mono rounded-full"
            style={{ background: "rgba(34,211,238,0.08)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.3)" }}
          >
            {project.status}
          </div>
        )}

        {/* Tech icons — ONLY on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex items-center justify-center gap-3 px-4 pt-6 pb-10 flex-wrap"
            >
              {techList.map((t, i) => (
                <motion.div
                  key={t}
                  className="flex flex-col items-center gap-1.5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                  transition={{
                    opacity: { delay: i * 0.07, duration: 0.25 },
                    scale: { delay: i * 0.07, duration: 0.25 },
                    y: { duration: 2, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" },
                  }}
                  onMouseEnter={() => setHoveredTech(t)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: hoveredTech === t ? "rgba(34,211,238,0.18)" : "rgba(255,255,255,0.08)",
                      border: hoveredTech === t ? "1.5px solid rgba(34,211,238,0.7)" : "1.5px solid rgba(255,255,255,0.15)",
                      boxShadow: hoveredTech === t ? "0 0 20px rgba(34,211,238,0.5)" : "0 0 8px rgba(0,0,0,0.5)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {techIconUrl[t] ? (
                      <img src={techIconUrl[t]} alt={t} className="w-7 h-7 object-contain" />
                    ) : (
                      <span className="text-[10px] font-mono font-bold text-cyan-400">{t.slice(0, 3).toUpperCase()}</span>
                    )}
                  </div>
                  <AnimatePresence>
                    {hoveredTech === t && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="text-[10px] font-mono whitespace-nowrap" style={{ color: "#22D3EE" }}
                      >
                        {t}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rotating tech circle — visible on hover */}
        {isHovered && <TechCircle tech={techList} />}

        {!isHovered && <div className="relative z-10 py-8" />}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-1 transition-colors duration-300"
          style={{ color: isHovered ? "#22D3EE" : "#ffffff" }}
        >
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300"
              style={{
                background: "rgba(34,211,238,0.1)",
                color: "#22D3EE",
                border: "1px solid rgba(34,211,238,0.3)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#22D3EE";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(34,211,238,0.1)";
                e.currentTarget.style.color = "#22D3EE";
              }}
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-full text-zinc-400 hover:text-white transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
            >
              <Github size={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}