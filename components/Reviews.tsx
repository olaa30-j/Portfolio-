"use client";

import { motion } from "framer-motion";
import { reviews } from "./data";

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <span className="eyebrow">Kind words</span>
        <h2 className="title">Testimonials, written as <em>code review comments</em>.</h2>

        <div className="reviews">
          {reviews.map((r, i) => (
            <motion.figure
              className="review"
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="review-file">{r.file}</div>
              <div className="review-diff" aria-hidden="true">
                <div className="del">{r.del}</div>
                <div className="add">{r.add}</div>
              </div>
              <div className="review-body">
                <blockquote>“{r.quote}”</blockquote>
                <figcaption className="who">
                  <span className="avatar">{r.name.split(" ").map((n) => n[0]).join("")}</span>
                  <span>
                    <b>{r.name}</b>
                    <span>{r.role}</span>
                  </span>
                </figcaption>
                <span className="approved">✓ approved</span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
