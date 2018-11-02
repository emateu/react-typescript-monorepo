import { shallow } from "enzyme";
import * as React from "react";
import Example from "./";

it("renders without crashing", () => {
  shallow(<Example />);
});
