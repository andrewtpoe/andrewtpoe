module.exports = {
  siteMetadata: {
    author: 'Andrew T. Poe',
    description: 'Personal website for Andrew T. Poe',
    image: '/images/andrewtpoe.jpg',
    defaultTitle: 'Andrew T. Poe',
    titleTemplate: '%s | Andrew T. Poe',
    twitterUsername: '@andrewtpoe',
    siteUrl: `https://www.andrewtpoe.com`,
  },
  plugins: [
    { resolve: `gatsby-plugin-styled-components`, options: { pure: true } },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Andrew T. Poe',
        short_name: 'andrewtpoe',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/images/poe-icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
