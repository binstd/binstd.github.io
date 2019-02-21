import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';


import Mamenu from './Mamenu';

const theme = createMuiTheme({
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
    typography: {
        useNextVariants: true,
    },
    shadows: Array(25).fill('none')
});

const MaLayout = ({ children }) => (

    <React.Fragment>
        <CssBaseline />
            <Helmet
                title=''
                meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
                ]}
            >
                <html lang="en" />
            </Helmet>

        <MuiThemeProvider theme={theme}>
        <Mamenu/>
            {children}
        </MuiThemeProvider>
    </React.Fragment>

)

MaLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MaLayout

