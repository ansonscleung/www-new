// A react component for self-introduction using bulma css framework.

import * as React from "react";

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title is-2">
              <span className="">Anson S.C. Leung</span>{" "}
              <span className="">梁兆俊</span>
            </h2>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <p>
              <span className="is-size-5">
                Greetings! This is Anson S.C. Leung. <br />
                An ex-entrepreneur looking for new ways to innovate. <br />
                A software engineer passionate to solve real-world problems.
                <br />A project manager shaping innovative and user-friendly
                products.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
