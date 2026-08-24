import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
} from "gatsby-plugin-image";
import indefinite from "indefinite";
import "./identity.scss";

interface Identity {
  identity: string;
  description: string;
  backgroundImage: ImageDataLike;
  mobileImagePosition?: string;
}

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allIdentitiesJson {
        edges {
          node {
            identity
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

  const identities: Identity[] = data.allIdentitiesJson.edges.map(
    (e: any) => e.node
  );

  const [currentIdentity, setCurrentIdentity] = useState<Identity>(
    identities[0]
  );

  const handleCardClick = (identity: Identity) => {
    setCurrentIdentity(identity);
  };

  const image = getImage(currentIdentity.backgroundImage);

  const capitalize = ([firstLetter, ...restOfWord]: string) =>
    firstLetter.toUpperCase() + restOfWord.join("");

  return image ? (
    <section
      id="home"
      className="identity-hero"
      style={
        {
          "--identity-mobile-image-position":
            currentIdentity.mobileImagePosition ?? "center",
        } as React.CSSProperties
      }
    >
      <GatsbyImage
        className="identity-bg"
        imgClassName="identity-bg-image"
        style={{
          gridArea: "1/1",
          height: "100%",
          width: "100%",
        }}
        imgStyle={{ objectFit: "cover" }}
        alt=""
        image={image}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
        }}
        className="section identity-overlay"
      >
        <div className="container">
          <div className="identity is-blurred" aria-live="polite">
            <p className="subtitle is-4">
              Anson Leung is{" "}
              {indefinite(currentIdentity.identity, { articleOnly: true })}
            </p>
            <h1 className="title is-1">
              {capitalize(currentIdentity.identity)}
            </h1>
            <p className="subtitle is-4">
              {currentIdentity.description}
            </p>
            <p className="is-sr-only" aria-live="polite" aria-atomic="true">
              Selected identity: {capitalize(currentIdentity.identity)}. {" "}
              {currentIdentity.description}
            </p>
            <div className="buttons identity-actions">
              <a className="button is-primary is-rounded" href="#projects">
                View my work
              </a>
              <a className="button is-light is-rounded" href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <div className="buttons identity-options" aria-label="Choose a profile">
            {identities.map((identity) => (
              <button
                className={`button is-outlined is-rounded is-blurred${
                  currentIdentity.identity === identity.identity ? " is-selected" : ""
                }`}
                key={identity.identity}
                type="button"
                aria-pressed={currentIdentity.identity === identity.identity}
                onClick={() => handleCardClick(identity)}
              >
                {capitalize(identity.identity)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Hero;
