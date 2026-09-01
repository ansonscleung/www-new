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
        <div className="selected-work__intro">
          <p className="selected-work__eyebrow">Selected work / 01</p>
          <h2 className="title" id="selected-work-title">Selected Work</h2>
          <p>Work where product decisions, system detail and delivery meet.</p>
        </div>

        <article className="selected-work__lead">
          <div className="selected-work__lead-story">
            <p className="selected-work__role">{leadWork.role}</p>
            <h3 className="title is-3">{leadWork.title}</h3>
            <p className="selected-work__problem">{leadWork.problem}</p>
            <p>{leadWork.approach}</p>
            <p>{leadWork.outcome}</p>
            <ol className="selected-work__sequence" aria-label="Delivery sequence">
              <li><span>01</span>Requirements</li>
              <li><span>02</span>UAT</li>
              <li><span>03</span>Release</li>
            </ol>
          </div>
          <aside className="selected-work__scale" aria-label="Shoalter public company evidence">
            <p className="selected-work__scale-label">Company-reported scale</p>
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

        <div className="selected-work__secondary-grid">
          {secondaryWork.map((work) => (
            <article className="selected-work__secondary" key={work.id}>
              <p className="selected-work__role">{work.role}</p>
              <h3 className="title is-4">{work.title}</h3>
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
