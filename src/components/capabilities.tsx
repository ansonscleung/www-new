import React from "react";
import { capabilities } from "../data/profile-evidence";
import "./capabilities.scss";

const evidenceLinks: Record<string, string> = {
  needs: "#shoalter",
  build: "#shoalter",
  use: "/work/travel-planner/",
};

const CapabilitiesSection: React.FC = () => (
  <section
    className="section capabilities-section"
    id="capabilities"
    aria-labelledby="capabilities-title"
  >
    <div className="container">
      <div className="section-heading">
        <p className="section-label">A practical working method</p>
        <h2 className="title is-2" id="capabilities-title">
          How I work
        </h2>
      </div>
      <div className="capabilities-list">
        {capabilities.map((capability) => (
            <article className="capability-row" key={capability.id}>
              <div className="capability-main">
                <h3 className="title is-4">{capability.title}</h3>
              </div>
              <div className="capability-copy">
                <p>{capability.description}</p>
                <a href={evidenceLinks[capability.id]}>See related work <span aria-hidden="true">→</span></a>
              </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
