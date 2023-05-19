import React from "react";
import logo from "../assets/logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <header>
        <div className={css(headerStyles.AppHeader)}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <h2 id="logoutSection">
            Welcome <b>{user.email}</b>
            <span onClick={logOut} className={css(headerStyles.logOutSpanSection)}>
              (logout)
            </span>
          </h2>
        )}
      </header>
    );
  }
}

const headerStyles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "5px solid rgb(226, 28, 28)",
    img: {
      width: "20%",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "rgb(226, 28, 28)",
    },
  },
  logOutSpanSection: {
    cursor: "pointer",
    fontStyle: "italic",
  },
});

Header.contextType = AppContext;

export default Header;
