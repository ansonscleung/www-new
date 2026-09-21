import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./identity.scss";

const Hero: React.FC = () => (
  <section id="home" className="identity-hero" aria-labelledby="identity-name">
    <div className="identity-copy">
      <h1 id="identity-name">Anson Leung</h1>
      <p className="identity-statement">From intent to working systems.</p>
      <p className="identity-disciplines">
        Business analysis · Product delivery · Technical implementation
      </p>
      <p className="identity-intro">
        I work at the intersection of business, product and technology, turning complex
        requirements into digital systems that teams can actually build and operate.
      </p>
      <div className="identity-actions">
        <a className="button is-primary" href="#selected-work">
          Explore selected work
        </a>
        <a className="button is-light" href="#capabilities">
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
