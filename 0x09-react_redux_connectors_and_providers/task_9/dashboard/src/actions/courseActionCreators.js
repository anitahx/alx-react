import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}
export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export const setCourses = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};

export const fetchCourses = () => {

  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:8564/courses.json");
      const json = await res.json();
      return dispatch(setCourses(json));
    } catch (error) {}
  };
};
