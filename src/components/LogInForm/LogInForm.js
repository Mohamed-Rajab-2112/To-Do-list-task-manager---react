import React from "react";
import {withFormik, Form, Field} from "formik";
// import Yup from "yup";
import "./LogInForm.css";
import {NavLink} from "react-router-dom";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {changeTheme, changeLanguage} from "../../actions/index";
import {logIn} from "../../actions/log-in-action";
import * as Yup from "yup";
import {setGrowlMessage} from "../../reducers/shared_reducer_helpers";
import {withRouter} from 'react-router-dom'

const LogInForm = (props) => {
  const {t} = props;
  const isActiveLang = (lang) => {
    return lang === props.lang ? "active-lang" : null;
  };
  const logo = require("../../" + props.appLogo);
  
  return (
    <div className={"log-in-form-container"} id={'log-in-form-container'}>
      <div className={"intro-section"}>
        <img alt={"logo"} src={logo}/>
        <h3 className={"text-center"}>{t("Welcome_Message")} {props.appName}</h3>
      </div>
      <Form className={"log-in-form"}>
        <div className={"label-container"}>
          <NavLink exact to={"/"}>
            <span>{t("Sign_In")}</span>
          </NavLink>
        </div>
        <Field type="text" className={"form-control"} name="username"
               placeholder={t("Email")}/>
        {props.touched.username &&
        props.errors.username &&
        <small>{props.errors.username}</small>}
        <div className={"label-container"}>
          <span>{t("Sign_Up")}</span>
        </div>
        <Field type="password" className={"form-control margin-top-20"}
               name="password"
               placeholder={t("Password")}/>
        {props.touched.password &&
        props.errors.password &&
        <small>{props.errors.password}</small>}
        <p
          className={"text-right margin-top-5 forgot-password transition"}>{t(
          "Forgot_Password")}</p>
        <button type="submit"
                className={"btn btn-primary block"}>{t(
          "Sign_In")}</button>
      </Form>
      <div
        className={"change-language-and-theme-container margin-bottom-30"}>
        <div className={"language"}>
          <span onClick={() => props.changeLanguage("ar")}
                className={isActiveLang("ar")}
          >Arabic</span>
          <span onClick={() => props.changeLanguage("en")}
                className={isActiveLang("en")}
          >English</span>
        </div>
        <div className={"themes"}>
          <div onClick={() => props.changeTheme("dark-theme")}
               className={"dark"}></div>
          <div onClick={() => props.changeTheme("light-theme")}
               className={"light"}></div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state.sharedReducer,
  };
}

export default connect(mapStateToProps, {changeLanguage, changeTheme, logIn})(
  withRouter(withNamespaces()(withFormik({
    mapPropsToValues({username, password, logIn, history}) {
      // debugger
      return {
        username: username || "",
        password: password || "",
        logIn,
        history,
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    handleSubmit(values) {
      console.log(values);
      values.logIn({
        username: values.username,
        password: values.password
      })
        .then(() => {
          console.log('will route to home');
          values.history.push('/dashboard')
        })
        .catch(() => {
          setGrowlMessage({
            severity: 'error',
            detail: 'Wrong Username/Password please try again!',
            summary: "Can't Log In"
          })
        })
    },
  })(LogInForm))));