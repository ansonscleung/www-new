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
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Geologica`,
            file: `https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap`,
          },
          {
            name: `Noto Sans HK`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700&display=swap`,
          },
        ],
      },
    },
  ],
};

module.exports = gatsbyConfig;
