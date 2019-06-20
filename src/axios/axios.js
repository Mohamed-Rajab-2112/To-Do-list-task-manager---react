import Axios from "axios";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

instance.interceptors.response.use(res => {
  return res.data;
});

instance.interceptors.request.use((req) => {
    // req.headers.common['Authorization'] = 'Auth token'
    req.responseType = 'json';
    return req;
  },
  error => {
    return Promise.reject(error)
  });

export default instance;