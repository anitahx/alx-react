import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  it("renders without crashing", () => {
    const courses = shallow(<CourseList />);
    expect(courses).toBeDefined();
  });
  it("renders the 5 different rows of courses", () => {
    const courses = shallow(<CourseList />);
    expect(courses.find("CourseListRow")).toHaveLength(5);
  });
});