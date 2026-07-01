import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}