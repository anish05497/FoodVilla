import React from "react";
import { GITHUB_USER_NAME } from "../utils/constant";
import ProfileClass from "./ProfileClass";
import Social from "./Social";

const About = () => {
  return (
    <div className="container ">
      <h1 className="card-container-title mb-7">About me</h1>
      <ProfileClass name={GITHUB_USER_NAME} />
      <Social />
    </div>
  );
};

export default About;
