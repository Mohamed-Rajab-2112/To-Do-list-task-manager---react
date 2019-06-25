import axiosInstance from "../../axios/axios";
import { apiUrls } from "../api-urls/api-urls";
import { convertFirebaseDataStructureToArray } from "../../utiities/sharedMethods";

export const postNewProject = newProjectData => {
  return axiosInstance
    .post(apiUrls().projectsUrl + ".json", newProjectData)
    .then(res => {
      return updateProject({ id: res.name })
        .then(() => {
          return Promise.resolve();
        })
        .catch(err => {
          return Promise.reject(err);
        });
    });
};

export const updateProject = data => {
  return axiosInstance.patch(
    apiUrls().projectsUrl + "/" + data.id + ".json",
    data
  );
};

export const getAllProjects = () => {
  return axiosInstance.get(apiUrls().projectsUrl + ".json").then(data => {
    return Promise.resolve(convertFirebaseDataStructureToArray(data));
  });
};

export const getProjectByProjectId = id => {
  return axiosInstance.get(
    apiUrls().projectsUrl +
      '.json?orderBy="$key"&startAt=" + id + "&endAt=" + id + "'
  );
};

export const getProjectByOwnerId = id => {
  return axiosInstance
    .get(
      apiUrls().projectsUrl +
        '.json?orderBy="projectOwnerId"&startAt="' +
        id +
        '"&endAt="' +
        id +
        '"&print=pretty'
    )
    .then(data => {
      return Promise.resolve(convertFirebaseDataStructureToArray(data));
    });
};

export const deleteProject = id => {
  return axiosInstance.delete(apiUrls().projectsUrl + "/" + id + ".json");
};
