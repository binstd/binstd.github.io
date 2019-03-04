module.exports = {
    siteMetadata: {
      title: 'Gatsby Default Starter',
    },
    plugins: [
      // `gatsby-plugin-layout`,
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'gatsby-starter-default',
          short_name: 'starter',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'minimal-ui',
          icon: 'src/images/icon.png', // This path is relative to the root of the site.
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/docs`,
          name: 'docs',
        },
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            `gatsby-remark-autolink-headers`,
            {
              resolve: `gatsby-remark-prismjs`,
            }
          ]
        }
      },
      'gatsby-plugin-offline',
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
            // pathToTheme: 'src/themes/default',
            theme: {
                typography: {
                    useNextVariants: true,
                },
                palette: {
                  primary: {
                    light: '#2196f3',
                    main: '#2196f3',
                    dark: '#2196f3',
                    contrastText: '#fff',
                  },
                  secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                  },
                },
                shadows: Array(25).fill('none')
            },
            // typography: {
            //     useNextVariants: true,
            // },
            // palette: {
            //   primary: {
            //     light: '#2196f3',
            //     main: '#2196f3',
            //     dark: '#2196f3',
            //     contrastText: '#fff',
            //   },
            //   secondary: {
            //     light: '#ff7961',
            //     main: '#f44336',
            //     dark: '#ba000d',
            //     contrastText: '#000',
            //   },
            // },
            // shadows: Array(25).fill('none')
        },
      },
    ],
  }
  
