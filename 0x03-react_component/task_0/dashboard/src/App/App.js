import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  listCourses = [
    {
      id: 1,
      name: "ES6",
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      credit: 40,
    },
  ];

  listNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];

  render() {
    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? (
            <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
