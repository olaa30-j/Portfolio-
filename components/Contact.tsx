"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { budgets, needs, profile } from "./data";

function buildBrief(need: string, budget: string) {
  const parts: string[] = [];
  if (need) parts.push(`I'm looking for help with: ${need}.`);
  if (budget) parts.push(`My budget is around ${budget}.`);
  if (parts.length) parts.push("Here's a bit more about the project:\n");
  return parts.join("\n");
}

export default function Contact() {
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const lastAuto = useRef("");

  // The brief arrives pre-filled from the chips, unless the visitor has already written their own text.
  useEffect(() => {
    const next = buildBrief(need, budget);
    setMessage((current) => (current === "" || current === lastAuto.current ? next : current));
    lastAuto.current = next;
  }, [need, budget]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry${need ? `: ${need}` : ""}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <span className="eyebrow">Contact</span>
        <h2 className="title">Let's build something <em>worth shipping</em>.</h2>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Pick what you need. I'll <em>take it from there.</em></h2>
            <p>
              Choose a service and a budget and the message fills itself in. Or just write to{" "}
              <a href={`mailto:${profile.email}`} style={{ color: "var(--lime)", textDecoration: "underline" }}>
                {profile.email}
              </a>
              .
            </p>
            <p className="mono" style={{ fontSize: 13 }}>{profile.location}</p>
          </div>

          <form onSubmit={onSubmit}>
            <span className="field-label">I need</span>
            <div className="chips">
              {needs.map((n) => (
                <button
                  type="button"
                  key={n}
                  className="chip"
                  data-on={need === n}
                  aria-pressed={need === n}
                  onClick={() => setNeed(need === n ? "" : n)}
                >
                  {n}
                </button>
              ))}
            </div>

            <span className="field-label">Budget</span>
            <div className="chips">
              {budgets.map((b) => (
                <button
                  type="button"
                  key={b}
                  className="chip"
                  data-on={budget === b}
                  aria-pressed={budget === b}
                  onClick={() => setBudget(budget === b ? "" : b)}
                >
                  {b}
                </button>
              ))}
            </div>

            <div className="row2">
              <input className="input" required placeholder="Your name" aria-label="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="input" required type="email" placeholder="Email address" aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <textarea className="textarea" required placeholder="Tell me about the project" aria-label="Project details" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" className="btn btn-lime">Send brief →</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
