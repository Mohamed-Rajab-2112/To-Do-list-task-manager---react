import {Subject} from "rxjs";

export const growlMessage = new Subject();

export const getCurrentUserDetails = () => {
  return localStorage.getItem('my-task-manager-data')
};

export const assignPropertiesFromBackEndToFormFields = (backEndData, fieldsData) => {
  const extractedData = {};
  for (let field of fieldsData) {
    extractedData[field.propertyName] = backEndData[field.propertyName] || "";
  }
  return extractedData;
};


export const setGrowlMessage = (msg) => {
  growlMessage.next(msg);
};

export const showErrorMessage = (errorMsg, title = "Network Error") => {
  setGrowlMessage({
    severity: "error",
    summary: title,
    detail: errorMsg
  });
};

export const showSuccessMessage = (successMsg, title = "Done Successfully") => {
  setGrowlMessage({
    severity: "success",
    summary: title,
    detail: successMsg
  });
};
