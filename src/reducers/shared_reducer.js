import {CHANGE_LANGUAGE} from "../actions/change_language_action";
import {CHANGE_THEME} from "../actions/change_theme_action";
import {changeLanguage, changeTheme} from "./shared_reducer_helpers";

const defaultState = {
  lang: localStorage.getItem("lang") || "en",
  theme: localStorage.getItem("theme") || "dark-theme",
  appRoot: document.getElementById("root"),
  appName: 'SPRINTOO',
  appLogo: 'assets/img/logo.png',
  appHomeLogo: 'assets/img/full-logo.png'
};

const sharedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return changeLanguage(state, action.lang);
    case CHANGE_THEME:
      return changeTheme(state, action.theme);
    default:
      return state;
  }
};

export default sharedReducer;