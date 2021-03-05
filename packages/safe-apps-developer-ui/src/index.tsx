import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { theme as muiTheme } from 'src/styles/mui';
import GlobalStyle from 'src/styles/global';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { theme } from '@gnosis.pm/safe-react-components';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(consohttp://localhost:3000/le.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
