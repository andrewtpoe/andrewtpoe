module.exports = {
  siteMetadata: {
    siteUrl: `https://www.andrewtpoe.com`,
    title: 'Andrew T. Poe | Sr. Software Engineer',
    author: 'Andrew T. Poe',
    description: 'Personal website of Andrew T. Poe',
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
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
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
        icon: 'content/assets/poe-icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
