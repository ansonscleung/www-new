import React from "react";
import { Link } from "gatsby";
import type { StoryEntry as StoryEntryData } from "../data/story";
import JourneyImage from "./journey-image";

export default function StoryEntry({ entry }: { entry: StoryEntryData }) {
  return (
    <article id={entry.id} className="story-entry" data-start={entry.start} aria-labelledby={entry.id + "-title"}>
      {entry.id === "cuhk-study" && <span id="education" className="legacy-anchor" />}
      {entry.id === "itinni" && <span id="experience" className="legacy-anchor" />}
      {entry.id === "shoalter" && <><span id="capabilities" className="legacy-anchor" /><span id="impact" className="legacy-anchor" /></>}
      {entry.id === "now" && <><span id="journey-now" className="legacy-anchor" /></>}
      {entry.id === "travel-planner" && <><span id="explorations" className="legacy-anchor" /><span id="labs" className="legacy-anchor" /></>}
      <p className="story-date">{entry.period}</p>
      <div className="story-content">
        {entry.scope && <p className="project-scope">{entry.scope}</p>}
        <h3 id={entry.id + "-title"}>{entry.title}</h3>
        {entry.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {entry.milestone && <p className="story-milestone">{entry.milestone}</p>}
        {entry.image && <figure className={"story-photo story-photo--" + entry.image.key}>
          <JourneyImage imageKey={entry.image.key} />
          <figcaption>{entry.image.caption}</figcaption>
        </figure>}
        {entry.links && <ul className="story-links">{entry.links.map((link) => <li key={link.href}>
          {link.href.startsWith("#") ? <a href={link.href}>{link.label} ↑</a> : link.href.startsWith("/") ? <Link to={link.href}>{link.label} →</Link> :
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗<span className="is-sr-only"> (opens in a new tab)</span></a>}
        </li>)}</ul>}
        {entry.details && <details className="story-details">
          <summary>{entry.details.label}</summary>
          {entry.details.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {entry.evidence && <ul>{entry.evidence.map((link) => <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗<span className="is-sr-only"> (opens in a new tab)</span></a>
          </li>)}</ul>}
        </details>}
      </div>
    </article>
  );
}
