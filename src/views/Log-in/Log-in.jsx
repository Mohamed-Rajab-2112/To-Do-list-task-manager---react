import React from "react";
import "./Log-in.css";
import HomeLogoSection from "../../components/HomeLogoSection/HomeLogoSection";
import LogInForm from "../../components/LogInForm/LogInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import queryString from "qs";
import { withNamespaces } from "react-i18next";
import { changeTheme } from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";

class LogIn extends React.PureComponent {
  state = {
    isSignInPage: true,
    isSignUpPage: false
  };
  t = this.props.t;

  logo = require("../../" + this.props.appLogo);

  componentWillMount() {
    this.toggleSignUpSignInView();
    this.listenToRouterChange();
  }

  componentWillUnmount() {
    this.unlisten();
  }

  listenToRouterChange() {
    this.unlisten = this.props.history.listen(location => {
      this.toggleSignUpSignInView(location);
    });
  }

  toggleSignUpSignInView = location => {
    this.setState(() => {
      let isSignUpState;
      if (location) {
        isSignUpState = queryString.parse(location.search)['?signUp'];
      } else {
        isSignUpState = queryString.parse(this.props.location.search)['?signUp'];
      }
      return {
        isSignInPage: !isSignUpState,
        isSignUpPage: isSignUpState
      };
    });
  };

  render() {
    return (
      <div className={"log-in-view-container"}>
        <div>
          <HomeLogoSection />
        </div>
        <div className={"log-in-and-sign-up-container"}>
          <div className={"intro-section"}>
            <img alt={"logo"} src={this.logo} />
            <h3 className={"text-center"}>
              {this.t("Welcome_Message")} {this.props.appName}
            </h3>
          </div>
          {this.state.isSignInPage && (
            <LogInForm toggleSignUpSignInView={this.toggleSignUpSignInView} />
          )}
          {this.state.isSignUpPage && (
            <SignUpForm toggleSignUpSignInView={this.toggleSignUpSignInView} />
          )}
          <div className={"change-theme-container margin-bottom-30"}>
            <div className={"themes"}>
              <div
                onClick={() => this.props.changeTheme("dark-theme")}
                className={"dark"}
              />
              <div
                onClick={() => this.props.changeTheme("light-theme")}
                className={"light"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.sharedReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeTheme }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withNamespaces()(LogIn)));
