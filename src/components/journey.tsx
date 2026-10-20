import React from "react";
import useJourneyStage from "../hooks/use-journey-stage";
import { journeyChapters } from "../data/journey";
import ExperienceSection from "./experience";
import JourneyImage from "./journey-image";
import "./journey.scss";

export default function JourneySection() {
  const { trackRef, enhanced, activeChapter, selectChapter } = useJourneyStage();
  return (
    <section id="journey" className="journey-section" aria-labelledby="journey-title">
      <div className="section journey-heading">
        <div className="container section-heading">
          <p className="section-label">The context behind the work</p>
          <h2 className="title is-2" id="journey-title">A continuing journey</h2>
          <p className="section-description">Computer Science, an exchange semester, Information Systems Management — and the work of putting ideas into practice.</p>
        </div>
      </div>
      <div className="journey-track" ref={trackRef} data-enhanced={enhanced} data-active-chapter={activeChapter}>
        <div className="journey-stage">
          <nav className="journey-navigation" aria-label="Journey chapters">
            <div className="journey-chapter-links">
              {journeyChapters.map((chapter, index) => (
                <a key={chapter.id} href={"#journey-" + chapter.id}
                  aria-current={enhanced && activeChapter === index ? "step" : undefined}
                  onClick={(event) => selectChapter(event, index)}>
                  <span className="journey-number">{String(index + 1).padStart(2, "0")}</span> {chapter.label}
                </a>
              ))}
            </div>
            <a className="journey-skip" href="#explorations">Skip journey <span aria-hidden="true">↓</span></a>
          </nav>
          <div className="journey-slides">
            {journeyChapters.map((chapter, index) => (
              <article
                key={chapter.id} id={"journey-" + chapter.id}
                className="journey-chapter" data-active={activeChapter === index} aria-labelledby={"journey-title-" + chapter.id}
                style={{ "--image-position": chapter.imagePosition } as React.CSSProperties}
              >
                {index === 0 && <span id="education" className="journey-legacy-anchor" />}
                <div className="journey-photo"><JourneyImage imageKey={chapter.imageKey} /></div>
                <div className="journey-copy">
                  <p className="journey-eyebrow"><span>{String(index + 1).padStart(2, "0")} / 04</span> · {chapter.label}</p>
                  <h3 id={"journey-title-" + chapter.id}>{chapter.title}</h3>
                  {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <p className="journey-caption">{chapter.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <ExperienceSection />
    </section>
  );
}
