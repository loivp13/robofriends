import { shallow, mount, render } from "enzyme";
import React from "react";
import CardList from "./CardList";

import { createSerializer } from "enzyme-to-json";
import toJson from "enzyme-to-json";
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

it("expect to render card list component", () => {
  const mockRobot = [
    { id: 1, name: "John Snow", username: "JohnJohn", email: "john@gmail.com" },
  ];
  expect(toJson(shallow(<CardList robots={mockRobot} />))).toMatchSnapshot();
});
