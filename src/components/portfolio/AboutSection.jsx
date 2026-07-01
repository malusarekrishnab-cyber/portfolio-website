import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Brain, Globe } from "lucide-react";

const skillIconUrl = {
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Android Development": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "XML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
};

const skills = {
  "Languages": ["C", "C++", "Java", "Python", "HTML5", "CSS3", "JavaScript"],
  "Mobile & Android": ["Android Development", "Java", "XML", "Android Studio"],
  "Database & Cloud": ["Firebase", "SQL"],
  "Tools & Platforms": ["Git", "GitHub", "Linux", "VS Code"],
  "Currently Learning": ["Python Advanced", "AI Fundamentals", "React", "Open Source"],
};

const highlights = [
  { icon: Code, label: "8+ Projects", desc: "Built & deployed" },
  { icon: Smartphone, label: "Android Dev", desc: "Java & XML native" },
  { icon: Brain, label: "AI Enthusiast", desc: "Kanix AI & more" },
  { icon: Globe, label: "Open Source", desc: "GitHub contributor" },
];

function SkillTag({ skill, delay }) {
  const [hovered, setHovered] = useState(false);
  const icon = skillIconUrl[skill];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full cursor-default transition-all duration-300"
        style={{
          background: hovered ? "rgba(34,211,238,0.12)" : "rgba(255,255,255,0.03)",
          border: hovered ? "1px solid rgba(34,211,238,0.5)" : "1px solid rgba(255,255,255,0.06)",
          color: hovered ? "#22D3EE" : "#a1a1aa",
          boxShadow: hovered ? "0 0 16px rgba(34,211,238,0.2), 0 -4px 12px rgba(34,211,238,0.1)" : "none",
        }}
      >
        {icon && <img src={icon} alt={skill} className="w-3.5 h-3.5 object-contain" />}
        {skill}
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 border-t border-white/[0.03]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">01 — About</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Know <span className="gradient-text">me better</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-zinc-400 leading-relaxed mb-6">
              I'm a passionate Computer Engineering student and Android Developer from Maharashtra. I build software that solves real-world problems — from attendance systems to AI assistants.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Creator of Kanix AI Assistant. Focused on Android development, software engineering, automation, and AI. I learn through hands-on projects and believe in: <span className="text-cyan-400 font-mono text-sm">Build. Learn. Improve. Repeat.</span>
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-cyan-400/20 transition-colors group"
                >
                  <div className="p-2 rounded-md bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                    <h.icon size={18} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{h.label}</p>
                    <p className="text-zinc-500 text-xs">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills with lift animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {Object.entries(skills).map(([category, items], ci) => (
              <div key={category} className="mb-6">
                <h3 className="text-xs font-mono text-cyan-400/70 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <SkillTag
                      key={skill}
                      skill={skill}
                      delay={inView ? 0.5 + ci * 0.1 + si * 0.05 : 0}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}