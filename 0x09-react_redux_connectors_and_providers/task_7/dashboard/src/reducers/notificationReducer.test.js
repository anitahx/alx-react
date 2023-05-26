import { Map, fromJS } from "immutable";

import { notificationReducer,
  initialNotificationState,
} from "./notificationReducer";


describe('Testing notificationReducer', () => {
  it('Test that the default state returns the correct object', () => {
    const res = notificationReducer();
    expect(res).toStrictEqual(initialNotificationState);
  });

});

describe("notificationReducer tests", function () {
  it("Tests that the default state returns an initial state", function () {
    const state = notificationReducer(undefined, {});

    expect(state).toEqual(initialNotificationState);
  });
  
});