// import createMuiTheme from 'material-ui/styles/createMuiTheme'

import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
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
})

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