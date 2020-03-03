module.exports = {
  siteMetadata: {
    title: `Full Stack Web Developer`,
    description: `Kenny Mark's Personal Website. I am software engineer based in Cheshire. I am a front-end dev with fullstack experience who loves to code and build cool stuff. Currently employed at Sabs Travel Technologies`,
    author: `@mrkennymark`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kenny Mark Portfolio`,
        short_name: `Kenny Mark`,
        start_url: `/`,
        background_color: `#feedc9`,
        theme_color: `#ffedc5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-68267074-2", head: true, },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Rubik`, variants: [`400`, `500`,] },
          { family: `Work Sans`, variants: [`700`], },
        ],
      },
    }
  ],
}
