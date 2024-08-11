import ProfileCard from "./ProfileCard";
import React, { Component } from "react";

const App = () => {
  return (
    <div>
      <div>Personal Digital Assitants</div>
      <ProfileCard title={"Alexa"} handle={"@alexa99"} />
      <ProfileCard title={"Cortana"} handle={"@cortana32"} />
      <ProfileCard title={"Siri"} handle={"@siri01"} />
    </div>
  );
};

export default App;
