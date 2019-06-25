import React from "react";
import { Form, Field, Formik } from "formik";
import "./LogInForm.css";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/save-user-data-action";
import * as Yup from "yup";
import { showErrorMessage } from "../../utiities/sharedMethods";
import { withRouter, Link } from "react-router-dom";
import { bindActionCreators } from "redux";

class LogInFormComponent extends React.PureComponent {
  t = this.props.t;
  state = {
    toggleLoadingSingInButton: false
  };

  handleSubmit = values => {
    this.setState({ userData: values, toggleLoadingSingInButton: true });
    this.props
      .logIn(values)
      .then(() => {
        this.props.history.push("/projects");
      })
      .catch(msg => {
        showErrorMessage(msg, "Can't Log in");
        this.setState({ toggleLoadingSingInButton: false });
      });
  };

  render() {
    return (
      <div className={"log-in-form-container"}>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required")
          })}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              <Form className={"log-in-form"} autoComplete="off">
                <Field
                  type="text"
                  className={"form-control input"}
                  name="email"
                  placeholder={this.t("Email")}
                />
                {formProps.touched.email && formProps.errors.email && (
                  <small>{formProps.errors.email}</small>
                )}
                <Field
                  type="password"
                  className={"form-control input margin-top-20"}
                  name="password"
                  placeholder={this.t("Password")}
                />
                {formProps.touched.password && formProps.errors.password && (
                  <small>{formProps.errors.password}</small>
                )}
                <Link
                  to={"/?signUp=true"}
                  className={"text-right margin-top-5 sign-up transition"}
                >
                  {this.t("Sign_Up")}
                </Link>
                <button
                  disabled={this.state.toggleLoadingSingInButton}
                  type="submit"
                  className={"btn btn-primary block text-center"}
                >
                  <span>{this.t("Sign_In")}</span>
                  {this.state.toggleLoadingSingInButton && (
                    <i className="fas fa-circle-notch fa-spin fa-3x fa-fw pull-right" />
                  )}
                </button>
              </Form>
            );
          }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logIn }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withNamespaces()(LogInFormComponent)));
