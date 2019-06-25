import { SAVE_LOGGED_IN_USER_DATA } from "../actions/save-user-data-action";
import { LOG_OUT } from "../actions/log_out_action";
import { saveUserData, removeUserData } from "../helpers/auth-reducer-helper";

const defaultState = {
  isAuth: !!JSON.parse(localStorage.getItem("my-task-manager-data"))
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_LOGGED_IN_USER_DATA:
      return saveUserData(state, action.userData);
    case LOG_OUT:
      return removeUserData(state);
    default:
      return state;
  }
};

export default authReducer;
