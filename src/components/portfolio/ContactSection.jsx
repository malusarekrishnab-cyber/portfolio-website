import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, Github, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 border-t border-white/[0.03]" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">04 — Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Let's <span className="gradient-text">connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-zinc-400 leading-relaxed mb-8">
              I'm always open to collaborations, new projects, and learning opportunities. Feel free to reach out — let's build something great together!
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:malusarekrishnab@gmail.com"
                className="flex items-center gap-3 text-zinc-400 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-cyan-400/20">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-mono">malusarekrishnab@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-400">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <MapPin size={16} />
                </div>
                <span className="text-sm font-mono">Maharashtra, India</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { href: "https://github.com/malusarekrishnab-cyber", label: "GitHub", icon: <Github size={16} /> },
                { href: "https://linkedin.com/in/krushna-malusare", label: "LinkedIn", icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                )},
                { href: "https://www.instagram.com/krushna_malusare_patil/", label: "Instagram", icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm placeholder-zinc-600 focus:border-cyan-400/30 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  placeholder={`Your ${field.label.toLowerCase()}`}
                />
              </div>
            ))}

            <div>
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm placeholder-zinc-600 focus:border-cyan-400/30 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sent ? (
                "Message Sent!"
              ) : sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-white/[0.04]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs font-mono">
            © 2025 Krushna Malusare. Built with passion.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/malusarekrishnab-cyber" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-cyan-400 text-xs font-mono transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/krushna-malusare" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-cyan-400 text-xs font-mono transition-colors">
              LinkedIn
            </a>
            <a href="mailto:malusarekrishnab@gmail.com" className="text-zinc-600 hover:text-cyan-400 text-xs font-mono transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}