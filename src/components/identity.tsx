import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import indefinite from "indefinite";

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

  const capitalize = ([firstLetter, ...restOfWord]: String) =>
    firstLetter.toUpperCase() + restOfWord.join("");

  return image ? (
    <BgImage Tag="section" image={image} className="hero is-fullheight">
      <div className="hero-body is-overlay">
        <div className="container">
          <h1 className="subtitle is-4">
            Anson Leung is{" "}
            {indefinite(currentIdentity.identity, { articleOnly: true })}
          </h1>
          <h1 className="title is-1">{capitalize(currentIdentity.identity)}</h1>
          <h2 className="subtitle is-4">{currentIdentity.description}</h2>
          <div className="columns">
            {identities.map((identity, index) => (
              <div className="column" key={index}>
                <div className="box" onClick={() => handleCardClick(identity)}>
                  <h3 className="title is-5">
                    {capitalize(identity.identity)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BgImage>
  ) : (
    <></>
  );
};

export default Hero;
