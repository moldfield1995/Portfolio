import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Core/App';
import reportWebVitals from './Core/reportWebVitals';
import theme from './Core/Theme'

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

