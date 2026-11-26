import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seo from "../components/seo";
import "./styles.scss";
import "./links.scss";

const email = "anson@ascl.me";
const profiles = [
  { name: "LinkedIn", key: "linkedin", icon: faLinkedin },
  { name: "GitHub", key: "github", icon: faGithub },
  { name: "X", key: "twitter", icon: faXTwitter },
];

const LinksPage: React.FC = () => {
  const { site } = useStaticQuery<{
    site: { siteMetadata: { links: { iconName: string; link: string }[] } };
  }>(graphql`
    query {
      site {
        siteMetadata {
          links {
            iconName
            link
          }
        }
      }
    }
  `);

  return (
    <main className="link-section">
      <div className="link-layout columns is-desktop is-vcentered is-variable is-6 mx-auto">
        <header className="column is-7-desktop link-identity">
          <h1 className="has-text-weight-semibold">Anson S. C. Leung</h1>
          <p className="link-name-zh has-text-weight-semibold" lang="zh-HK">梁兆俊</p>
          <p className="link-role">Technical Business Analysis · Product Delivery</p>
        </header>

        <nav className="column link-list is-flex is-flex-direction-column" aria-label="Portfolio and contact">
          <Link to="/" className="button is-primary is-fullwidth link-link">
            <FontAwesomeIcon icon={faGlobe} fixedWidth aria-hidden="true" />
            <span>View portfolio <small>Work, experience &amp; projects</small></span>
            <span className="link-arrow" aria-hidden="true">→</span>
          </Link>
          <a href={`mailto:${email}`} className="button is-fullwidth link-link">
            <FontAwesomeIcon icon={faEnvelope} fixedWidth aria-hidden="true" />
            <span>Email Anson <small>{email}</small></span>
          </a>
          {profiles.map(({ name, key, icon }) => {
            const profile = site.siteMetadata.links.find(({ iconName }) => iconName === key);
            if (!profile) return null;

            return (
              <a key={key} href={profile.link} className="button is-fullwidth link-link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} fixedWidth aria-hidden="true" />
                <span>{name}</span>
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </nav>
      </div>
    </main>
  );
};

export const Head = () => (
  <Seo title="Links | Anson S.C. Leung" pathname="/links/" />
);

export default LinksPage;
