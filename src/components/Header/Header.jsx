import React from "react";
import { showErrorMessage } from "../../utiities/sharedMethods";
import "./Header.css";
import connect from "react-redux/es/connect/connect";
import { changeTheme } from "../../store/actions";
import { logOutServer } from "../../store/actions/log_out_action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

const Header = props => {
  const logo = require("../../" + props.appLogo);

  const logOut = () => {
    props
      .logOutServer()
      .then(() => {
        props.history.replace("/");
      })
      .catch(err => {
        showErrorMessage(err);
      });
  };

  return (
    <div className="full-with projects-page-header padding-left-15">
      <div className="logo-and-title-container">
        <img alt={"logo"} src={logo}/>
        <h5 className="no-margin margin-left-10">{props.appName}</h5>
      </div>

      <div className={"change-theme-container"}>
        <div className={"themes"}>
          <div
            onClick={() => props.changeTheme("dark-theme")}
            className={"dark"}
          />
          <div
            onClick={() => props.changeTheme("light-theme")}
            className={"light"}
          />

          <p
            onClick={logOut}
            className="margin-left-15 margin-right-15 clickable"
          >
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.sharedReducer
  };
};

function mapActionToProps(dispatch) {
  return bindActionCreators({ changeTheme, logOutServer }, dispatch);
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(withRouter(Header));
