import React from "react";
import "./identity.scss";
export default function Hero() {
  return <section id="home" className="page-shell identity-hero" aria-labelledby="identity-name">
    <p className="identity-location">Anson Leung · Hong Kong</p>
    <h1 id="identity-name">Anson Leung</h1>
    <div className="identity-intro">
      <p>I work across product requirements, systems integration and delivery.</p>
      <p>My background spans Computer Science, a travel startup, consulting and e-commerce. I also build software of my own.</p>
    </div>
    <p className="identity-statement">From intent to working systems.</p>
    <nav className="identity-project-links" aria-label="Explore the portfolio">
      <a href="#journey">My experience ↓</a>
      <a href="#now">What I’m making now ↓</a>
    </nav>

  </section>;
}
