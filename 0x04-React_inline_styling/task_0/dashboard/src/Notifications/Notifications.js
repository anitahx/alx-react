import React from "react";
import closeIcon from "../assets/close-icon.png";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const consoleDisplay = () => {
  console.log("Close button has been clicked");
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className="menuItem">
        <p>Your notifications</p>
        {this.props.displayDrawer ? (
          <div className="Notifications">
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <button
              style={{
                position: "absolute",
                top: "7px",
                right: "7px",
                border: "none",
                background: "none",
                padding: "0",
              }}
              aria-label="Close"
              onClick={consoleDisplay}
            >
              <img
                style={{
                  display: "inline",
                  marginTop: "5px",
                  marginRight: "5px",
                  padding: "0",
                }}
                src={closeIcon}
                alt="Close"
                width="15px"
              />
            </button>

            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((item) => {
                return (
                  <NotificationItem
                    key={item.id}
                    html={item.html}
                    type={item.type}
                    value={item.value}
                    markAsRead={this.markAsRead}
                    id={item.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
