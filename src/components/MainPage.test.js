import { shallow, mount, render } from "enzyme";
import React from "react";
import App from "../containers/App";

it("expect to render App Component", () => {
  const mockStore = {
    robots: [],
    searchField: "",
  };
  expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});

// ? Can install redux-mock-store
