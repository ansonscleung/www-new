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

const IndexPage: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "https://example.com/project1",
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      description: "Praesent vel ipsum sed nisl cursus ultricies.",
      technologies: ["Angular", "Firebase"],
      demoLink: "https://example.com/project2",
      githubLink: "https://github.com/username/project2",
    },
    // Add more projects as needed
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "ABC Company",
      dates: "January 2020 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Front-end Developer",
      company: "XYZ Agency",
      dates: "July 2018 - December 2019",
      description: "Praesent vel ipsum sed nisl cursus ultricies.",
    },
    // Add more experiences as needed
  ];

  const footer: FooterData[] = [
    {
      website: "Facebook",
      account: "ansonscleung",
      link: "https://www.facebook.com/ansonscleung",
      icon: "facebook",
    },
    {
      website: "Twitter",
      account: "ansonscleung",
      link: "https://twitter.com/ansonscleung",
      icon: "twitter",
    },
    {
      website: "LinkedIn",
      account: "ansonscleung",
      link: "https://www.linkedin.com/in/ansonscleung/",
      icon: "linkedin",
    },
    {
      website: "GitHub",
      account: "ansonscleung",
      link: "https://github.com/ansonscleung/",
      icon: "github",
    },
    {
      website: "Email",
      account: "ansonscleung@link.cuhk.edu.hk",
      link: "mailto:ansonscleung@link.cuhk.edu.hk",
      icon: "envelope",
    },
  ];

  return (
    <>
      <Header />
      <IdentitySection />
      <HeroSection />
      <About />
      <ProjectSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <FooterSection data={footer} />
    </>
  );
};

export const Head = () => <title>Anson S.C. Leung</title>;

export default IndexPage;
