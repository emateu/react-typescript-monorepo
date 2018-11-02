import { GlobalStyle, Example } from "@rtsm/common";
import theme from "@rtsm/common/dist/themes/default";
import React, { Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";

class App extends Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <div>
            <h1>React TypeScript Monorepo</h1>

            <p>Example Component:</p>
            <Example />
        </div>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
