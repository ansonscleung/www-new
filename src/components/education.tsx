import React from "react";
import { educationEntries } from "../data/labs-education";
import "./education.scss";

const EducationSection: React.FC = () => (
  <section
    className="section education-section"
    id="education"
    aria-labelledby="education-title"
  >
    <div className="container">
      <div className="education-intro">
        <p className="education-kicker">Where it started</p>
        <h2 className="title is-2" id="education-title">
          Education
        </h2>
        <p className="education-lede">
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
  </section>
);

export default EducationSection;
