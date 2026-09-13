import React from "react";
import { Link } from "gatsby";
import "./identity.scss";

const Hero: React.FC = () => (
  <section id="home" className="identity-hero" aria-labelledby="identity-name">
    <div className="identity-copy">
      <h1 id="identity-name">Anson Leung</h1>
      <p className="identity-statement">From intent to working systems.</p>
      <p className="identity-intro">
        I work across business needs, technical implementation and project delivery—helping
        teams clarify what matters, make practical decisions and move work forward.
      </p>
      <div className="identity-actions">
        <a className="identity-primary" href="#selected-work">
          Explore selected work
        </a>
        <a href="#capabilities">
          How I work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>

    <figure className="identity-case-summary" aria-labelledby="travel-summary-title">
      <figcaption id="travel-summary-title">Travel Planner / case summary</figcaption>
      <ol>
        <li>
          <span>01</span>
          <strong>Different ages and travel needs</strong>
          <p>Make pace, mobility, meals, children and elders visible before planning a route.</p>
        </li>
        <li>
          <span>02</span>
          <strong>Explicit planning constraints</strong>
          <p>Give those practical limits a first-class place in the workflow and data model.</p>
        </li>
        <li>
          <span>03</span>
          <strong>An editable itinerary</strong>
          <p>Start with structure while keeping every proposed plan open to human judgement.</p>
        </li>
      </ol>
      <Link to="/work/travel-planner/">Read the case study <span aria-hidden="true">→</span></Link>
    </figure>
  </section>
);

export default Hero;
