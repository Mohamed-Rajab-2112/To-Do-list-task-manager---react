import React, {Component} from "react";
import './app.css'
import LazyLoadingComponent
  from "../components/lazyLoadingComponent/lazyLoadingComponent";
import {createBrowserHistory} from "history";
import {withI18n, reactI18nextModule} from "react-i18next";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import i18next from "i18next";
import common_en from "../translations/en/en.json";
import {connect} from "react-redux";
import {changeTheme} from "../store/actions/index";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {getCurrentUserDetails, growlMessage} from "../utiities/sharedMethods";
import {Growl} from 'primereact/growl';

const hist = createBrowserHistory();

i18next.use(reactI18nextModule).init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      translation: common_en,
    },
  },
});

class App extends Component {

  componentDidMount() {
    this.props.changeTheme(this.props.sharedReducer.theme);
    this.subscribeToGrowl()
  }

  subscribeToGrowl() {
    growlMessage.subscribe((msg) => {
      this.growl.show(msg);
    })
  }

  render() {
    return (
      <div className={'app-container'}>
        <Growl ref={(el) => this.growl = el}/>
        <Router history={hist}>
          <Switch>
            {getCurrentUserDetails() && <Route path={"/projects"}
                                               component={LazyLoadingComponent(
                                                 () => import("../views/Projects/Projects"))}/>}

            {getCurrentUserDetails() && (
              <Redirect from="**" to="/projects"/>
            )}


            {!getCurrentUserDetails() && <Route path={"/"}
                                                component={LazyLoadingComponent(
                                                  () => import("../views/Log-in/Log-in"))}/>};

            {!getCurrentUserDetails() && (
              <Redirect from="**" to="/"/>
            )}

          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sharedReducer: state.sharedReducer,
  };
}

export default connect(mapStateToProps, {changeTheme})(
  withI18n()(App),
);