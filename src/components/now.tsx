import React from "react";
import { story } from "../data/story";
import StoryEntry from "./story-entry";
import "./journey.scss";
export default function NowSection() {
  return <section id="current" className="story-section now-section" aria-labelledby="now-heading">
    <h2 id="now-heading" className="is-sr-only">Now</h2>
    <StoryEntry entry={story.find((entry) => entry.id === "now")!} />
  </section>;
}
