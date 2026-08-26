import React from "react";
import { capabilities } from "../data/profile-evidence";
import "./capabilities.scss";

const CapabilitiesSection: React.FC = () => (
  <section
    className="section capabilities-section"
    id="capabilities"
    aria-labelledby="capabilities-title"
  >
    <div className="container">
      <div className="capabilities-intro">
        <p className="capabilities-kicker">Technical Product × Solutions</p>
        <h2 className="title is-2" id="capabilities-title">
          What I bring
        </h2>
        <p className="capabilities-lede">
          A product practice with one foot in the customer problem and the
          other in the system that has to deliver it.
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
              </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
