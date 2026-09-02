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
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="bg-zinc-950 border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-12 relative text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center text-lg hover:bg-white hover:text-black transition-all"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="text-xs font-syne font-bold uppercase tracking-widest text-zinc-400 mb-2">{project.cat}</div>
        <h2 className="font-syne font-extrabold text-3xl sm:text-4xl mb-4">{project.name}</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">{project.desc}</p>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 mb-8">
          <h4 className="font-syne font-bold text-xs uppercase tracking-wider text-zinc-400 mb-2">Verified Results</h4>
          <div className="font-syne font-extrabold text-xl text-white">{project.results}</div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            className="btn btn-primary text-xs uppercase font-bold tracking-widest px-6 py-3 rounded bg-white text-black hover:bg-zinc-200 transition-all"
            onClick={onClose}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
