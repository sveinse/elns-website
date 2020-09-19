const { DEPLOY_PRIME_URL } = process.env;

module.exports = {
  siteMetadata: {
    title: `ELNS Audio Tool`,
    description: `Interactive multi-channel audio test application`,
    author: `@sveinse`,
    siteUrl: DEPLOY_PRIME_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `elns`,
        short_name: `elns`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/elns-icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-resolve-src`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
