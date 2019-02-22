import React from 'react'
import PropTypes from 'prop-types'


import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';


// import Mamenu from './Mamenu';

// const theme = createMuiTheme({
//     typography: {
//         useNextVariants: true,
//     },
//     palette: {
//       primary: {
//         light: '#2196f3',
//         main: '#2196f3',
//         dark: '#2196f3',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//     shadows: Array(25).fill('none')
// });

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

