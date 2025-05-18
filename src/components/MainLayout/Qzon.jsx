import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const Qzon = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Qzone</h2>
      <div className="space-y-5 ">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
};

export default Qzon;
