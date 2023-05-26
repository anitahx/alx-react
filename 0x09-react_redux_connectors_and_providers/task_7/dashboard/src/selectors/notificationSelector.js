import { Map } from 'immutable';

export function filterTypeSelected(state) {
  return state.get('filter');
}

export function getNotifications(state) {
  return Map(state.get('notifications'));
}

// export function getUnreadNotifications(state) {
//   return Map(state.notifications.get('messages')).filter((item => !item.isRead));
// }

// export const filterTypeSelected = (state) => {
//   return state.get("filter");
// };
// export const getNotifications = (state) => {
//   return state.get("notifications");
// };
export const getUnreadNotifications = (state) => {
  const notifications = Map(state.notifications.get("messages"));

  if (notifications) {
    const filtered = notifications
      .valueSeq()
      .filter((value) => value.get('isRead') === false);

    return filtered;
  }

  return notifications;
};