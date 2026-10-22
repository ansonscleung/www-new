import React from "react";
import { projects } from "../data/story";
import StoryEntry from "./story-entry";
import "./journey.scss";
import "./projects.scss";
export default function ProjectSection() {
  return <section id="selected-work" className="story-section project-section" aria-labelledby="projects-title">
    <header className="story-heading">
      <h2 id="projects-title">From small tools to systems</h2>
      <p>Personal tools, shared products and work across multiple systems — followed by what I am building independently now.</p>
      <nav aria-label="Project trail">
        <ol className="project-outline">{projects.map((entry) => <li key={entry.id}>
          <a href={"#" + entry.id}>{entry.id === "beginnings" ? "Pascal" : entry.id === "itinni" ? "itinni" : entry.id === "shoalter" ? "Shoalter work" : entry.title}</a>
        </li>)}</ol>
      </nav>
      <p className="project-order-note">A trail through the changing scope of my work. Some projects overlapped; dates are shown where known.</p>
    </header>
    <div className="project-trail">{projects.map((entry) => <StoryEntry key={entry.id} entry={entry} />)}</div>
  </section>;
}
