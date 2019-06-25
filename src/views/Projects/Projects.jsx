import React from "react";
import "./Projects.css";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { changeTheme } from "../../store/actions/index";
import { logOutServer } from "../../store/actions/log_out_action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import AddEditProjectModal from "../../components/AddEditProjectModal/AddEditProjectModal";

class Projects extends React.PureComponent {
  state = {
    addProductModalStatus: false
  };

  toggleAddProjectModal = () => {
    this.setState(prevStatus => {
      return {
        addProductModalStatus: !prevStatus.addProductModalStatus
      };
    });
  };

  render() {
    return (
      <div className="projects-page-container ">
        <div className="projects-container scrollbar">
          <div className="single-project-card">
            <Card className="full-height full-width card">
              <CardHeader>
                <CardTitle tag="h4">Project Name</CardTitle>
              </CardHeader>
              <CardBody>
                <p>Some brief is here</p>
              </CardBody>
            </Card>
          </div>

          <button
            className="add-new-project-button clickable"
            onClick={this.toggleAddProjectModal}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>

        <AddEditProjectModal
          projectData={{}}
          {...this.state}
          closeModal={this.toggleAddProjectModal}
        />
      </div>
    );
  }
}

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
)(withRouter(Projects));
