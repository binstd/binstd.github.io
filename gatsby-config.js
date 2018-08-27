module.exports = {
    siteMetadata: {
        title: 'BinSTD进制 - 区块链云服务平台',
        description:
        'Binary Standard Foundation – BinSTD',
        permalink: 'https://binstd.com',
        toc: [
            'started',
            'ui-pay',
            'balance',
            'tokeninfo', 
            'gas_price',
            'txall',
            'txhash'
        ],
        languages: ['zh'],
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

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    }
  ],
}