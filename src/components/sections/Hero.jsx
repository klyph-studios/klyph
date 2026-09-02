import { useState, useEffect } from "react";

export function Hero({ data }) {
  const h = data.hero;
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Smooth scroll progress from 0 to 500px
      const progress = Math.max(0, Math.min(1, currentY / 500));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.92 + scrollProgress * 0.18;
  const opacity = 0.6 + scrollProgress * 0.4;
  const letterSpacing = `${0.04 + scrollProgress * 0.22}em`;
  const clipWidth = `${Math.min(100, 25 + scrollProgress * 80)}%`;

  return (
    <section id="home" className="hero section">
      <div className="hero-grid" />
      <div className="hb hb1" />
      <div className="hb hb2" />
      <div className="hb hb3" />
      
      <div className="container">
        {/* Main Hero Layout */}
        <div className="hero-layout">
          <div>
            <div className="hero-badge">
              <div className="bping" />
              {h.badge}
            </div>
            <h1 className="hero-h1">
              {h.line1}
              <span className="line2">{h.line2}</span>
            </h1>
            <p className="hero-sub">{h.sub}</p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => go("work")}>
                Explore Work →
              </button>
              <button className="btn btn-cyan" onClick={() => go("cta")}>
                Book Consultation
              </button>
            </div>
            <div className="hero-metrics">
              {h.metrics.map((m, i) => (
                <div key={i}>
                  <div className="mval">{m.val}</div>
                  <div className="mlbl">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-vis">
            <div className="orbit">
              <div className="oring r1">
                <div className="rdot" />
              </div>
              <div className="oring r2">
                <div className="rdot" />
              </div>
              <div className="oring r3">
                <div className="rdot" />
              </div>
              <div className="orb">
                <div className="orb-brand">
                  KLYPH
                </div>
                <div className="orb-sub">Bespoke Studio</div>
              </div>
            </div>
            <div className="fc fc1">
              <div className="fc-ico">🦜</div>
              <div>
                <div className="fc-ttl">AeroAvian Breeder Studio</div>
                <div className="fc-val">Global Booking Platform</div>
              </div>
            </div>
            <div className="fc fc2">
              <div className="fc-ico">🏎️</div>
              <div>
                <div className="fc-ttl">Velocita Supercar Shop</div>
                <div className="fc-val">Motion & Web Assets</div>
              </div>
            </div>
            <div className="fc fc3">
              <div className="fc-ico">🚁</div>
              <div>
                <div className="fc-ttl">RotorLuxe Helicopters</div>
                <div className="fc-val">VIP Charter Engine</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Full-Width KLYPH Kinetic Scroll Reveal Banner */}
        <div className="klyph-reveal-wrapper">
          <div className="klyph-reveal-container">
            <div className="klyph-reveal-tag">KLYPH REVEAL // MOTION ARCHITECTURE</div>
            
            <div 
              className="klyph-reveal-title-box"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
              }}
            >
              {/* Outline Text */}
              <div className="klyph-reveal-text outline" style={{ letterSpacing }}>
                KLYPH
              </div>
              
              {/* Revealed Solid Fill */}
              <div 
                className="klyph-reveal-text fill"
                style={{ 
                  letterSpacing,
                  clipPath: `polygon(0 0, ${clipWidth} 0, ${clipWidth} 100%, 0 100%)`
                }}
              >
                KLYPH
              </div>
            </div>

            <div 
              className="klyph-reveal-sub"
              style={{ opacity: Math.max(0.4, scrollProgress * 1.2) }}
            >
              <span className="sub-line" />
              <span className="sub-text">ULTRA-PREMIUM DIGITAL STUDIO</span>
              <span className="sub-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


