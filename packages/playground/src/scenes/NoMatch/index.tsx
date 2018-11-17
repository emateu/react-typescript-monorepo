import React, { Component } from "react";
import styled from "styled-components";
// import { FadeIn } from "packages/base";

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.app.maxWidth};
  margin: 0 auto;
  text-align: center;
  padding: 50px 20px;
`;

export default class NoMatch extends Component {
  public render() {
    return (
      <Wrapper>
        <div>
          <h2>Page not found</h2>
          <p>
            We are sorry but the page you were looking at was not found.
          </p>
        </div>
      </Wrapper>
    );
  }
}
