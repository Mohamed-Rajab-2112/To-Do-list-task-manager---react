import {SAVE_LOGGED_IN_USER_DATA} from "../actions/log-in-action";

const defaultState = {
  isAuth: false
};

const logInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_LOGGED_IN_USER_DATA:
      return {state, ...action.userData};
    default:
      return state;
  }
};

export default logInReducer;