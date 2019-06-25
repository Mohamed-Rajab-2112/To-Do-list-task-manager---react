import { logInApiCall } from "../../api/api-calls/auth-api-calls";

export const SAVE_LOGGED_IN_USER_DATA = "SAVE_LOGGED_IN_USER_DATA";
export const saveLoggedInUserData = userData => {
  return {
    type: SAVE_LOGGED_IN_USER_DATA,
    userData
  };
};

export const logIn = userData => {
  return dispatch => {
    return logInApiCall(userData)
      .then(res => {
        dispatch(saveLoggedInUserData(res));
      })
      .catch(err => {
        return Promise.reject(err.message);
      });
  };
};
