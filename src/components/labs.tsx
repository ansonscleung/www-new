import React from "react";
import { Link } from "gatsby";
import { travelPlanner } from "../data/selected-work";
import { StaticImage } from "gatsby-plugin-image";
import { labProjects } from "../data/labs-education";
import QuoteOfTheDay from "./quote";
import "./labs.scss";

const LabsSection: React.FC = () => (
  <section
    className="section labs-section"
    id="explorations"
    aria-labelledby="labs-title"
  >
    <div className="container">
      <div className="section-heading">
        <p className="section-label">Small tools, real questions</p>
        <h2 className="title is-2" id="labs-title">Explorations & personal work</h2>
        <p className="section-description">
          Small projects and experiments that keep the hands-on technical side
          alive outside day-to-day product work.
        </p>
      </div>
      <article className="exploration-feature" id="travel-planner">
        <div>
          <p className="section-label">Ongoing personal product · Private prototype</p>
          <h3 className="title is-3">Travel Planner</h3>
          <p className="exploration-question">{travelPlanner.problem}</p>
        </div>
        <div>
          <p>{travelPlanner.approach}</p>
          <p>{travelPlanner.outcome}</p>
          <Link className="lab-link" to="/work/travel-planner/">Read the Travel Planner case study <span aria-hidden="true">→</span></Link>
        </div>
      </article>
      <article className="labs-feature">
        <StaticImage src="../images/MusicCompare.png" alt="MusicCompare comparing two music tracks in a browser" placeholder="blurred" />
        <div>
          <p className="section-label">Existing personal work</p>
          <h3 className="title is-3">MusicCompare</h3>
          <p>Steven Wong and I built MusicCompare to experiment with comparing two pieces of music directly in the browser. It later became part of the 2020 GitHub Archive Program.</p>
          <a className="lab-link" href="https://ansonscleung.github.io/MusicCompare/" target="_blank" rel="noopener noreferrer">Visit MusicCompare <span aria-hidden="true">↗</span><span className="is-sr-only"> (opens in a new tab)</span></a>
        </div>
      </article>
      <div className="labs-list">
        {labProjects.map((project) => (
          project.id === "musiccompare" ? null : (
          <article className="lab-entry" key={project.id}>
            <div className="lab-heading">
              <h3 className="title is-4">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="lab-meta">
              <ul
                className="lab-technologies"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="lab-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel}
                <span aria-hidden="true"> ↗</span>
                <span className="is-sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
          )
        ))}
      </div>
      <QuoteOfTheDay />
    </div>
  </section>
);

export default LabsSection;
