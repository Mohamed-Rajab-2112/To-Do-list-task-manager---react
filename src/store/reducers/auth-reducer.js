import { SAVE_LOGGED_IN_USER_DATA } from "../actions/save-user-data-action";
import { LOG_OUT } from "../actions/log_out_action";
import { saveUserData, removeUserData } from "../helpers/auth-reducer-helper";
import { getCurrentUserDetails } from "../../utiities/sharedMethods";

const defaultState = {
  isAuth: !!getCurrentUserDetails(),
  isAdmin: getCurrentUserDetails() && getCurrentUserDetails().type === "admin",
  isAgent: getCurrentUserDetails() && getCurrentUserDetails().type === "agent"
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
