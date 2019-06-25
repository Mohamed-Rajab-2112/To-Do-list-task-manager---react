import {CHANGE_THEME} from "../actions/change_theme_action";
import {changeTheme} from "../helpers/shared_reducer_helper";

const defaultState = {
  theme: localStorage.getItem("theme") || "dark-theme",
  appRoot: document.getElementById("root"),
  appName: 'Task Manager',
  appLogo: 'assets/img/logo.png',
  appHomeLogo: 'assets/img/full-logo.png'
};

const sharedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return changeTheme(state, action.theme);
    default:
      return state;
  }
};

export default sharedReducer;