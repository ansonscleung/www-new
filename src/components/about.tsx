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
                An entrepreneur who focus on technology and management, now also
                studying in the Hong Kong University of Science &amp; Technology
                for MSc in Information Systems Management.
              </span>
            </p>
            <p>
              <span className="is-size-5">
                Graduated from The Chinese University of Hong Kong with a BSc in
                Computer Science,{" "}
                <abbr title="Bronze Medalist, Senior Group, HKOI 2013/14; Silver Medalist, Junior Group, HKOI 2013">
                  two-year medalist of Hong Kong Olympiad in Informatics (HKOI)
                </abbr>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
