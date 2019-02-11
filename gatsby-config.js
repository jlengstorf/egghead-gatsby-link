module.exports = {
  siteMetadata: {
    title: `How to Use Gatsby Links`,
    description: `These examples show everything you need to get started using Gatsby’s Link component.`,
    author: `@jlengstorf`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `egghead-gatsby-link`,
        short_name: `gatsby-link`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
