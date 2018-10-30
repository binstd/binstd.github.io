import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './grommet.min.css'
import './common.css'
// import {
//     BrowserRouter as Router,
// } from 'react-router-dom'
const Layout = ({ children, data }) => (

    <div>
          <Helmet  titleTemplate={`%s BinSTD进制 - 区块链云服务平台`}>
          <meta name="twitter:site" content="@gatsbyjs" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="ethluz-blog" />
          <link
            rel="canonical"
            href={`https://blockman.org`}
          />
          <html lang="en" />
        </Helmet>
       
        <div >
            {children()}
        </div>
    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
