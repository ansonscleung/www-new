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
        <div className="experience-intro">
          <p className="experience-kicker">Where I have worked</p>
          <h2 className="title is-2" id="experience-title">Experience</h2>
          <p className="experience-lede">
            Started with a startup, moved into consulting, then spent the last
            few years working on e-commerce products at Shoalter.
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
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
