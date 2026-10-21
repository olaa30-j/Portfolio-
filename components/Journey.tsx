"use client";

import { motion } from "framer-motion";
import { commits } from "./data";

export default function Journey() {
  return (
    <section className="section" id="journey" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <span className="eyebrow">Career</span>
        <h2 className="title">My journey as a <em>commit graph</em>.</h2>
        <p className="lede">Newest first, like <span className="mono">git log</span>.</p>

        <div className="graph">
          {commits.map((c, i) => (
            <motion.div
              className="commit"
              key={c.hash}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="date">{c.date}</span>
              <div className="node-col"><span className="node" data-head={c.head ? "true" : "false"} /></div>
              <div className="commit-card">
                <span className="hash">{c.hash}</span>
                {c.head && <span className="head-tag">HEAD</span>}
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="#contact" className="btn btn-ghost" style={{ marginTop: 8 }}>Download CV (PDF) ↓</a>
      </div>
    </section>
  );
}
