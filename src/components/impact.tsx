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
        <p className="impact-kicker">Some numbers behind the work</p>
        <h2 className="title is-2" id="impact-title">Impact</h2>
        <p className="impact-lede">
          A few figures that put the products and teams I have worked on into
          perspective. Public company figures are linked to their sources.
        </p>
      </div>
      <div className="impact-list">
        {impactEvidence.map((metric) => (
          <article className="impact-row" key={metric.value}>
            <h3 className="title is-3">{metric.value}</h3>
            <div>
              <p className="impact-label">{metric.label}</p>
              <p className="impact-context">{metric.context}</p>
              {metric.publicEvidence?.length ? (
                <ul className="impact-sources" aria-label={`${metric.label} public sources`}>
                  {metric.publicEvidence.map((evidence) => (
                    <li key={evidence.url}>
                      <a
                        className="impact-source"
                        href={evidence.url}
                        aria-label={`${evidence.label} (opens in a new tab)`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {evidence.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
