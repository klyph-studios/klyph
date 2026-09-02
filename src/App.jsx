import { useState, useEffect } from "react";
import { loadData } from "./utils/helpers";
import { useScrollReveal } from "./hooks/useScrollReveal";

import { Cursor } from "./components/ui/Cursor";
import { CaseStudyModal } from "./components/ui/CaseStudyModal";
import { IntroLoader } from "./components/layout/IntroLoader";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Services } from "./components/sections/Services";
import { AiSolutions } from "./components/sections/AiSolutions";
import { Portfolio } from "./components/sections/Portfolio";
import { Testimonials } from "./components/sections/Testimonials";
import { CompanyMarquee } from "./components/sections/CompanyMarquee";
import { WhyUs } from "./components/sections/WhyUs";
import { CTA } from "./components/sections/CTA";

export default function App() {
  const [data] = useState(loadData);
  const [modalProjectId, setModalProjectId] = useState(null);
  const [theme, setTheme] = useState("dark");

  useScrollReveal();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        // If modal is open, let modal handle escape first or toggle theme if no modal
        if (!modalProjectId) {
          toggleTheme();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalProjectId]);

  const modalProject = data.projects.find((p) => p.id === modalProjectId) || null;

  useEffect(() => {
    if (modalProjectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalProjectId]);

  return (
    <>
      <Cursor />
      <IntroLoader />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero data={data} />
        <Marquee items={data.marquee} />
        <Services services={data.services} />
        <AiSolutions data={data} />
        <Portfolio projects={data.projects} onOpenModal={setModalProjectId} />
        <Testimonials testimonials={data.testimonials} />
        <CompanyMarquee companies={data.companies} />
        <WhyUs data={data} />
        <CTA cta={data.cta} />
        <Footer data={data} />
      </main>

      {modalProject && <CaseStudyModal project={modalProject} onClose={() => setModalProjectId(null)} />}
    </>
  );
}

