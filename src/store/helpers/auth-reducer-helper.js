import { getCurrentUserDetails } from "../../utiities/sharedMethods";

export const saveUserData = (state, userData) => {
  localStorage.setItem("my-task-manager-data", JSON.stringify(userData));
  return {
    ...state,
    isAuth: true,
    isAdmin: getCurrentUserDetails().type === "admin",
    isAgent: getCurrentUserDetails().type === "agent"
  };
};

export const removeUserData = state => {
  localStorage.removeItem("my-task-manager-data");
  return { ...state, isAuth: false };
};
