import React from "react";
import "./identity.scss";

const linkedInUrl = "https://www.linkedin.com/in/ansonscleung/";

const Hero: React.FC = () => (
  <section id="home" className="identity-hero" aria-labelledby="identity-name">
    <div className="identity-copy">
      <p className="identity-eyebrow">Technical Product × Solutions</p>
      <h1 id="identity-name">Anson Leung</h1>
      <h2>Technical Product &amp; Solution Delivery Professional</h2>
      <p className="identity-intro">
        Turning ambiguous requirements into shipped systems, integrations, and
        working prototypes.
      </p>
      <div className="identity-actions">
        <a className="identity-primary" href="#selected-work">
          View selected work
        </a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
          <span className="is-sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>

    <div className="identity-system-map" aria-hidden="true">
      <p>Delivery system</p>
      <ol>
        <li><span>01</span> Understand</li>
        <li><span>02</span> Translate</li>
        <li><span>03</span> Deliver</li>
      </ol>
      <div className="identity-system-status">
        <span /> Product · Technology · Operations
      </div>
    </div>
  </section>
);

export default Hero;
