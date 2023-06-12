import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface Experience {
  title: string;
  company: string;
  start_date: string;
  end_date?: string;
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
            responsibilities
          }
        }
      }
    }
  `);

  const experiences: Experience[] = data.allExperiencesJson.edges.map(
    (e: any) => e.node
  );

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
            <div className="box" key={index}>
              <h3 className="title is-5">{experience.title}</h3>
              <h4 className="subtitle is-6">{experience.company}</h4>
              <p className="is-size-7">
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  year: "numeric",
                }).format(new Date(experience.start_date))}{" "}
                -{" "}
                {experience.end_date
                  ? new Intl.DateTimeFormat("en", {
                      month: "short",
                      year: "numeric",
                    }).format(new Date(experience.end_date))
                  : "Present"}
              </p>
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
      </div>
    </section>
  );
};

export default ExperienceSection;
