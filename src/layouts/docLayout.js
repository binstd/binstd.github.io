import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import classnames from 'classnames'
// import styled, { ThemeProvider } from 'styled-components'
import { ThemeProvider } from 'styled-components'
// import './mybulma.sass'
import './mybulma.sass'
import './styles.css'

const theme = {
  monospace: `'Source Code Pro', monospace`,
  tablet: `only screen and (max-width: 800px)`,
  mobile: `only screen and (max-width: 650px)`,
  colors: {
    primary: '#2097e4',
    text: '#333',
  },
}

const DocLayout = ({ children, data }) => (
  <div>
     <Helmet titleTemplate={`%s BinSTD进制 - 区块链云服务平台`}>
          <meta name="twitter:site" content="@gatsbyjs" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="ethluz-blog" />
          <link
            rel="canonical"
            href={`https://blockman.org`}
          />
          <html lang="en" />
    </Helmet>
    <ThemeProvider theme={theme}>{children()}</ThemeProvider>
  </div>
)

DocLayout.propTypes = {
  children: PropTypes.func,
}

export default DocLayout
// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `