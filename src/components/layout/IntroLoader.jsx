import { useState, useEffect } from "react";

export function IntroLoader() {
  const [show, setShow] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    const dismiss = () => {
      setGone(true);
      setTimeout(() => document.getElementById("intro-el")?.remove(), 900);
    };
    window.addEventListener("wheel", dismiss, { once: true, passive: true });
    window.addEventListener("scroll", dismiss, { once: true, passive: true });
    window.addEventListener("touchmove", dismiss, { once: true, passive: true });
    const t = setTimeout(() => dismiss(), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="intro-el" className={`intro${gone ? " gone" : ""}`}>
      <div className="intro-grid" />
      <div className="intro-b1" />
      <div className="intro-b2" />
      <div className={`intro-name${show ? " show" : ""}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <img src="/logo_white.png" alt="klyph" style={{ height: "72px", width: "auto" }} />
      </div>
      <div className={`intro-sub${show ? " show" : ""}`}>
        <span>Ultra-Premium Digital Studio</span>
      </div>
      <div className={`intro-hint${show ? " show" : ""}`}>
       
        <div className="scroll-line" />
      </div>
    </div>
  );
}
