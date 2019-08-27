const targetAddress = new URL(process.env.TARGET_ADDRESS || `https://www.elijahboston.com`);

module.exports = {
  siteMetadata: {
    title: `Elijah Boston`,
    description: `Developer at large`,
    author: `elijah@9triangles.com`,
    nav: [
      {
        label: 'About',
        value: 'about'
      },
      {
        label: 'Posts',
        value: 'posts'
      },
      {
        label: 'Projects',
        value: 'projects'
      }
    ]
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
        short_name: `eb`,
        start_url: `/`,
        background_color: `#eee8d5`,
        theme_color: `#eee8d5`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // Data Source -- Filesystem (For loading Markdown)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/posts/`,
      },
    },
    // Transformer -- Markdown
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          }
        ],
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: targetAddress.href.slice(0, -1),
      },
    },
    // Data Source -- GraphQL
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        // Url to query from
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    // Styled Components
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
