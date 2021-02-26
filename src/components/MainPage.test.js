import { shallow, mount, render } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

import { createSerializer } from "enzyme-to-json";
import toJson from "enzyme-to-json";
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps}></MainPage>);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "john",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2}></MainPage>);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "John",
      email: "john@gmail.com",
    },
  ]);
});

it("filters robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const filterRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3}></MainPage>);
  expect(wrapper3.instance().filterRobots()).toEqual([]);
});
