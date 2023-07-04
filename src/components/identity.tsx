import React, { CSSProperties, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
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

  const parallaxStyle = {
    //backgroundImage: `url(${backgroundImage})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const identityStyle: CSSProperties = {
    mixBlendMode: "difference",
    margin: "-2rem -2rem  0",
    padding: "2rem",
  };

  const capitalize = ([firstLetter, ...restOfWord]: String) =>
    firstLetter.toUpperCase() + restOfWord.join("");

  return image ? (
    <div style={{ display: "grid", alignItems: "end", height: "100vh" }}>
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        alt=""
        image={image}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
        }}
        className="section"
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
            <h2 className="subtitle is-4">{currentIdentity.description}</h2>
          </div>
          <div className="buttons">
            {identities.map((identity, index) => (
              <button
                className="button is-outlined is-rounded is-light is-blurred"
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
