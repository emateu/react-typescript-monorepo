import { storiesOf } from "@storybook/react";
import * as React from "react";
import Example from "./";

storiesOf("Example", module)
  .add("with base values", () => (
    <Example />
  ));
