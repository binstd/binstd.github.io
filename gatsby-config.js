module.exports = {
  siteMetadata: {
    title: 'binstd-区块链云服务平台',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: 'content',
      },
    },
    'gatsby-transformer-remark',
    // 'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    }
  ],
  pathPrefix: "/binstdsite"
}