import React from "react";
import { experience } from "../data/story";
import StoryEntry from "./story-entry";
import "./journey.scss";

export default function JourneySection() {
  return <section id="journey" className="page-shell story-section" aria-labelledby="journey-title">
    <header className="story-heading"><h2 id="journey-title">Experience &amp; projects</h2>
    </header>
    <div className="story-timeline">{experience.map(entry => <StoryEntry key={entry.id} entry={entry} />)}</div>
  </section>;
}
