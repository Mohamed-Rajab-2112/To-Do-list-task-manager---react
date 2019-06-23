import React from 'react';
import './Projects.css'
import {connect} from "react-redux";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";
import {changeTheme} from '../../store/actions/index'
import {bindActionCreators} from 'redux'

const Projects = props => {
  const logo = require('../../' + props.appLogo);
  return (
    <div className="projects-page-container ">
      <div className="full-with projects-page-header padding-left-15 uk-animation-fade">
        <div className='logo-and-title-container'>
          <img alt={"logo"} src={logo}/>
          <h5 className='no-margin margin-left-10'>Task Manager</h5>
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
          </div>
        </div>

      </div>
      <div className='projects-container scrollbar'>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
        <div className='single-project-card'>
          <Card className='full-height full-width card'>
            <CardHeader>
              <CardTitle tag="h4">Project Name</CardTitle>
            </CardHeader>
            <CardBody>
              <p>Some brief is here</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.sharedReducer
  }
};

function mapActionToProps(dispatch) {
  return bindActionCreators({changeTheme}, dispatch)
}

export default connect(mapStateToProps, mapActionToProps)(Projects);