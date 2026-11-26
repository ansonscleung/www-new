import React from "react";
import selectedWork from "../data/selected-work.json";
import "./selected-work.scss";

export default function SelectedWorkSection() {
  return (
    <section
      id="selected-work"
      className="page-shell selected-work pb-6"
      aria-labelledby="selected-work-title"
    >
      <header className="selected-work__intro">
        <h2
          id="selected-work-title"
          className="title has-text-weight-medium mb-4"
        >
          {selectedWork.title}
        </h2>
        <p className="has-text-text">{selectedWork.intro}</p>
      </header>
      {selectedWork.cases.map(({ id, context, title, paragraphs, details }) => (
        <article
          key={id}
          id={id}
          className="selected-work__case"
          aria-labelledby={id + "-title"}
        >
          <p className="selected-work__context has-text-text is-size-7 mb-4">
            {context}
          </p>
          <h3 id={id + "-title"} className="title has-text-weight-medium mb-4">
            {title}
          </h3>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
          <details>
            <summary className="has-text-link py-3">{details.label}</summary>
            {details.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4">
                {paragraph}
              </p>
            ))}
          </details>
        </article>
      ))}
      <p className="selected-work__more">
        <a className="is-inline-block py-3" href={selectedWork.more.href}>
          {selectedWork.more.label}
        </a>
      </p>
    </section>
  );
}
