import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface Link {
  name: string;
  link: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: Link[];
}

const ProjectSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allProjectsJson {
        edges {
          node {
            title
            description
            technologies
            links {
              name
              link
            }
          }
        }
      }
    }
  `);

  const projects: Project[] = data.allProjectsJson.edges.map(
    (e: any) => e.node
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="columns is-multiline">
          {projects.map((project, index) => (
            <div className="column is-one-third" key={index}>
              <div className="box">
                <h3 className="title is-4">{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((tech, index) => (
                    <span className="tag is-primary" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="buttons">
                  {project.links.map((link, index) => (
                    <a href={link.link} className="button is-link" key={index}>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
