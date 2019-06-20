import axiosInstance from '../axios/axios';

export const logIn = (state, userData) => {
  return axiosInstance.post('user/login', userData)
    .then((res) => {
        console.log(res);
        return state;
      },
      err => {
        console.log(err);
        return state;
      })
};

