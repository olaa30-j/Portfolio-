"use client";

import { motion } from "framer-motion";
import { projects } from "./data";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <span className="eyebrow">Selected work</span>
        <h2 className="title">Case studies with the <em>number first</em>.</h2>
        <p className="lede">Each project leads with its metric, then the problem, the approach and the result.</p>

        <div className="deck">
          {projects.map((p, i) => (
            <motion.article
              key={p.no}
              className="case"
              style={{ top: 96 + i * 22 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="case-no">CASE {p.no}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="metric">
                <span className="metric-label">{p.metricLabel}</span>
                <div className="ba">
                  <span className="before">{p.before}</span>
                  <span className="after">{p.after}</span>
                </div>
                <div className="bars" aria-hidden="true">
                  <div className="bar">
                    <div style={{ width: `${p.beforePct}%`, background: "#c9c4b6" }} />
                  </div>
                  <div className="bar">
                    <motion.div
                      style={{ background: "var(--lime-deep)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.afterPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
                <div className="steps">
                  <div><b>Problem</b><span>{p.problem}</span></div>
                  <div><b>Approach</b><span>{p.approach}</span></div>
                  <div><b>Result</b><span>{p.result}</span></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
