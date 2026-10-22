import React from "react";
import { background } from "../data/story";
import StoryEntry from "./story-entry";
import "./journey.scss";

export default function JourneySection() {
  return <section id="journey" className="story-section background-section" aria-labelledby="journey-title">
    <header className="story-heading"><h2 id="journey-title">Study and the wider context</h2>
      <p>The studies and consulting work alongside these projects. Dates overlap with the work above.</p>
    </header>
    <div className="story-timeline">{background.map((entry) => <StoryEntry key={entry.id} entry={entry} />)}</div>
  </section>;
}
