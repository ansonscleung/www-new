import React from "react";
import "./links.scss";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { graphql, useStaticQuery } from "gatsby";

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
    <section className="section has-background-light is-flex is-flex-direction-column is-align-items-center pt-6 link-section">
      <h1 className="title is-2 has-text-weight-bold mb-5">My Links</h1>
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
    </section>
  );
};

export default LinksPage;
