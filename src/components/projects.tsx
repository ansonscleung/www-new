import React from "react";
import { workIndex } from "../data/story";
import "./projects.scss";
export default function ProjectSection() {
  return <nav id="selected-work" className="work-index" aria-label="Work index">
    <p>Go straight to the work</p>
    <ul>{workIndex.map((work) => <li key={work.id}><a href={"#" + work.id}>{work.label} <span aria-hidden="true">↗</span></a><span>{work.description}</span></li>)}</ul>
  </nav>;
}
