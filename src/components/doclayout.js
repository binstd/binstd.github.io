import React from 'react'
import PropTypes from 'prop-types'
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

// DocLayout.propTypes = {
//   children: PropTypes.func,
// }

export default DocLayout


// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'

// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { createMuiTheme } from '@material-ui/core/styles';

// import { ThemeProvider } from 'styled-components'
// // import purple from '@material-ui/core/colors/purple';

// import Mamenu from './Mamenu';

// const theme = createMuiTheme({
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
//     typography: {
//         useNextVariants: true,
//     },
//     shadows: Array(25).fill('none')
// });

// const themetwo = {
//     monospace: `'Source Code Pro', monospace`,
//     tablet: `only screen and (max-width: 800px)`,
//     mobile: `only screen and (max-width: 650px)`,
//     colors: {
//       primary: '#2097e4',
//       text: '#333',
//     },
//   }

// const DocLayout = ({ children }) => (

//     <React.Fragment>
//             <CssBaseline />
//             <Helmet
//                 title=''
//                 meta={[
//                 { name: 'description', content: 'Sample' },
//                 { name: 'keywords', content: 'sample, something' },
//                 ]}
//             >
//                 <html lang="en" />
//             </Helmet>

//         <MuiThemeProvider theme={theme}>
//             <Mamenu/>
//             <ThemeProvider themetwo={theme}>{children}</ThemeProvider>
//         </MuiThemeProvider>
//     </React.Fragment>

// )

// DocLayout.propTypes = {
//   children: PropTypes.node.isRequired
// }

// export default DocLayout

