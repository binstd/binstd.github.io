module.exports = {
    siteMetadata: {
        title: 'binstd-区块链云服务平台',
        description:
        'binstd区块链云平台',
        permalink: 'https://binstd.com',
        toc: [
            'get-started',
            'simple-component',
            'composite-component',
            'data',
            'screen',
            'test',
            'deploy',
            'conclusion',
            'contribute',
        ],
        languages: ['en', 'zh'],
        defaultTranslation: 'react/zh',
        siteUrl: 'https://binstd.com',
        githubUrl: 'https://github.com/hichroma/learnstorybook.com',
        codeGithubUrl: 'https://github.com/hichroma/learnstorybook-code',
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
//   pathPrefix: "/binstdsite"
}