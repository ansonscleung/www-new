import React from "react";
import QuoteOfTheDay from "./quote";
import "./labs.scss";
export default function LabsSection() {
  return <aside id="other-projects" className="page-shell reading-section" aria-labelledby="other-projects-title">
    <div className="other-projects">
      <h2 id="other-projects-title">Other projects</h2>
      <p><a href="https://github.com/ansonscleung/jyutpingify" target="_blank" rel="noopener noreferrer">jyutpingify ↗<span className="is-sr-only"> (opens in a new tab)</span></a> — a small JavaScript library for turning Chinese text into Jyutping.</p>
    </div>
    <QuoteOfTheDay />
  </aside>;
}
