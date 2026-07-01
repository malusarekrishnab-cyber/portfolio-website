import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const techIcons = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", x: -180, y: -40 },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", x: 160, y: -50 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", x: 140, y: 50 },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", x: -160, y: 70 },
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", x: -200, y: 150 },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", x: 180, y: 140 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", x: -140, y: -120 },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", x: 120, y: -130 },
];

const roles = ["Full-Stack", "Software", "Backend", "Frontend"];

export default function HeroSection() {
  const [titleText, setTitleText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullTitle = "Developer";
  const containerRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullTitle.length) {
        setTitleText(fullTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTypingDone(true);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        animation: "gridMove 20s linear infinite",
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/6 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "6s", animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/4 rounded-full blur-[140px]" />

      {/* Animated dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${(i * 37 + 10) % 90 + 5}%`,
            top: `${(i * 53 + 5) % 85 + 5}%`,
            animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.3) % 3}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-zinc-500 mb-4 font-mono"
        >
          Hello, I'm Krishna Malusare
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text mr-3">{titleText}</span>
            <span className="text-white">
              {isTypingDone ? "" : "|"}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-lg mx-auto mb-10"
        >
          <p className="text-zinc-500 text-sm md:text-base">
            {roles.map((role, i) => (
              <span key={role} className="line-through-animated inline-block mr-2 opacity-50" style={{ animationDelay: `${i * 0.3}s` }}>
                {role}
              </span>
            ))}
            <span className="text-zinc-300 font-medium ml-1">→ all of the above.</span>
          </p>
          <p className="text-zinc-400 mt-3 leading-relaxed text-sm">
            Developer crafting reliable, user-centric applications with an emphasis on performance and usability.
          </p>
        </motion.div>

        {/* Profile area with floating tech icons */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mx-auto w-64 h-72 md:w-80 md:h-96"
        >
          {/* Glow behind profile */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl scale-110" />

          {/* Profile silhouette placeholder */}
          <div className="relative w-full h-full flex items-end justify-center">
            <div className="w-48 h-56 md:w-60 md:h-72 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-t-full border border-white/5 flex items-center justify-center">
              <div className="text-6xl md:text-7xl font-black gradient-text">KM</div>
            </div>
          </div>

          {/* Floating tech icons */}
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${tech.x}px, ${tech.y}px)`,
                animation: `float ${3 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-6 h-6 md:w-7 md:h-7 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg opacity-70 hover:opacity-100 transition-opacity"
                width="28"
                height="28"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Social links - right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4"
      >
        {[
          { href: "https://github.com/malusarekrishnab-cyber", icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          )},
          { href: "https://linkedin.com/in/krushna-malusare", icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          )},
          { href: "mailto:malusarekrishnab@gmail.com", icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          )},
          { href: "https://www.instagram.com/krushna_malusare_patil/", icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          )},
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}