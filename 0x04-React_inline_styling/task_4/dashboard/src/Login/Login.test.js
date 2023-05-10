import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    const login = shallow(<Login />);
    expect(login.exists()).toEqual(true);
  });

  it("has 2 input and 2 label tags", () => {
    const login = shallow(<Login />);
    expect(login.find("input")).toHaveLength(2);
    expect(login.find("label")).toHaveLength(2);
  });
});
