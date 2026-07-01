import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Rocket, Code2, Award, GraduationCap, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    date: "2025",
    title: "Pull Request Contributor",
    desc: "Successfully contributed pull requests to open source repositories on GitHub.",
    status: "ACHIEVED",
  },
  {
    icon: Rocket,
    date: "2025",
    title: "Kanix AI Assistant — In Development",
    desc: "Building a personal AI assistant with voice commands, productivity automation, and offline-first vision.",
    status: "IN DEV",
  },
  {
    icon: Code2,
    date: "2025",
    title: "Smart Attendance Website Live",
    desc: "Launched an attendance management website with responsive design on GitHub Pages.",
    status: "LIVE",
  },
  {
    icon: Award,
    date: "2025",
    title: "MockMate AI & Python Academy",
    desc: "Published AI mock interview platform and Python learning platform — both live.",
    status: "LIVE",
  },
  {
    icon: Zap,
    date: "2024",
    title: "ResumeCraft — Resume Builder",
    desc: "Built a modern resume builder web app with professional templates.",
    status: "BUILT",
  },
  {
    icon: GraduationCap,
    date: "2023",
    title: "Diploma in Computer Engineering",
    desc: "Pursuing Computer Engineering with focus on Android development, AI, and software engineering.",
    status: "ONGOING",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 border-t border-white/[0.03]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">03 — Achievements</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            The <span className="gradient-text">timeline</span>
          </h2>
        </motion.div>

        {/* Terminal-style timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent" />

          <div className="space-y-1">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-16 md:pl-20 py-5 group"
              >
                {/* Node */}
                <div className="absolute left-4 md:left-6 top-7 w-4 h-4 rounded-full border-2 border-cyan-400/40 bg-[#050505] group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-300">
                  <div className="absolute inset-1 rounded-full bg-cyan-400/30 group-hover:bg-cyan-400 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-cyan-400/15 transition-all duration-300 group-hover:bg-white/[0.03]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <item.icon size={14} className="text-cyan-400" />
                      <span className="text-xs font-mono text-zinc-500">{item.date}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}