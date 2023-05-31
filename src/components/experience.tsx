import React from "react";

interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Experience</h2>
        {experiences.map((experience, index) => (
          <div className="box" key={index}>
            <h3 className="title is-5">{experience.title}</h3>
            <h4 className="subtitle is-6">{experience.company}</h4>
            <p className="is-size-7">{experience.dates}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
