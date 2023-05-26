import { selectCourse, unSelectCourse, setCourses, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import fetchMock from "fetch-mock";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('tests for action creators', () => {
	it('should return right action payload and type when selectCourse is called', () => {
		expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
	});
	it('should return right action payload and type when unSelectCourse is called', () => {
		expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
	});
	
	// afterEach(() => {
	// 	fetchMock.restore();
	//   });
	
	// it("verify that the fetch is working correctly", () => {
	// 	const store = mockStore({});
	// 	// fetchMock.restore();
	
	// 	fetchMock.get("http://localhost:8564/courses.json", "{}");
	
	// 	return store.dispatch(fetchCourses()).then(() => {
	// 	//   const actions = store.getActions();
	// 	//   console.log(actions)

	// 	  expect(store.getActions()).toEqual(setCourses({}));
	// 	});
	//   });

	// it("should dispatch FETCH_COURSE_SUCCESS when fetching courses has been done", () => {
	// 	const courses = [
	// 	  { id: 1, title: "Course 1" },
	// 	  { id: 2, title: "Course 2" },
	// 	];
	// 	fetchMock.get("http://localhost:8564/courses.json", {
	// 	  body: { courses },
	// 	  headers: { "content-type": "application/json" },
	// 	});
	
	// 	const expectedActions = [{ type: FETCH_COURSE_SUCCESS, data: courses }];
	// 	const store = mockStore({ courses: [] });
	
	// 	return store.dispatch(fetchCourses()).then(() => {
	// 	  expect(store.getActions()).toEqual(expectedActions);
	// 	});
	//   });
});