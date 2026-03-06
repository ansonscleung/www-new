// A react component for self-introduction using bulma css framework.

import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-one-quarter has-text-centered">
            <span className="icon is-large has-text-primary" style={{ width: '150px', height: '150px', backgroundColor: '#f0f0f0', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesomeIcon icon={faUserTie} size="4x" />
            </span>
          </div>
          <div className="column">
            <h2 className="title is-2 mb-5">
              <span className="">Anson S.C. Leung</span>{" "}
              <span className="has-text-grey-light is-size-4">梁兆俊</span>
            </h2>
            <p className="is-size-5 content">
              Greetings! This is Anson S.C. Leung. <br />
              An ex-entrepreneur looking for new ways to innovate. <br />
              A software engineer passionate to solve real-world problems.
              <br />A project manager shaping innovative and user-friendly products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
