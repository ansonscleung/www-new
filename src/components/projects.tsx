import * as React from "react";
import { Link } from "gatsby";
import { selectedWork } from "../data/selected-work";
import "./projects.scss";

const ProjectSection: React.FC = () => {
  const [leadWork, ...secondaryWork] = selectedWork;

  return (
    <section
      className="section selected-work"
      id="selected-work"
      aria-labelledby="selected-work-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2 className="title" id="selected-work-title">Selected Work</h2>
          <p className="section-description">Work where product decisions, system detail and delivery meet.</p>
        </div>

        <article className="selected-work__lead" id="shoalter">
          <div className="selected-work__lead-story">
            <h3 className="title is-3">{leadWork.title}</h3>
            <p className="selected-work__role">{leadWork.role}</p>
            <p className="selected-work__problem">{leadWork.problem}</p>
            <p>{leadWork.approach}</p>
            <p>{leadWork.outcome}</p>
          </div>
          <aside className="selected-work__context" aria-label="Shoalter public company evidence">
            <p>Company context</p>
            <ul>
              {leadWork.technologies
                .filter((item) => item !== "Company-reported scale")
                .map((item) => <li key={item}>{item}</li>)}
            </ul>
            {leadWork.publicEvidence?.map((evidence) => (
              <a key={evidence.url} href={evidence.url} target="_blank" rel="noopener noreferrer">
                {evidence.label}<span aria-hidden="true"> ↗</span>
                <span className="is-sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </aside>
        </article>

        <div id="impact" className="selected-work__secondary-grid">
          {secondaryWork.map((work) => (
            <article className={`selected-work__secondary selected-work__secondary--${work.id}`} id={work.id} key={work.id}>
              <h3 className="title is-4">{work.title}</h3>
              <p className="selected-work__role">{work.role}</p>
              <dl className="selected-work__summary">
                <div><dt>Context</dt><dd>{work.problem}</dd></div>
                <div><dt>What I did</dt><dd>{work.approach}</dd></div>
                <div><dt>Where it led</dt><dd>{work.outcome}</dd></div>
              </dl>
              <ul className="selected-work__focus" aria-label={`${work.title} focus areas`}>
                {work.technologies.map((item) => <li key={item}>{item}</li>)}
              </ul>
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
};

export default ProjectSection;
