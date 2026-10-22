import React from "react";
import { story } from "../data/story";
import StoryEntry from "./story-entry";
import "./journey.scss";

export default function JourneySection() {
  return <section id="journey" className="story-section" aria-labelledby="journey-title">
    <header className="story-heading"><h2 id="journey-title">A few chapters along the way</h2>
      <p>Study, work and the things I have made. Some of these happened alongside each other.</p>
    </header>
    <div className="story-timeline">{story.filter((entry) => entry.id !== "now").map((entry) => <StoryEntry key={entry.id} entry={entry} />)}</div>
  </section>;
}
