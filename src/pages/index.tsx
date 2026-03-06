import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import About from "../components/about";
import HeroSection from "../components/hero";
import ProjectSection from "../components/projects";
import ExperienceSection from "../components/experience";
import IdentitySection from "../components/identity";
import { FooterData, FooterSection } from "../components/footer";
import "./styles.scss";
import Header from "../components/header";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          links {
            website
            account
            link
            iconName
            iconStyle
          }
        }
      }
    }
  `);

  const iconMap: Record<string, any> = {
    facebook: faFacebook,
    twitter: faTwitter,
    linkedin: faLinkedin,
    github: faGithub,
    envelope: faEnvelope,
  };

  const footer: FooterData[] = data.site.siteMetadata.links.map((item: any) => ({
    ...item,
    icon: iconMap[item.iconName],
  }));

  return (
    <>
      <Header />
      <IdentitySection />
      {/* <HeroSection /> */}
      <About />
      <ProjectSection />
      <ExperienceSection />
      <FooterSection data={footer} />
    </>
  );
};

export const Head = () => <title>Anson S.C. Leung</title>;

export default IndexPage;
