"use client";

import { motion } from "framer-motion";
import { scores, vitals } from "./data";

const R = 48;
const C = 2 * Math.PI * R;

export default function Proof() {
  return (
    <section className="band" id="proof">
      <div className="wrap">
        <span className="eyebrow" style={{ color: "var(--ink)" }}>Proof, not promises</span>
        <h2 style={{ marginTop: 18 }}>Numbers a recruiter can scan in five seconds.</h2>

        <div className="scores">
          {scores.map((s, i) => (
            <div className="score" key={s.label}>
              <div className="ring">
                <svg width="112" height="112" viewBox="0 0 112 112" aria-hidden="true">
                  <circle cx="56" cy="56" r={R} fill="none" stroke="rgba(20,19,15,0.12)" strokeWidth="9" />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r={R}
                    fill="none"
                    stroke="#14130f"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={C}
                    initial={{ strokeDashoffset: C }}
                    whileInView={{ strokeDashoffset: C * (1 - s.value / 100) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
                  />
                </svg>
                <b>{s.value}</b>
              </div>
              <span className="mono" style={{ fontSize: 12 }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="vitals">
          {vitals.map((v) => (
            <span className="vital" key={v.k}>
              {v.k} <b>{v.v}</b>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
