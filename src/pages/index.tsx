import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import CapabilitiesSection from "../components/capabilities";
import ContactSection from "../components/contact";
import JourneySection from "../components/journey";
import IdentitySection from "../components/identity";
import LabsSection from "../components/labs";
import ProjectSection from "../components/projects";
import { FooterData, FooterSection } from "../components/footer";
import "./styles.scss";
import Header from "../components/header";
import Seo from "../components/seo";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
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
    twitter: faXTwitter,
    linkedin: faLinkedin,
    github: faGithub,
    envelope: faEnvelope,
  };

  const footer: FooterData[] = data.site.siteMetadata.links
    .map((item: any) => ({
      ...item,
      icon: iconMap[item.iconName],
    }))
    .filter((item: FooterData) => Boolean(item.icon));

  return (
    <>
      <Header />
      <main>
        <IdentitySection />
        <ProjectSection />
        <CapabilitiesSection />
        <JourneySection />
        <LabsSection />
        <ContactSection />
      </main>
      <FooterSection data={footer} />
    </>
  );
};

export const Head = () => (
  <Seo title="Anson Leung | Business Analysis, Product & Delivery" pathname="/" />
);

export default IndexPage;
