import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';

describe("<CourseListRow />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("When isHeader is true test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
      const courseRow = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test"/>);
      expect(courseRow.find('th')).toHaveLength(1);
      expect(courseRow.find('th').prop('colSpan')).toEqual(2);
      expect(courseRow.find('th').text()).toEqual('first cell test');
    });
  it("When isHeader is true test the component renders two cells when textSecondCell is present", () => {
      const courseRow = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test" textSecondCell='second cell test'/>);
      expect(courseRow.find('th')).toHaveLength(2);
      expect(courseRow.find('th').at(0).text()).toEqual('first cell test');
      expect(courseRow.find('th').at(1).text()).toEqual('second cell test');
    });
  it("When isHeader is false test the component renders two td elements within a tr element", () => {
      const courseRow = shallow(<CourseListRow isHeader={false} textFirstCell="first cell test" textSecondCell='second cell test'/>);
      expect(courseRow.find('td')).toHaveLength(2);
      expect(courseRow.find('td').at(0).text()).toEqual('first cell test');
      expect(courseRow.find('td').at(1).text()).toEqual('second cell test');
    });
});