import React from "react";
import { capabilities } from "../data/profile-evidence";
import "./capabilities.scss";

const evidenceLinks: Record<string, string> = {
  needs: "#shoalter",
  build: "/work/travel-planner/",
  use: "#shoalter",
};

const CapabilitiesSection: React.FC = () => (
  <section
    className="section capabilities-section"
    id="capabilities"
    aria-labelledby="capabilities-title"
  >
    <div className="container">
      <div className="capabilities-intro">
        <p className="capabilities-kicker">A practical working method</p>
        <h2 className="title is-2" id="capabilities-title">
          How I work
        </h2>
        <p className="capabilities-lede">
          I keep the question, the system and the work needed to use it in view at the same time.
        </p>
      </div>
      <div className="capabilities-list">
        {capabilities.map((capability, index) => (
            <article className="capability-row" key={capability.id}>
              <span className="capability-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="capability-main">
                <p className="capability-eyebrow">{capability.eyebrow}</p>
                <h3 className="title is-4">{capability.title}</h3>
              </div>
              <div className="capability-copy">
                <p>{capability.description}</p>
                <p className="capability-detail">{capability.details}</p>
                <a href={evidenceLinks[capability.id]}>See related work <span aria-hidden="true">→</span></a>
              </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
