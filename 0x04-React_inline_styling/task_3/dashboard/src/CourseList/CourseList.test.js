import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from 'aphrodite';

describe("<CourseList />", () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    const courses = shallow(<CourseList />);
    expect(courses).toBeDefined();
  });
  it("renders the 3 different rows of courses", () => {
    const courses = shallow(<CourseList />);
    expect(courses.find("CourseListRow")).toHaveLength(3);
  });
  it("verify that CourseList renders correctly if you pass an empty array or if you don't pass the listCourses property", () => {
    const listCourses = [];
    let course = shallow(<CourseList />);
    expect(course.find('CourseListRow').last().props().textFirstCell).toEqual("No course available yet");
    course = shallow(<CourseList listCourses={[]}/>);
    expect(course.find('CourseListRow').last().props().textFirstCell).toEqual("No course available yet");
  });
});

describe("Testing <CourseList listCourses={listCourses}/>", () => {
  let course;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
    course = shallow(<CourseList listCourses={listCourses}/>);
  });

  it("verify that when you pass a list of courses, the component renders it correctly", () => {
    expect(course.findWhere((node)=>{return node.props().textFirstCell === "ES6"})).toHaveLength(1);
    expect(course.findWhere((node)=>{return node.props().textFirstCell === "Webpack"})).toHaveLength(1);
    expect(course.findWhere((node)=>{return node.props().textFirstCell === "React"})).toHaveLength(1);
  });
});