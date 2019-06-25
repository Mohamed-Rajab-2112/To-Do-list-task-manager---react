import React from "react";
import {Link, withRouter} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {withNamespaces} from "react-i18next";
import "./SignUpForm.css";
import {signUp} from "../../api/api-calls/index";
import {showErrorMessage} from "../../utiities/sharedMethods";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logIn} from "../../store/actions/save-user-data-action";

class SignUpForm extends React.PureComponent {
  t = this.props.t;
  state = {
    toggleLoadingSingUpButton: false
  };

  handleSubmit = values => {
    this.setState(prevState => {
      return {
        toggleLoadingSingUpButton: !prevState.toggleLoadingSingUpButton
      }
    });
    signUp(values)
      .then(() => {
        this.props.logIn(values).then(() => {
          this.props.history.push("/projects");
        });
      })
      .catch(err => {
        showErrorMessage(err);
      });
  };

  render() {
    return (
      <div className="sign-up-form-container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            userType: ""
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
            userType: Yup.string().required("User Type is required")
          })}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              <Form className={"log-in-form"} autoComplete="off">
                <Field
                  type="text"
                  className={"form-control input"}
                  name="name"
                  placeholder={this.t("Name")}
                />
                {formProps.touched.name && formProps.errors.name && (
                  <small>{formProps.errors.name}</small>
                )}
                <Field
                  type="text"
                  className={"form-control input margin-top-20"}
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

                <Field
                  className="form-control input margin-top-20"
                  component="select"
                  name="userType"
                >
                  {!formProps.values.userType && (
                    <option value={undefined}>-- Select User Type --</option>
                  )}
                  <option value={"admin"}>Admin</option>
                  <option value={"agent"}>Agent</option>
                </Field>
                {formProps.touched.userType && formProps.errors.userType && (
                  <small>{formProps.errors.userType}</small>
                )}

                <div className="buttons-container margin-top-25">
                  <Link to={"/"}>{this.t("Sign_In")}</Link>

                  <button
                    disabled={this.state.toggleLoadingSingUpButton}
                    type="submit"
                    className={"btn btn-primary block text-center"}
                  >
                    <span>{this.t("Sign_Up")}</span>
                    {this.state.toggleLoadingSingUpButton && (
                      <i className="fas fa-circle-notch fa-spin fa-3x fa-fw pull-right"/>
                    )}
                  </button>
                </div>
              </Form>
            );
          }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logIn}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withNamespaces()(SignUpForm)));
