import React from "react";
import { impactEvidence } from "../data/profile-evidence";
import "./impact.scss";

const ImpactSection: React.FC = () => (
  <section
    className="section impact-section"
    id="impact"
    aria-labelledby="impact-title"
  >
    <div className="container">
      <div className="impact-intro">
        <p className="impact-kicker">Evidence, with context</p>
        <h2 className="title is-2" id="impact-title">Impact</h2>
        <p className="impact-lede">
          Selected signals from earlier product, startup, and operations work
          — kept specific to where they happened.
        </p>
      </div>
      <div className="impact-list">
        {impactEvidence.map((metric) => (
          <article className="impact-row" key={metric.value}>
            <h3 className="title is-3">{metric.value}</h3>
            <div>
              <p className="impact-label">{metric.label}</p>
              <p className="impact-context">{metric.context}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
