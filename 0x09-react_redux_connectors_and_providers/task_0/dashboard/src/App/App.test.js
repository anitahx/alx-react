import { mapStateToProps } from "./App";
import { fromJS } from "immutable";
import { createStore } from "redux";
import { uiReducer, initialState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
});