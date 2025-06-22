import React from "react";
import "./links.scss";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  {
    website: "Facebook",
    account: "ansonscleung",
    link: "https://www.facebook.com/ansonscleung",
    icon: icon({ name: "facebook", style: "brands" }),
  },
  {
    website: "Twitter",
    account: "ansonscleung",
    link: "https://twitter.com/ansonscleung",
    icon: icon({ name: "twitter", style: "brands" }),
  },
  {
    website: "LinkedIn",
    account: "ansonscleung",
    link: "https://www.linkedin.com/in/ansonscleung/",
    icon: icon({ name: "linkedin", style: "brands" }),
  },
  {
    website: "GitHub",
    account: "ansonscleung",
    link: "https://github.com/ansonscleung/",
    icon: icon({ name: "github", style: "brands" }),
  },
  {
    website: "Email",
    account: "ansonscleung@link.cuhk.edu.hk",
    link: "mailto:ansonscleung@link.cuhk.edu.hk",
    icon: icon({ name: "envelope" }),
  },
];

const LinksPage: React.FC = () => (
  <section className="section has-background-light is-flex is-flex-direction-column is-align-items-center pt-6 link-section">
    <h1 className="title is-2 has-text-weight-bold mb-5">My Links</h1>
    <div className="is-flex is-flex-direction-column is-align-items-center link-list">
      {socialLinks.map((link) => (
        <a
          key={link.website}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="button is-info is-light is-fullwidth is-rounded is-medium has-text-weight-semibold link-link"
        >
          <span className="icon">
            <FontAwesomeIcon icon={link.icon} />
          </span>
          <span>{link.website}</span>
        </a>
      ))}
    </div>
  </section>
);

export default LinksPage;
