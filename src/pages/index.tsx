import * as React from "react";
import { Link } from "gatsby";
import About from "../components/about";
import HeroSection from "../components/hero";
import ProjectSection from "../components/projects";
import ExperienceSection from "../components/experience";
import IdentitySection from "../components/identity";
import { FooterData, FooterSection } from "../components/footer";
import "./styles.scss";
import Header from "../components/header";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const IndexPage: React.FC = () => {
  const footer: FooterData[] = [
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
