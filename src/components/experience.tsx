import React from "react";
import { experienceEvidence } from "../data/profile-evidence";
import EducationSection from "./education";
import "./experience.scss";

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">The context behind the work</p>
          <h2 className="title is-2" id="experience-title">Background</h2>
          <p className="section-description">
            A route through startups, consulting, e-commerce and digital delivery.
          </p>
        </div>
        <div className="experience-timeline">
          {experienceEvidence.map((experience) => (
            <article className="experience-entry" key={experience.id}>
              <p className="experience-period">{experience.period}</p>
              <div className="experience-body">
                <p className="experience-organisation">
                  {experience.organisation}
                </p>
                <h3 className="title is-4">{experience.title}</h3>
                <p>{experience.summary}</p>
                {experience.highlights.length ? (
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
        <EducationSection />
      </div>
    </section>
  );
};

export default ExperienceSection;
