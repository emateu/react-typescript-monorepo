import { GlobalStyle } from "@rtsm/common";
import themes from "@rtsm/common/dist/themes";
import axios from "axios";
import createBrowserHistory from "history/createBrowserHistory";
import Raven from "raven-js";
import React from "react";
import { addLocaleData } from "react-intl";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ENV } from "./resources/constants";
import { localeData } from "./resources/translations";
import store from "./store/index-dev"; // TODO: use index-prod in production

import IntlProvider from "./components/IntlProvider";
import Main from "./components/Main";

const history = createBrowserHistory();
const theme = themes[ENV.THEME];

addLocaleData(localeData);

axios.defaults.validateStatus = (status: number) => (status >= 200 && status <= 400);
Raven.config(ENV.SENTRY_URL).install();

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Main />
          </React.Fragment>
        </ThemeProvider>
      </Router>
    </IntlProvider>
  </Provider>
);

export default App;
