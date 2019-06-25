const baseUrl =
  "https://my-task-manager-app.firebaseio.com/";

export const apiUrls = () => {
  return {
    projectsUrl: baseUrl + "projects",
    usersUrl: baseUrl + 'users'
  };
};
