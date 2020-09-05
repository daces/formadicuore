/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "aformadicuore",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a posuere urna. Donec a nibh nec libero accumsan lacinia.",
    url: "https://aformadicuore.it",
    instagramUsername: "@aformadicuore"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname,  `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  
}
/*
module.exports = {
  
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    }
  ]
  
}
*/