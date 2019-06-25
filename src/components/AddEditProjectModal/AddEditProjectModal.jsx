import React from "react";
import { withNamespaces } from "react-i18next";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Field, Form, Formik } from "formik";
import {
  assignPropertiesFromBackEndToFormFields,
  getCurrentUserDetails,
  showErrorMessage
} from "../../utiities/sharedMethods";
import { ProjectFormFields } from "../../utiities/constants";
import * as Yup from "yup";
import {
  postNewProject,
  updateProject
} from "../../api/api-calls/projects-api-calls";
import "./addEditProjectModal.css";

export class AddEditProjectModal extends React.PureComponent {
  t = this.props.t;
  closeModal = this.props.closeModal;
  state = {
    toggleLoadingSaveButton: false
  };
  projectData;

  componentWillUpdate(nextProps, nextState, nextContext) {
    this.projectData = assignPropertiesFromBackEndToFormFields(
      nextProps.projectData,
      ProjectFormFields
    );
    this.projectData.id = nextProps.projectData.id;
  }

  saveProject = values => {
    this.setState({
      toggleLoadingSaveButton: true
    });
    values.projectOwnerId = getCurrentUserDetails().id;
    if (this.projectData.id) {
      updateProject(values)
        .then(() => {
          this.setState({
            toggleLoadingSaveButton: false
          });
          this.closeModal();
          this.props.updateProjectsList();
        })
        .catch(err => {
          this.setState({
            toggleLoadingSaveButton: false
          });
          showErrorMessage(err.message);
        });
    } else {
      postNewProject(values)
        .then(() => {
          this.setState({
            toggleLoadingSaveButton: false
          });
          this.closeModal();
          this.props.updateProjectsList();
        })
        .catch(err => {
          this.setState({
            toggleLoadingSaveButton: false
          });
          showErrorMessage(err.message);
        });
    }
  };

  renderFormFields(formProps) {
    return ProjectFormFields.map((field, i) => {
      if (field.type === "textarea") {
        return (
          <div key={i} className="margin-top-15">
            <Field
              component="textarea"
              className={"form-control input"}
              name={field.propertyName}
              placeholder={this.t(field.name)}
            />
            {formProps.touched[field.propertyName] &&
              formProps.errors[field.propertyName] && (
                <small>{formProps.errors[field.propertyName]}</small>
              )}
          </div>
        );
      } else {
        return (
          <div key={i} className="margin-top-15">
            <Field
              type={field.type}
              className={"form-control input"}
              name={field.propertyName}
              placeholder={this.t(field.name)}
            />
            {formProps.touched[field.propertyName] &&
              formProps.errors[field.propertyName] && (
                <small>{formProps.errors[field.propertyName]}</small>
              )}
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.toggleModalStatus}>
          <ModalHeader>{this.t("Project")}</ModalHeader>
          <Formik
            onSubmit={this.saveProject}
            initialValues={this.projectData}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Project Name required"),
              brief: Yup.string().required("Project Brief is required")
            })}
            render={formProps => (
              <Form autoComplete="off">
                <ModalBody>{this.renderFormFields(formProps)}</ModalBody>

                <ModalFooter className="margin-top-15">
                  <button
                    className={"btn btn-secondary"}
                    type="button"
                    onClick={this.closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={this.state.toggleLoadingSaveButton}
                    type="submit"
                    className={"btn btn-primary block text-center"}
                  >
                    <span>{this.t("Save")}</span>
                    {this.state.toggleLoadingSaveButton && (
                      <i className="fas fa-circle-notch fa-spin fa-fw pull-right" />
                    )}
                  </button>
                </ModalFooter>
              </Form>
            )}
          />
        </Modal>
      </div>
    );
  }
}

export default withNamespaces()(AddEditProjectModal);
