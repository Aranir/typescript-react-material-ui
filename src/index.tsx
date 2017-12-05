import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import {BrowserRouter} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: green, // Purple and green play nicely together.
    secondary: purple,
    error: red,
  },
});




const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
  </AppContainer>
  ,
  rootEl
);