import React from "react";
import "./links.scss";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { graphql, Link, useStaticQuery } from "gatsby";
import Seo from "../components/seo";

const LinksPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          links {
            website
            account
            link
            iconName
          }
        }
      }
    }
  `);

  const iconMap: Record<string, any> = {
    twitter: faXTwitter,
    linkedin: faLinkedin,
    github: faGithub,
    envelope: faEnvelope,
  };

  const socialLinks = data.site.siteMetadata.links
    .map((item: any) => ({
      ...item,
      icon: iconMap[item.iconName],
    }))
    .filter((item: any) => Boolean(item.icon));

  return (
    <main className="section is-flex is-flex-direction-column is-align-items-center pt-6 link-section">
      <Link to="/" className="link-home mb-5">
        &larr; Back to home
      </Link>
      <h1 className="title is-2 has-text-weight-bold mb-5 link-title">
        My Links
      </h1>
      <div className="is-flex is-flex-direction-column is-align-items-center link-list">
        {socialLinks.map((link: any) => (
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
    </main>
  );
};

export const Head = () => (
  <Seo title="Links | Anson S.C. Leung" pathname="/links/" />
);

export default LinksPage;
