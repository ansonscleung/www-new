import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import "./identity.scss";

interface CareerStage {
  stage: string;
  description: string;
  backgroundImage: ImageDataLike;
  mobileImagePosition?: string;
}

const AUTOPLAY_DELAY_MS = 7_000;

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allIdentitiesJson {
        edges {
          node {
            stage
            description
            mobileImagePosition
            backgroundImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  const stages: CareerStage[] = data.allIdentitiesJson.edges.map(
    (edge: { node: CareerStage }) => edge.node
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [pointerPaused, setPointerPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const isPaused = userPaused || pointerPaused || focusPaused || reducedMotion;
  const currentStage = stages[currentIndex];

  const selectStage = (index: number, announce = true) => {
    const nextIndex = (index + stages.length) % stages.length;
    setCurrentIndex(nextIndex);
    setAnnouncement(announce ? `${stages[nextIndex].stage} selected.` : "");
  };

  useEffect(() => {
    if (isPaused || stages.length < 2) return;
    const timer = window.setTimeout(
      () => selectStage(currentIndex + 1, false),
      AUTOPLAY_DELAY_MS
    );
    return () => window.clearTimeout(timer);
  }, [currentIndex, isPaused, stages.length]);

  if (!currentStage) return null;
  const image = getImage(currentStage.backgroundImage);

  return image ? (
    <section
      id="home"
      className="identity-hero"
      style={
        {
          "--identity-mobile-image-position":
            currentStage.mobileImagePosition ?? "center",
        } as React.CSSProperties
      }
    >
      <GatsbyImage
        className="identity-bg"
        imgClassName="identity-bg-image"
        style={{ gridArea: "1/1", height: "100%", width: "100%" }}
        imgStyle={{ objectFit: "cover" }}
        alt=""
        image={image}
      />
      <div
        className="section identity-overlay"
        style={{ gridArea: "1/1", position: "relative" }}
      >
        <div className="container">
          <header className="identity-fixed is-blurred">
            <p className="identity-eyebrow">Technical Product × Solutions</p>
            <h1 className="title is-1">Anson Leung</h1>
            <p className="subtitle is-4 identity-positioning">
              I build digital products where technology meets real-world problems.
            </p>
          </header>
          <div
            className="identity-carousel is-blurred"
            role="region"
            aria-roledescription="carousel"
            aria-label="Career journey"
            onPointerEnter={() => setPointerPaused(true)}
            onPointerLeave={() => setPointerPaused(false)}
            onFocusCapture={() => setFocusPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setFocusPaused(false);
              }
            }}
          >
            <div className="identity-stage" aria-describedby="career-stage-description">
              <p className="identity-eyebrow">
                Career journey · {currentIndex + 1} / {stages.length}
              </p>
              <h2 className="title is-3">{currentStage.stage}</h2>
              <p id="career-stage-description" className="subtitle is-5">
                {currentStage.description}
              </p>
            </div>
            <p className="is-sr-only" aria-live="polite" aria-atomic="true">
              {announcement}
            </p>
            <div className="identity-controls">
              <div className="buttons identity-navigation" aria-label="Carousel controls">
                <button
                  className="button is-light is-rounded"
                  type="button"
                  aria-label="Previous stage"
                  onClick={() => selectStage(currentIndex - 1)}
                >
                  Previous
                </button>
                <button
                  className="button is-light is-rounded"
                  type="button"
                  aria-label={userPaused ? "Resume carousel" : "Pause carousel"}
                  onClick={() => setUserPaused((paused) => !paused)}
                >
                  {userPaused ? "Resume" : "Pause"}
                </button>
                <button
                  className="button is-light is-rounded"
                  type="button"
                  aria-label="Next stage"
                  onClick={() => selectStage(currentIndex + 1)}
                >
                  Next
                </button>
              </div>
              <div className="identity-options" aria-label="Choose a career stage">
                {stages.map((stage, index) => (
                  <button
                    className={`identity-indicator${
                      currentIndex === index ? " is-selected" : ""
                    }`}
                    key={stage.stage}
                    type="button"
                    aria-label={`Show ${stage.stage} stage`}
                    aria-pressed={currentIndex === index}
                    onClick={() => selectStage(index)}
                  >
                    <span>{stage.stage}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default Hero;
