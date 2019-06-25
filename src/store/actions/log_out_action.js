import {signOut} from '../../api/api-calls/auth-api-calls';

export const LOG_OUT = 'LOG_OUT';

export const logOut = () => {
  return {
    type: LOG_OUT
  }
};

export const logOutServer = () => {
  return dispatch => {
    return signOut()
      .then(() => {
        dispatch(logOut());
      })
      .catch(err => {
        return Promise.reject(err.message)
      })
  }
};