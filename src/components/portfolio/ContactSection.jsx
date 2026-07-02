import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

// 🔽 EmailJS madhun mileleli 3 values ithe taak
const SERVICE_ID = "service_9p388n9";
const TEMPLATE_ID = "template_wd0g3wp";
const PUBLIC_KEY = "bYgakgMtFJzV6Iz7h";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // 4 second nantar message gayab hoईल
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left side */}
        <div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm always open to collaborations, new projects, and learning
            opportunities. Feel free to reach out — let's build something
            great together!
          </p>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-neutral-900 p-3 rounded-lg">
              <Mail size={18} />
            </div>
            <span className="font-mono text-gray-300">
              malusarekrishnab@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-neutral-900 p-3 rounded-lg">
              <MapPin size={18} />
            </div>
            <span className="font-mono text-gray-300">Maharashtra, India</span>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/malusarekrishnab-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-malusare-b4353b419"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Right side - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-xs tracking-widest text-gray-400 font-mono">
              NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full mt-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest text-gray-400 font-mono">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full mt-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest text-gray-400 font-mono">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              className="w-full mt-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-60"
          >
            <Send size={18} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              ❌ Something went wrong. Please fill all fields and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
