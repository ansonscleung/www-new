import React from "react";
import { educationEntries } from "../data/labs-education";
import "./education.scss";

const EducationSection: React.FC = () => (
  <div
    className="education-section"
    id="education"
    aria-labelledby="education-title"
  >
    <div className="container">
      <div className="section-heading">
        <p className="section-label">Where it started</p>
        <h3 className="title is-3" id="education-title">
          Education
        </h3>
        <p className="section-description">
          Computer Science at CUHK came first, followed later by an MSc in
          Information Systems Management at HKUST, with an exchange semester at
          Aalto University in between.
        </p>
      </div>
      <div className="education-list">
        {educationEntries.map((entry) => (
          <article className="education-entry" key={entry.id}>
            <p className="education-institution">{entry.institution}</p>
            <div>
              <h3 className="title is-4">{entry.award}</h3>
              <p>{entry.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default EducationSection;
