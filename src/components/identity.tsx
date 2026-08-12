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
    <div className="identity-hero">
      <GatsbyImage
        className="identity-bg"
        style={{
          gridArea: "1/1",
          height: "100%",
          width: "100%",
        }}
        imgStyle={{ objectFit: "cover", objectPosition: "center" }}
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
          </div>
          <div className="buttons">
            {identities.map((identity) => (
              <button
                type="button"
                className={`button is-outlined is-rounded is-blurred${
                  identity.identity === currentIdentity.identity
                    ? " is-active"
                    : ""
                }`}
                key={identity.identity}
                onClick={() => handleCardClick(identity)}
                aria-pressed={identity.identity === currentIdentity.identity}
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
