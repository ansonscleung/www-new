import * as React from "react";
import { Link } from "gatsby";
import { selectedWork } from "../data/selected-work";
import "./projects.scss";

const ProjectSection: React.FC = () => (
  <section
    className="section selected-work"
    id="selected-work"
    aria-labelledby="selected-work-title"
  >
    <div className="container">
      <div className="selected-work__intro">
        <p className="selected-work__eyebrow">Product leadership in practice</p>
        <h2 className="title" id="selected-work-title">
          Selected Work
        </h2>
      </div>
      <div className="selected-work__grid">
        {selectedWork.map((work) => (
          <article className="selected-work__card" key={work.id}>
            <p className="selected-work__role">{work.role}</p>
            <h3 className="title is-4">{work.title}</h3>
            <dl className="selected-work__summary">
              <div>
                <dt>Problem</dt>
                <dd>{work.problem}</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>{work.approach}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{work.outcome}</dd>
              </div>
            </dl>
            <ul
              className="selected-work__focus"
              aria-label={`${work.title} focus areas`}
            >
              {work.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {work.publicEvidence?.length ? (
              <div className="selected-work__evidence">
                <p>Public company disclosures</p>
                <ul>
                  {work.publicEvidence.map((evidence) => (
                    <li key={evidence.url}>
                      <a
                        href={evidence.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {evidence.label}
                        <span aria-hidden="true"> ↗</span>
                        <span className="is-sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {work.href ? (
              <Link className="selected-work__link" to={work.href}>
                Read the Travel Planner case study <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
