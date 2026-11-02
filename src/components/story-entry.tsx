import React from "react";
import { Link } from "gatsby";
import type { StoryEntry as StoryEntryData } from "../data/story";
import JourneyImage from "./journey-image";

export default function StoryEntry({ entry, nested = false }: { entry: StoryEntryData; nested?: boolean }) {
  const Tag = nested ? "section" : "article";
  const Heading = nested ? "h4" : "h3";
  return <Tag id={entry.id} className={(nested ? "story-part" : "story-entry") + (entry.compact ? " story-compact" : "")} data-start={entry.start} aria-labelledby={entry.id + "-title"}>
    {entry.id === "cuhk-study" && <><span id="education" className="legacy-anchor" /><span id="journey-cuhk" className="legacy-anchor" /></>}
    {entry.id === "itinni" && <><span id="experience" className="legacy-anchor" /><span id="selected-work" className="legacy-anchor" /></>}
    {entry.id === "shoalter" && <><span id="capabilities" className="legacy-anchor" /><span id="impact" className="legacy-anchor" /></>}
    {entry.id === "now" && <span id="journey-now" className="legacy-anchor" />}
    {entry.id === "travel-planner" && <><span id="explorations" className="legacy-anchor" /><span id="labs" className="legacy-anchor" /></>}
    <div className={"story-row" + (entry.image ? " story-row--illustrated" : "")}>
      <div className="story-content">
        {entry.period && <p className="story-date">{entry.period}</p>}
        <Heading id={entry.id + "-title"}>{entry.title}</Heading>
        {entry.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {entry.milestone && <p className="story-milestone">{entry.milestone}</p>}
        {entry.links && <ul className="story-links">{entry.links.map((link) => <li key={link.href}>
          {link.href.startsWith("/") ? <Link to={link.href}>{link.label} →</Link> :
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗<span className="is-sr-only"> (opens in a new tab)</span></a>}
        </li>)}</ul>}
        {entry.details && <details className="story-details">
          <summary>{entry.details.label}</summary>
          {entry.details.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {entry.details.groups?.map(group => <div key={group.title}>
            <p><strong>{group.title}</strong></p>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>)}
          {entry.evidence && <ul>{entry.evidence.map((link) => <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗<span className="is-sr-only"> (opens in a new tab)</span></a>
          </li>)}</ul>}
        </details>}
      </div>
      {entry.image && <figure className={"story-photo story-photo--" + entry.image.key}>
        <JourneyImage imageKey={entry.image.key} />
        {entry.image.caption && <figcaption>{entry.image.caption}</figcaption>}
      </figure>}
    </div>
    {entry.parts?.map(part => <StoryEntry key={part.id} entry={part} nested />)}
  </Tag>;
}
