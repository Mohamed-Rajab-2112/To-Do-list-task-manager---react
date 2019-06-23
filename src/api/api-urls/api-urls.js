export const apiUrls = () => {
  return {
    logInUrl: "user/login",
    getAllEmployeesUrl: "User/GetAdminUsersPaginated",
    activateUser: "User/Activate?username=",
    deactivateUser: "User/Deactivate?username=",
    resetPasswordUrl: "User/ResetPassword",
    saveNewEmployeeUrl: "User/Add",
    userDetails: "User/get",
    editEmployeeUrl: "User/update",
    saveNewKitchenUrl: "User/RegisterMaker",
    getAllKitchensUrl: "User/GetMakerUsersPaginated",
    getAllCustomersUrl: "User/GetCustomerUsersPaginated",
    postNewAddressUrl: "Address/Add",
    updateAddressUrl: "Address/Update",
    getCustomerAddresses: "Address/GetByCustomer"
  };
};
