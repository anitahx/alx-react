import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

describe("Header", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    const header = shallow(<Header />);
    expect(header.exists()).toEqual(true);
  });

  it("renders img and h1", () => {
    const header = shallow(<Header />);
    expect(header.find("h1").text()).toEqual("School dashboard");
    expect(header.exists("img")).toEqual(true);
  });
});
