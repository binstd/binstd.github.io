import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import '../styles.css'

const theme = {
  monospace: `'Source Code Pro', monospace`,
  tablet: `only screen and (max-width: 800px)`,
  mobile: `only screen and (max-width: 650px)`,
  colors: {
    primary: '#2097e4',
    text: '#333',
  },
  
}

const DocLayout = ({ children }) => (
  <div>
    <Helmet title="HEML" />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
)


export default DocLayout
