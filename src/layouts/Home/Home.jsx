import React from 'react';
import Header from "../../components/Header/Header";
import {Switch, Route, Router} from 'react-router-dom'
import LazyLoadingComponent from "../../components/lazyLoadingComponent/lazyLoadingComponent";
import {hist} from "../../views/App";
import './Home.css';

const Home = () => {
  return (
    <div className='home-page-container'>
      <Header/>
      <div className='app-body-container'>
        <Router history={hist}>
          <Switch>
            <Route path={'/'} component={LazyLoadingComponent(() => import("../../views/Projects/Projects"))}/>
          </Switch>
        </Router>
      </div>
    </div>
  )
};

export default Home;