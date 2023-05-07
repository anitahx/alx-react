import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { jest } from "@jest/globals";

describe("App component testing", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("App component contains Notifications component", () => {
    const app = shallow(<App />);
    expect(app.find("Notifications")).toHaveLength(1);
  });

  it("App component contains Header component", () => {
    const app = shallow(<App />);
    expect(app.find("Header")).toHaveLength(1);
  });

  it("App component contains Login component", () => {
    const app = shallow(<App />);
    expect(app.find("Login")).toHaveLength(1);
  });

  it("App component contains Footer component", () => {
    const app = shallow(<App />);
    expect(app.find("Footer")).toHaveLength(1);
  });

  it("test to check that CourseList is not displayed inside App", () => {
    const app = shallow(<App />);
    expect(app.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let app;

  beforeEach(() => {
    app = shallow(<App isLoggedIn={true} />);
  });

  it("the Login component is not included", () => {
    expect(app.find("Login")).toHaveLength(0);
  });

  it(" the CourseList component is included", () => {
    expect(app.find("CourseList").exists());
  });
});

describe("Testing <App logOut={function} />", () => {
  it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const wrapper = mount(
      <App
        logOut={() => {}}
      />
    );
    window.alert = jest.fn();
    const inst = wrapper.instance();
    const logout = jest.spyOn(inst, "logOut");
    const alert = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", {
      bubbles: true,
      ctrlKey: true,
      key: "h",
    });
    document.dispatchEvent(event);
    expect(alert).toBeCalledWith("Logging you out");
    expect(logout).toBeCalled();
    alert.mockRestore();
  });
});
