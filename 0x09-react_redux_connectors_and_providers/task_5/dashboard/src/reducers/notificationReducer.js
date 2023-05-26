import * as actions from "../actions/notificationActionTypes";
import { Map, setIn, set } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const initialNotificationState = Map({
  notifications: {},
  filter: actions.NotificationTypeFilters.DEFAULT,
  loading: actions.SET_LOADING_STATE.false,
});

export function notificationReducer(
  state = Map(initialNotificationState),
  action = { type: null }
) {
  switch (action.type) {
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      const normData = notificationsNormalizer(action.data);
      Object.keys(normData.notifications).map((key) => {
        normData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normData);

    case actions.MARK_AS_READ:
      return state.setIn(
        ["notifications", String(action.index), "isRead"],
        true
      );

    case actions.SET_TYPE_FILTER:
      return state.set("filter", action.filter);

    case actions.SET_LOADING_STATE:
      return state.set("loading", action.loading);

    default:
      break;
  }
  return state;
}
