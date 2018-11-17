import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  ${normalize()}

  html,
  body {
    color: ${props => props.theme.app.fontColor};
    font: ${props => props.theme.font.medium} 16px/1 ${props => props.theme.font.family};
    background: ${props => props.theme.app.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    color: ${props => props.theme.app.lightColor};
    background: ${props => props.theme.app.primaryColor};
  }

  strong {
    font-weight: ${props => props.theme.font.bold};
  }
`;

export default globalStyle;
