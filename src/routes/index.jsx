import Dashboard from "../layouts/Dashboard/Dashboard";
import LogIn from "../views/Log-in/Log-in";

const indexRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    component: Dashboard,
    componentPath: "./layouts/Dashboard/Dashboard",
  },
  {
    path: "/",
    name: "Log In",
    component: LogIn,
    componentPath: "./views/Log-in/Log-in",
  },
];

export default indexRoutes;
