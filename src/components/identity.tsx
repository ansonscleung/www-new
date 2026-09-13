import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./identity.scss";

const Hero: React.FC = () => (
  <section id="home" className="identity-hero" aria-labelledby="identity-name">
    <div className="identity-copy">
      <h1 id="identity-name">Anson Leung</h1>
      <p className="identity-statement">From intent to working systems.</p>
      <p className="identity-intro">
        I work across business needs, technical implementation and project delivery—helping
        teams clarify what matters, make practical decisions and move work forward.
      </p>
      <div className="identity-actions">
        <a className="identity-primary" href="#selected-work">
          Explore selected work
        </a>
        <a href="#capabilities">
          How I work <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>

    <figure className="identity-portrait" aria-label="Anson Leung outdoors at Aalto University">
      <StaticImage
        src="../images/Portrait.jpg"
        alt="Anson Leung outdoors at sunset in Aalto University"
        placeholder="blurred"
        loading="eager"
      />
      <figcaption>Systems work starts by paying attention to people and context.</figcaption>
    </figure>
  </section>
);

export default Hero;
