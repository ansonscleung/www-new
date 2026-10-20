import React from "react";
import { experienceEvidence } from "../data/profile-evidence";
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
          <p className="section-label">Experience in practice</p>
          <h2 className="title is-2" id="experience-title">Selected experience</h2>
          <p className="section-description">
            Product and business analysis work across startups, consulting, e-commerce and
            client-facing solution delivery, with hands-on technical work throughout.
          </p>
        </div>
        <div className="experience-timeline">
          {experienceEvidence.map((experience) => (
            <article className="experience-entry" key={experience.id}>
              <p className="experience-period">{experience.period}</p>
              <div className="experience-body">
                <p className="experience-organisation">
                  {experience.organisation}
                  {experience.location ? ` · ${experience.location}` : null}
                </p>
                <h3 className="title is-4">{experience.title}</h3>
                {experience.roleProgression?.length ? (
                  <ol
                    className="experience-progression"
                    aria-label={`Role progression at ${experience.organisation}`}
                  >
                    {experience.roleProgression.map((role) => (
                      <li className="experience-role" key={`${role.title}-${role.period}`}>
                        <p className="experience-role__title">{role.title}</p>
                        <p className="experience-role__period">{role.period}</p>
                        {role.milestone ? (
                          <span className="tag is-primary is-light">{role.milestone}</span>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                ) : null}
                <p>{experience.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
