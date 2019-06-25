import firebase from "firebase";

export const logInApiCall = userData => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err.message);
    });
};

export const signUp = userData => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then(res => {
      return Promise.resolve(res)
    })
    .catch(err => {
      return Promise.reject(err.message);
    });
};
