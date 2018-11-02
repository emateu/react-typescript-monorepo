import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@rtsm/common";
import theme from "@rtsm/common/dist/themes/default";

const requireAll = requireContext => requireContext.keys().map(requireContext);
const loadStories = () => requireAll(require.context(".", true, /.stories\.tsx?$/));

addDecorator((story) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {story()}
      </Fragment>
    </ThemeProvider>
  );
});

configure(loadStories, module);
