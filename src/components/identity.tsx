import React from "react";
import JourneyImage from "./journey-image";
import { journeyChapters } from "../data/journey";
import "./identity.scss";

const Hero: React.FC = () => (
  <section id="home" className="identity-hero" aria-labelledby="identity-name">
    <div className="identity-copy">
      <h1 id="identity-name">Anson Leung</h1>
      <p className="identity-statement">From intent to working systems.</p>
      <p className="identity-disciplines">
        Business analysis · Product delivery · Technical implementation
      </p>
      <p className="identity-intro">
        I work at the intersection of business, product and technology, turning complex
        requirements into digital systems that teams can actually build and operate.
      </p>
      <div className="identity-actions">
        <a className="button is-primary" href="#selected-work">
          Explore selected work
        </a>
        <a className="button is-light" href="#journey">
          My journey <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>

    <figure className="identity-memories" aria-label="Four photographs from my journey">
      <ol>
        {journeyChapters.map((chapter) => (
          <li key={chapter.id}>
            <a href={"#journey-" + chapter.id} aria-label={chapter.label + " chapter"}>
              <div className="identity-memory-photo" style={{ "--image-position": chapter.imagePosition } as React.CSSProperties}>
                <JourneyImage imageKey={chapter.imageKey} />
              </div>
              <span className="identity-memory-label">
                <span>{chapter.label}</span>
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
      <figcaption>Four places along the way. Explore my journey.</figcaption>
    </figure>
  </section>
);

export default Hero;
