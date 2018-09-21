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
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <div >
            {children()}
        </div>
    </div>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
