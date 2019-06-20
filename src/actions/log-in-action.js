import axiosInstance from '../axios/axios';

export const LOG_IN = "LOG_IN";
export const SAVE_LOGGED_IN_USER_DATA = "SAVE_LOGGED_IN_USER_DATA";

export const saveLoggedInUserData = (userData) => {
  return {
    type: SAVE_LOGGED_IN_USER_DATA,
    userData
  };
};

export const logIn = (userData) => {
  return (dispatch) => {
    return axiosInstance.post('login', userData)
      .then((res) => {
          console.log(res);
          dispatch(saveLoggedInUserData(res))
        },
        err => {
          return Promise.reject(err);
        })
    
  }
};