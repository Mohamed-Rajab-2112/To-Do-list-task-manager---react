import axiosInstance from "../../axios/axios";
import { apiUrls } from "../api-urls/api-urls";

export const getUserDetails = (userId) => {
  return axiosInstance.get(apiUrls().userDetails, {
    params: {
      id: userId
    }
  });
};
