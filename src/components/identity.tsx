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

  const capitalize = ([firstLetter, ...restOfWord]: String) =>
    firstLetter.toUpperCase() + restOfWord.join("");

  return image ? (
    <div
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
          <div id="identity" className="identity is-blurred">
            <h1 className="subtitle is-4">
              Anson Leung is{" "}
              {indefinite(currentIdentity.identity, { articleOnly: true })}
            </h1>
            <h1 className="title is-1">
              {capitalize(currentIdentity.identity)}
            </h1>
            <h2 className="subtitle is-4">
              {currentIdentity.description}
            </h2>
          </div>
          <div className="buttons">
            {identities.map((identity, index) => (
              <button
                className="button is-outlined is-rounded is-blurred"
                key={index}
                onClick={() => handleCardClick(identity)}
              >
                {capitalize(identity.identity)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Hero;
