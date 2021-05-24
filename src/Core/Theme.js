import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({

  palette: {
    type:"dark",
    secondary:{
      main: '#E56E00'
    }
    // primary: {
    //   main: '#556cd6',
    // },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#fff',
    // },
  },
});

export default theme;