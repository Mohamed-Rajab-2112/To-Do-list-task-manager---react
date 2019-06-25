export const saveUserData = (state, userData) => {
  localStorage.setItem('my-task-manager-data', JSON.stringify(userData));
  return {...state, ...userData, isAuth: true}
};

export const removeUserData = (state) => {
  localStorage.removeItem('my-task-manager-data')
  return {...state, isAuth: false}
};