import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";

import { initialCourseState, courseReducer } from "../reducers/courseReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(courseReducer, initialCourseState);
import { fetchCourses } from "../actions/courseActionCreators";

// describe("<CourseList />", () => {

//   beforeEach(() => {
//     StyleSheetTestUtils.suppressStyleInjection();
//   });

//   it("renders without crashing", () => {
//     const courses = shallow(<CourseList />);
//     expect(courses).toBeDefined();
//   });
//   it("renders the 3 different rows of courses", () => {
//     const courses = shallow(<CourseList />);
//     expect(courses.find("CourseListRow")).toHaveLength(3);
//   });
//   it("verify that CourseList renders correctly if you pass an empty array or if you don't pass the listCourses property", () => {
//     const listCourses = [];
//     let course = shallow(<CourseList />);
//     expect(course.find('CourseListRow').last().props().textFirstCell).toEqual("No course available yet");
//     course = shallow(<CourseList listCourses={[]}/>);
//     expect(course.find('CourseListRow').last().props().textFirstCell).toEqual("No course available yet");
//   });
// });

// describe("Testing <CourseList listCourses={listCourses}/>", () => {
//   let course;

//   beforeEach(() => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const listCourses = [
//       {id: 1, name: 'ES6', credit: 60},
//       {id: 2, name: 'Webpack', credit: 20},
//       {id: 3, name: 'React', credit: 40}
//     ];
//     course = shallow(<CourseList listCourses={listCourses}/>);
//   });

//   it("verify that when you pass a list of courses, the component renders it correctly", () => {
//     expect(course.findWhere((node)=>{return node.props().textFirstCell === "ES6"})).toHaveLength(1);
//     expect(course.findWhere((node)=>{return node.props().textFirstCell === "Webpack"})).toHaveLength(1);
//     expect(course.findWhere((node)=>{return node.props().textFirstCell === "React"})).toHaveLength(1);
//   });
// });

describe("CourseList without listCourses or empty listCourses", () => {
  let listCourses;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("CourseList renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CourseList fetchCourses={fetchCourses} />
      </Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  // beforeEach(() => {
  //   listCourses = [];
  // });

  // it("it renders the 3 rows without listCourses  without listCourses", () => {
  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <CourseList fetchCourses={() => [
  //         {
  //           "id": "1",
  //           "name": "ES6",
  //           "credit": 60
  //         },
  //         {
  //           "id": "2",
  //           "name": "Webpack",
  //           "credit": 20
  //         },
  //         {
  //           "id": "3",
  //           "name": "React",
  //           "credit": 40
  //         }
  //       ]} />
  //     </Provider>);
  //   expect(wrapper.exists());
  //   wrapper.update();
  //   const item = wrapper.find("CourseListRow");

  //   expect(item).toHaveLength(3);
  //   expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
  //   expect(item.at(0).prop("isHeader")).toEqual(true);

  //   expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
  //   expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
  //   expect(item.at(1).prop("isHeader")).toEqual(true);

  //   expect(item.at(2).prop("textFirstCell")).toEqual(
  //     "No course available yet"
  //   );
  //   expect(item.at(2).prop("textSecondCell")).toEqual(null);
  //   expect(item.at(2).prop("isHeader")).toEqual(false);
  // });

  // it("it renders the 3 rows with listCourses empty", () => {
  //   const wrapper = shallow(<CourseList fetchCourses={() => {}} />);
  //   expect(wrapper.exists());
  //   wrapper.update();
  //   const item = wrapper.find("CourseListRow");

  //   expect(item).toHaveLength(3);
  //   expect(item.at(0).prop("textFirstCell")).toEqual("Available courses");
  //   expect(item.at(0).prop("isHeader")).toEqual(true);

  //   expect(item.at(1).prop("textFirstCell")).toEqual("Course name");
  //   expect(item.at(1).prop("textSecondCell")).toEqual("Credit");
  //   expect(item.at(1).prop("isHeader")).toEqual(true);

  //   expect(item.at(2).prop("textFirstCell")).toEqual(
  //     "No course available yet"
  //   );
  //   expect(item.at(2).prop("textSecondCell")).toEqual(null);
  //   expect(item.at(2).prop("isHeader")).toEqual(false);
  // });

  // it("verify that the function fetchCourses is called when the component is mounted", () => {
  //   const fetchCourses = jest.fn();

  //   const wrapper = shallow(<CourseList fetchCourses={fetchCourses} />);

  //   expect(fetchCourses).toHaveBeenCalled();

  //   jest.restoreAllMocks();
  // });

  // it("verify that the two actions are correctly dispatched when the onChangeRow function is called", () => {
  //   const fetchCourses = jest.fn();
  //   const selectCourse = jest.fn();
  //   const unSelectCourse = jest.fn();

  //   const wrapper = shallow(
  //     <CourseList
  //       fetchCourses={fetchCourses}
  //       selectCourse={selectCourse}
  //       unSelectCourse={unSelectCourse}
  //     />
  //   );

  //   const instance = wrapper.instance();

  //   instance.onChangeRow("1", true);

  //   expect(selectCourse).toHaveBeenCalled();

  //   instance.onChangeRow("1", false);

  //   expect(unSelectCourse).toHaveBeenCalled();

  //   jest.restoreAllMocks();
  // });
});
