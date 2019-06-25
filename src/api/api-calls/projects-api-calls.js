import axiosInstance from "../../axios/axios";
import { apiUrls } from "../api-urls/api-urls";

export const postNewProject = data => {
  return axiosInstance.post(apiUrls().projectsUrl, data).then(data => {
    patchProject({ id: data.name })
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  });
};

export const patchProject = data => {
  return axiosInstance.patch('https://my-task-manager-app.firebaseio.com/projects/' + data.id + '.json', data);
};

export const getAllProjects = () => {
  return axiosInstance.get(apiUrls().projectsUrl);
};

export const getProjectById = id => {
  return axiosInstance.get(
    apiUrls().projectsUrl +
      '?orderBy="$key"&startAt=" + id + "&endAt=" + id + "'
  );
};
