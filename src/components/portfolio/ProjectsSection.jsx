import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/portfolio/ProjectCard";
import RestroBillCard from "@/components/portfolio/RestroBillCard";

const projects = [
  {
    title: "Kanix AI Assistant",
    description: "Personal AI Assistant focused on productivity, automation, and intelligent interaction. Features voice commands, personal automation, and an offline-first vision.",
    tech: ["Python", "Java", "Android", "AI Fundamentals", "Automation"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/ae2d9e5d1_generated_b8b61f6c.png",
    github: "https://github.com/malusarekrishnab-cyber/Kanix",
    status: "In Dev",
  },
  {
    title: "Smart Attendance",
    description: "Attendance management website focused on simplicity and usability with responsive design and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/cffddf3b4_generated_aa84267c.png",
    live: "https://malusarekrishnab-cyber.github.io/smart-attendance-website/",
    github: "https://github.com/malusarekrishnab-cyber/smart-attendance-website",
    status: "Live",
  },
  {
    title: "ResumeCraft",
    description: "Modern resume builder web app to create professional resumes quickly with clean templates and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/7e8000770_generated_02b69992.png",
    live: "https://resume-crafte.vercel.app", // <--- LINK FIXED HERE
    github: "https://github.com/malusarekrishnab-cyber",
    status: "In Dev",
  },
  {
    title: "MockMate AI",
    description: "AI-powered mock interview platform that simulates real interview scenarios with intelligent feedback and scoring.",
    tech: ["React", "OpenAI API", "Tailwind CSS"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/f85d529aa_generated_e9791cf9.png",
    live: "https://mockmateai.base44.app",
    github: "https://github.com/malusarekrishnab-cyber",
    status: "Live",
  },
  {
    title: "Python Academy",
    description: "Interactive Python learning platform with structured courses, code examples, and hands-on exercises.",
    tech: ["React", "Python", "Tailwind CSS"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/920fa2551_generated_3373bb3c.png",
    live: "https://python-academy.base44.app",
    github: "https://github.com/malusarekrishnab-cyber",
    status: "Live",
  },
  {
    title: "AI Plant Detection",
    description: "Machine learning based plant species identification using image recognition and AI fundamentals.",
    tech: ["Python", "AI/ML", "OpenCV"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/536567401_generated_4820bb3c.png",
    github: "https://github.com/malusarekrishnab-cyber",
  },
  {
    title: "Digital Clock",
    description: "Sleek digital clock application with clean UI and smooth display.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/e0017fb8b_generated_8aee7c30.png",
    github: "https://github.com/malusarekrishnab-cyber",
  },
  {
    title: "8086 Number Converter",
    description: "Assembly language number system converter running on 8086 emulator — binary, decimal, hex, and octal conversions.",
    tech: ["8086 Assembly", "EMU8086"],
    image: "https://media.base44.com/images/public/6a447df598a5703b5f0fb7c1/6d9de0698_generated_56bb21c2.png",
    github: "https://github.com/malusarekrishnab-cyber",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 border-t border-white/[0.03]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">02 — Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg mb-12">
            A collection of projects spanning web development, mobile apps, AI/ML, and low-level programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          <RestroBillCard index={projects.length} />
        </div>
      </div>
    </section>
  );
}