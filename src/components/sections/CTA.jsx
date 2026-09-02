export function CTA({ cta }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="cta" className="section sec-light">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-cnt">
            <h2 className="cta-ttl">
              {cta.line1}
              <br />
              <span className="hi">{cta.line2}</span>
            </h2>
            <p className="cta-sub">{cta.sub}</p>
            <div className="cta-btns">
              <a href={`https://cal.com/klyph/strategic-consultation`} className="btn btn-primary" style={{ fontSize: "1rem", padding: ".9rem 2.5rem" }}>
                Schedule Consultation →
              </a>
              <button className="btn btn-ghost" onClick={() => go("work")}>
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
