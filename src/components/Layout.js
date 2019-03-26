import React from 'react'
import PropTypes from 'prop-types'



const Layout = ({ children }) => (
    <div>
          {/* <Mamenu/> */}
         {children} 
    </div>
    // <React.Fragment>
    //     <CssBaseline /> 
    //     <MuiThemeProvider theme={theme}>
    //         <Mamenu/>
    //         {children}
    //      </MuiThemeProvider>
    // </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

