import React from "react";
import "./HomeLogoSection.css";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";

const HomeLogoSection = (props) => {
  const {t} = props;
  const logo = require('../../' + props.appHomeLogo);
  return (
    <div className={"home-logo-section-container"}>
      <div className={"logo"}>
        <img alt={"logo"}
             src={logo} />
      </div>
      <div className={"margin-bottom-35"}>
        <p className={"text-center"}>
          {t("LogIn_Home_Message")}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.sharedReducer
  }
};

export default connect(mapStateToProps)(withNamespaces()(HomeLogoSection));