"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { AiSolutions } from "@/components/sections/AiSolutions";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CompanyMarquee } from "@/components/sections/CompanyMarquee";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTA } from "@/components/sections/CTA";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";
import { Cursor } from "@/components/ui/Cursor";
import { KLYPH_DATA, ProjectItem } from "@/lib/data";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Global ESC key listener for theme toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !selectedProjectId) {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectId]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const selectedProject: ProjectItem | null =
    KLYPH_DATA.projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <main className="min-h-screen bg-black text-white relative">
      <IntroLoader />
      <Cursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      <Hero />
      <Marquee />
      <Services />
      <AiSolutions />
      <Portfolio onOpenModal={(id) => setSelectedProjectId(id)} />
      <Testimonials />
      <CompanyMarquee />
      <WhyUs />
      <CTA />

      <Footer />

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </main>
  );
}
