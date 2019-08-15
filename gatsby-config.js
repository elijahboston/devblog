const targetAddress = new URL(process.env.TARGET_ADDRESS || `https://www.elijahboston.com`);

module.exports = {
  siteMetadata: {
    title: `elijah boston`,
    description: `Developer at large`,
    author: `elijah@9triangles.com`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#eee8d5`,
        theme_color: `#eee8d5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.TARGET_BUCKET_NAME || "fake-bucket",
          region: process.env.AWS_REGION,
          protocol: targetAddress.protocol.slice(0, -1),
          hostname: targetAddress.hostname,
          acl: null,
          params: {
              // In case you want to add any custom content types: https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/custom-content-type.md
          },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: targetAddress.href.slice(0, -1),
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
