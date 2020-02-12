module.exports = {
  siteMetadata: {
    title: `Full Stack Web Developer`,
    description: `Kenny Mark's Personal Website. I am software engineer based in Cheshire. I primarily work with the web, backend and front-end but I love me some mobile react native. Currently employed at Trelleborg Marine System`,
    author: `@mrkennymark`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },

    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kenny Mark Portfolio`,
        short_name: `Kenny Mark`,
        start_url: `/`,
        background_color: `#ecc94b`,
        theme_color: `#f6e05e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
