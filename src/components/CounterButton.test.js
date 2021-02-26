import { shallow, mount, render } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

import { createSerializer } from "enzyme-to-json";
import toJson from "enzyme-to-json";
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

it("expect to render card list component", () => {
  const mockRobot = [
    { id: 1, name: "John Snow", username: "JohnJohn", email: "john@gmail.com" },
  ];
  expect(
    toJson(shallow(<CounterButton robots={mockRobot} />))
  ).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  expect(wrapper.props().color).toEqual("red");
});
