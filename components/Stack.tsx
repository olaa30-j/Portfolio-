"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { stack } from "./data";

export default function Stack() {
  const [active, setActive] = useState(0);
  const current = stack[active];

  return (
    <section className="section" id="stack">
      <div className="wrap">
        <span className="eyebrow">Toolbox</span>
        <h2 className="title">My stack, as a <em>keyboard</em> you can press.</h2>
        <p className="lede">Press a key to read how I use each tool. Arrow keys work too.</p>

        <div className="kb-wrap">
          <div
            className="keyboard"
            role="listbox"
            aria-label="Tech stack"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setActive((a) => (a + 1) % stack.length);
              if (e.key === "ArrowLeft") setActive((a) => (a - 1 + stack.length) % stack.length);
            }}
          >
            {stack.map((s, i) => (
              <motion.button
                key={s.key}
                type="button"
                role="option"
                aria-selected={i === active}
                className="key"
                data-active={i === active}
                whileHover={{ y: -3 }}
                whileTap={{ y: 3, scale: 0.97 }}
                onClick={() => setActive(i)}
              >
                {s.key}
                <small>{s.sub}</small>
              </motion.button>
            ))}
          </div>

          <div className="screen" aria-live="polite">
            <span className="prompt">$ soren --uses {current.key.toLowerCase()}</span>
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h4>{current.title}</h4>
              <p>{current.text}</p>
            </motion.div>
            <p style={{ marginTop: 18 }}>
              <span className="prompt">$</span> <span className="caret" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
