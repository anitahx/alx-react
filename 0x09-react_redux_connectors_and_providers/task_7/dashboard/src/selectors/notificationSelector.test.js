import * as selectors from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

describe('Testing notificationSelectors',() => {
  it('test that filterTypeSelected works as expected', () => {
    const state = notificationReducer();
    const selectedData = selectors.filterTypeSelected(state);
    expect(selectedData).toEqual('DEFAULT');
  });

  it('test that getNotifications returns a list of the message entities within the reducer', () => {
    const state = notificationReducer();
    const selectedData = selectors.getNotifications(state);
    expect(selectedData).toEqual(Map([]));
  });

  it("test that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});

    const selected = selectors.getNotifications(state);

    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });
});