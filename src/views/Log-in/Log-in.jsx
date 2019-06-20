import React from "react";
import "./Log-in.css";
import HomeLogoSection from "../../components/HomeLogoSection/HomeLogoSection";
import LogInForm from "../../components/LogInForm/LogInForm";

const LogIn = () => {
  
  return (
    <div className={"log-in-view-container"}>
      <div>
        <HomeLogoSection/>
      </div>
      <div>
        <LogInForm/>
      </div>
    </div>
  );
};

export default LogIn;