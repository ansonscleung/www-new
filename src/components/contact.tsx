import React from "react";
import "./contact.scss";

const linkedInUrl = "https://www.linkedin.com/in/ansonscleung/";

const ContactSection: React.FC = () => (
  <section
    className="section contact-section"
    id="contact"
    aria-labelledby="contact-title"
  >
    <div className="page-shell">
      <div className="contact-panel section-heading">
        <h2 className="title is-2" id="contact-title">Let’s stay in touch.</h2>
        <div className="contact-actions">
          <a className="button is-primary" href="mailto:ansonscleung@gmail.com">Email Anson</a>
          <a className="button is-light" href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn<span aria-hidden="true"> ↗</span><span className="is-sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
