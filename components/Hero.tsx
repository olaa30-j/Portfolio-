"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "./data";

const code = [
  <><span className="c">{"// soren.config.ts"}</span></>,
  <><span className="k">export const</span> <span className="f">soren</span> = {"{"}</>,
  <>  role: <span className="s">"Frontend Developer"</span>,</>,
  <>  stack: [<span className="s">"React"</span>, <span className="s">"Next"</span>, <span className="s">"TS"</span>],</>,
  <>  focus: [<span className="s">"performance"</span>,</>,
  <>           <span className="s">"accessibility"</span>,</>,
  <>           <span className="s">"design systems"</span>],</>,
  <>  lighthouse: <span className="f">100</span>,</>,
  <>  coffee: <span className="k">true</span>,</>,
  <>  available: <span className="k">true</span>,</>,
  <>{"}"};</>,
  <></>,
  <><span className="k">export default function</span> <span className="f">build</span>() {"{"}</>,
  <>  <span className="k">return</span> <span className="f">ship</span>(<span className="s">"fast things"</span>);</>,
  <>{"}"}</>,
  <></>,
  <><span className="c">{"// compiling portrait.tsx ..."}</span></>,
  <><span className="c">{"// ✓ 0 errors, 0 warnings"}</span></>,
];

function Portrait() {
  // Placeholder illustration. Swap this SVG for <img src="/portrait.jpg" /> when you have a photo.
  return (
    <svg viewBox="0 0 400 460" width="100%" height="100%" preserveAspectRatio="xMidYEnd slice" aria-label="Portrait of Soren Hale">
      <defs>
        <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f2c9a5" />
          <stop offset="1" stopColor="#e2a97f" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="470" rx="190" ry="130" fill="#14130f" />
      <rect x="170" y="290" width="60" height="70" rx="26" fill="url(#skin)" />
      <ellipse cx="200" cy="215" rx="82" ry="98" fill="url(#skin)" />
      <path d="M118 205c-6-70 38-112 90-106 52 6 82 48 76 106-16-32-44-52-84-52-40 0-66 20-82 52z" fill="#2a2620" />
      <rect x="140" y="204" width="54" height="40" rx="14" fill="none" stroke="#14130f" strokeWidth="6" />
      <rect x="206" y="204" width="54" height="40" rx="14" fill="none" stroke="#14130f" strokeWidth="6" />
      <line x1="194" y1="222" x2="206" y2="222" stroke="#14130f" strokeWidth="6" />
      <circle cx="167" cy="224" r="6" fill="#14130f" />
      <circle cx="233" cy="224" r="6" fill="#14130f" />
      <path d="M168 280c18 16 46 16 64 0" fill="none" stroke="#14130f" strokeWidth="6" strokeLinecap="round" />
      <path d="M96 470c10-62 50-96 104-96s94 34 104 96z" fill="#f7f5f0" />
      <path d="M170 376l30 40 30-40" fill="none" stroke="#14130f" strokeWidth="6" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [source, setSource] = useState(false);
  const [hover, setHover] = useState(false);
  const showCode = source || hover;

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <motion.span
            className="status"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pulse" /> Available for projects from January
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            I build <span className="mark">fast</span>, <em>accessible</em> interfaces.
          </motion.h1>

          <motion.p
            className="lede"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm {profile.name}, a frontend developer and software engineer. I turn designs
            into products that load quickly, work for everyone and are a pleasure to maintain.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="#work" className="btn btn-dark">See the work →</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div><b>7+</b><span>years shipping</span></div>
            <div><b>40+</b><span>projects launched</span></div>
            <div><b>100</b><span>Lighthouse, on repeat</span></div>
          </motion.div>
        </div>

        <motion.div
          className="compile"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="compile-bar">
            <div className="dots" aria-hidden="true"><i /><i /><i /></div>
            <span>{showCode ? "soren.config.ts" : "portrait.tsx"}</span>
            <button
              type="button"
              className="switch"
              role="switch"
              aria-checked={source}
              onClick={() => setSource((s) => !s)}
            >
              View source
              <span className="track" data-on={source}><span className="thumb" /></span>
            </button>
          </div>

          <div className="code-layer" aria-hidden="true">
            {code.map((line, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.3 }}
              >
                {line}
                {" "}
              </motion.div>
            ))}
          </div>

          {/* The portrait "compiles" in from top to bottom after the code types out. */}
          <motion.div
            className="photo-layer"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: showCode ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
            transition={{ duration: showCode ? 0.5 : 1.6, delay: showCode ? 0 : 1.8, ease: "easeInOut" }}
          >
            <Portrait />
          </motion.div>

          {!reduce && !showCode && (
            <motion.div
              className="scanline"
              style={{ top: 46 }}
              initial={{ top: 46, opacity: 1 }}
              animate={{ top: "100%", opacity: 0 }}
              transition={{ duration: 1.6, delay: 1.8, ease: "easeInOut" }}
            />
          )}

          <span className="compile-hint mono">hover to read the source</span>
        </motion.div>
      </div>
    </section>
  );
}
