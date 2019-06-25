import React from "react";
import "./Projects.css";
import { connect } from "react-redux";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "reactstrap";
import { changeTheme } from "../../store/actions/index";
import { logOutServer } from "../../store/actions/log_out_action";
import { bindActionCreators } from "redux";
import { withRouter, Link } from "react-router-dom";
import AddEditProjectModal from "../../components/AddEditProjectModal/AddEditProjectModal";
import {
  deleteProject,
  getAllProjects,
  getProjectByOwnerId
} from "../../api/api-calls/projects-api-calls";
import {
  getCurrentUserDetails,
  showErrorMessage
} from "../../utiities/sharedMethods";
import { withNamespaces } from "react-i18next";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

class Projects extends React.PureComponent {
  state = {
    addProductModalStatus: false,
    editProductModalStatus: false,
    projects: [],
    toggleLoading: false
  };
  userId = getCurrentUserDetails().id;
  t = this.props.t;
  selectedEditProject = {};

  componentDidMount() {
    this.getProjects();
  }

  changeLoadingStatus = value => {
    this.setState({ toggleLoading: value });
  };

  getProjects = () => {
    this.changeLoadingStatus(true);
    if (this.props.isAgent) {
      getProjectByOwnerId(this.userId).then(projects => {
        this.setState({
          projects: projects
        });
        this.changeLoadingStatus(false);
      });
    } else if (this.props.isAdmin) {
      getAllProjects().then(projects => {
        this.setState({
          projects: projects
        });
        this.changeLoadingStatus();
      });
    }
  };

  toggleAddProjectModal = () => {
    this.setState(prevStatus => {
      return {
        addProductModalStatus: !prevStatus.addProductModalStatus
      };
    });
  };

  toggleEditProjectModal = project => {
    this.selectedEditProject = { ...project };
    this.setState(prevStatus => {
      return {
        editProductModalStatus: !prevStatus.editProductModalStatus
      };
    });
  };

  deleteProject = projectId => {
    this.changeLoadingStatus(true);
    deleteProject(projectId)
      .then(() => {
        this.getProjects();
      })
      .catch(err => {
        this.changeLoadingStatus(false);
        showErrorMessage(err.message);
      });
  };

  render() {
    return (
      <div className="projects-page-container ">
        <div className="projects-container scrollbar">
          {this.state.toggleLoading && <ProgressSpinner />}

          {!this.state.toggleLoading &&
            this.state.projects.map(project => (
              <div key={project.id} className="single-project-card">
                <i
                  onClick={() => this.deleteProject(project.id)}
                  className="fa fa-times clickable"
                ></i>
                <Card className="full-height full-width card">
                  <CardHeader>
                    <CardTitle tag="h6">{project.name}</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <p className="brief-text scrollbar">{project.brief}</p>
                  </CardBody>
                  <CardFooter>
                    <div className="actions-container">
                      <i
                        className="fa fa-edit clickable"
                        onClick={() => this.toggleEditProjectModal(project)}
                      ></i>
                      <Link to="/home/5">
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}

          {!this.state.toggleLoading && !this.state.projects.length && (
            <p className="text-center">No Projects Available</p>
          )}

          {this.props.isAgent && (
            <Button
              tooltip={"Add New Project"}
              className="add-new-project-button clickable"
              onClick={this.toggleAddProjectModal}
              icon={"fa fa-plus"}
            />
          )}
        </div>

        <AddEditProjectModal
          projectData={{}}
          {...this.state}
          toggleModalStatus={this.state.addProductModalStatus}
          updateProjectsList={this.getProjects}
          closeModal={this.toggleAddProjectModal}
        />
        <AddEditProjectModal
          projectData={this.selectedEditProject}
          {...this.state}
          toggleModalStatus={this.state.editProductModalStatus}
          updateProjectsList={this.getProjects}
          closeModal={this.toggleEditProjectModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.sharedReducer,
    ...state.authReducer
  };
};

function mapActionToProps(dispatch) {
  return bindActionCreators({ changeTheme, logOutServer }, dispatch);
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(withRouter(withNamespaces()(Projects)));
