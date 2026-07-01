import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Websum Company",
    role: "Data Science Intern",
    period: "2025 — Present",
    desc: "Currently interning in Data Science — working on real-world data analysis, machine learning models, and data-driven insights.",
    current: true,
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-16 md:py-24 relative">
      <div className="absolute inset-0 border-t border-white/[0.03]" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">02 — Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative pl-10 pb-10"
          >
            {/* Line */}
            <div className="absolute left-3 top-2 bottom-0 w-[1px] bg-cyan-400/20" />
            {/* Dot */}
            <div className="absolute left-[6px] top-2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#050505] shadow-[0_0_10px_rgba(34,211,238,0.4)]">
              <div className="absolute inset-1 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-400/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={13} className="text-cyan-400" />
                <span className="text-cyan-400 text-xs font-mono font-semibold tracking-wide">{exp.company}</span>
                {exp.current && (
                  <span className="ml-2 px-2 py-0.5 text-[9px] font-mono bg-green-400/10 text-green-400 border border-green-400/20 rounded-full">CURRENT</span>
                )}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{exp.role}</h3>
              <p className="text-zinc-500 text-xs font-mono mb-3">{exp.period}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}