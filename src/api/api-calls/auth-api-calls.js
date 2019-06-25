import firebase from "firebase";
import axiosInstance from "../../axios/axios";
import { apiUrls } from "../api-urls/api-urls";

export const logInApiCall = userData => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(res => {
      // debugger
      return getExistedUserData(res.user.uid).then(user => {
        // debugger
        return Promise.resolve(user);
      });
    })
    .catch(err => {
      return Promise.reject(err.message);
    });
};

export const getExistedUserData = userId => {
  return axiosInstance.get(apiUrls().usersUrl + "/" + userId + ".json");
};

export const signUp = userData => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then(res => {
      const userDataToPost = {
        id: res.user.uid,
        name: userData.name,
        email: userData.email,
        type: userData.userType
      };
      return postNewUserData(userDataToPost).then(() => {
        return Promise.resolve(res);
      });
    })
    .catch(err => {
      return Promise.reject(err.message);
    });
};

export const postNewUserData = userData => {
  return axiosInstance.put(
    apiUrls().usersUrl + "/" + userData.id + ".json",
    userData
  );
};

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err.message);
    });
};
