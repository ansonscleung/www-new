import React from "react";
import "./identity.scss";
export default function Hero() {
  return <section id="home" className="page-shell identity-hero" aria-labelledby="identity-name">
    <p className="identity-location">Hong Kong</p>
    <h1 id="identity-name">Anson Leung</h1>
    <div className="identity-intro">
      <p>I work across product requirements, systems integration and delivery.</p>
    </div>
    <p className="identity-statement">I turn business needs into clear workflows, system specifications and testable releases.</p>
    <nav className="identity-project-links" aria-label="Explore the portfolio">
      <a href="#selected-work">Selected work ↓</a>
      <a href="#journey">My experience ↓</a>
      <a href="#now">What I’m making now ↓</a>
    </nav>

  </section>;
}
