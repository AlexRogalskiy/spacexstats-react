module.exports = {
  siteMetadata: {
    title: `SpaceX Stats`,
    description: `SpaceX Stats is the ultimate place to keep track of SpaceX's achievements into providing cheaper access to space and making human life multiplanetary.`,
    author: `Albéric Trancart`
  },
  plugins: [
    // Codebase
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },

    // Assets
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // SEO
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.spacexstats.xyz`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-108091199-1`,
        head: false
      }
    },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
    //   }
    // },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
