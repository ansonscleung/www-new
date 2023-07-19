import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import "./experience.scss";

interface Experience {
  title: string;
  company: string;
  start_date: string;
  end_date?: string;
  location?: string;
  description?: string;
  responsibilities?: string[];
}

const ExperienceSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allExperiencesJson {
        edges {
          node {
            title
            company
            start_date
            end_date
            location
            responsibilities
          }
        }
      }
    }
  `);

  const experiences: Experience[] = data.allExperiencesJson.edges.map(
    (e: any) => e.node
  );

  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const initialExperienceCount = 3;

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Experience</h2>
        {experiences
          .sort(
            (a, b) =>
              new Date(b.start_date).getTime() -
              new Date(a.start_date).getTime()
          )
          .map((experience, index) => (
            <div
              className={`box experience${
                !showAllExperiences && index >= initialExperienceCount
                  ? " hide"
                  : ""
              }`}
              key={index}
            >
              <div className="level">
                <div className="level-left">
                  <div>
                    <h3 className="title is-5">{experience.title}</h3>
                    <h4 className="subtitle is-6">{experience.company}</h4>
                  </div>
                </div>
                <div className="level-right has-text-right-tablet">
                  <div>
                    <p>
                      {new Intl.DateTimeFormat("en", {
                        month: "short",
                        year: "numeric",
                      }).format(new Date(experience.start_date))}
                      {" - "}
                      {experience.end_date
                        ? new Intl.DateTimeFormat("en", {
                            month: "short",
                            year: "numeric",
                          }).format(new Date(experience.end_date))
                        : "Present"}
                    </p>
                    <p>{experience.location}</p>
                  </div>
                </div>
              </div>
              <p className="content">
                <p>{experience.description}</p>
                <ul>
                  {experience.responsibilities?.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </p>
            </div>
          ))}
        {experiences.length > initialExperienceCount && (
          <button
            className="button is-primary"
            onClick={() => setShowAllExperiences(!showAllExperiences)}
          >
            <span className="icon">
              {showAllExperiences ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
            <span>{showAllExperiences ? "View Less" : "View All"}</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
