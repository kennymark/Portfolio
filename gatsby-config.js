
module.exports = {
  siteMetadata: {
    title: `Full Stack Web Developer`,
    description: `Kenny Mark's Personal Website. I am software engineer based in Cheshire. I am a front-end dev with fullstack experience who loves to code and build cool stuff. Currently employed at Sabs Travel Technologies`,
    author: `@mrkennymark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/blogPosts`,
      },
    },
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
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              quality: 100,
              linkImagesToOriginal: true,
            },
          },
        ],

      }
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
  ],
}
