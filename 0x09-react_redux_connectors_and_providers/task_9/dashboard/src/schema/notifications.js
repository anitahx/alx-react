import notificationData from "../../dist/notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationData, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;

  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }

  return notificationsByUser;
}

export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);

  return normalizedData.entities;
};
