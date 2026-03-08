// A react component for self-introduction using bulma css framework.

import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-one-quarter has-text-centered">
            <figure className="image is-square is-inline-block">
              <StaticImage
                src="../images/portrait.jpg"
                alt="Anson S.C. Leung"
                width={256}
                height={256}
                className="is-rounded"
              />
            </figure>
          </div>
          <div className="column">
            <h2 className="title is-2 mb-5">
              <span className="">Anson S.C. Leung</span>
            </h2>
            <p className="is-size-5 content">
              I am a digital product manager and former startup co-founder with 4+ years of experience building and scaling digital platforms across e-commerce, consulting, and travel technology.
              <br />
              I currently lead end-to-end product requirements and user journeys for large-scale e-commerce initiatives at Shoalter Technology.
              <br />
              My background combines Computer Science (CUHK), Information Systems Management (HKUST), and cross-functional product delivery across business and engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
