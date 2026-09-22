"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/lib/data";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 border border-white/20 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-12 relative text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center text-base sm:text-lg hover:bg-white hover:text-black transition-all"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="text-[11px] sm:text-xs font-syne font-bold uppercase tracking-widest text-zinc-400 mb-2">{project.cat}</div>
        <h2 className="font-syne font-extrabold text-2xl sm:text-4xl mb-3 sm:mb-4 pr-8">{project.name}</h2>
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">{project.desc}</p>

        <div className="bg-zinc-900 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <h4 className="font-syne font-bold text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 mb-1.5 sm:mb-2">Verified Results</h4>
          <div className="font-syne font-extrabold text-base sm:text-xl text-white">{project.results}</div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest px-6 py-3 rounded bg-white text-black hover:bg-zinc-200 transition-all shadow-lg text-center"
            >
              Launch Live Platform ↗
            </a>
          )}
          <button
            className="btn btn-ghost text-xs uppercase font-bold tracking-widest px-6 py-3 rounded border border-white/20 text-white hover:bg-white/10 transition-all text-center sm:ml-auto"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
