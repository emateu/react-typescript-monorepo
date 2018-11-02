import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  ${normalize()}

  html,
  body {
    color: ${(props) => props.theme.colors.dark};
    font: ${(props) => props.theme.font.regular} 16px/1 ${(props) => props.theme.font.family};
    background: #eee;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    color: ${(props) => props.theme.colors.light};
    background: ${(props) => props.theme.colors.primary};
  }

  strong {
    font-weight: ${(props) => props.theme.font.bold};
  }
`;

export default globalStyle;
