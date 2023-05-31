// @ts-check

import path from "path";

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const gatsbyConfig = {
  siteMetadata: {
    title: `Anson Leung`,
    siteUrl: `https://www.ansonscleung.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
  ],
};

module.exports = gatsbyConfig;
