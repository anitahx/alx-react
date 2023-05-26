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
    expect(login.find("input")).toHaveLength(3);
    expect(login.find("label")).toHaveLength(2);
  });

  it('Should check tha the submit button is disabled by default', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input').at(2).props().disabled).toEqual(true);
	});

	it('Should check that after changing the value of the two inputs, the button is enabled', () => {
		const wrapper = shallow(<Login />);
		wrapper.find('input').at(0).simulate('change', { target: { name: 'email', value: 'mnortiz.ortiz@gmail.com'} });
		wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: '012345'} });
		expect(wrapper.find('input').at(2).props().disabled).toEqual(false);
	});
});
