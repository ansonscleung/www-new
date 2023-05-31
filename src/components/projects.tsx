import * as React from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

interface ProjectSectionProps {
  projects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
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
                  <a href={project.demoLink} className="button is-link">
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="button is-link is-light"
                  >
                    GitHub
                  </a>
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
