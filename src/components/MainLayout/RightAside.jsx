import React from "react";
import SocialLogIn from "./SocialLogIn";
import FindUs from "./FindUs";
import Qzon from "./Qzon";

const RightAside = () => {
  return (
    <div>
      <div className="space-y-8">
        <SocialLogIn></SocialLogIn>
        <FindUs></FindUs>
        <Qzon></Qzon>
      </div>
    </div>
  );
};

export default RightAside;
