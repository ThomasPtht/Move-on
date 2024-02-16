import React from "react";
import aboutPic from "../assets/images/sportsman-sportswoman.jpg";

function About(props) {
  return (
    <div className="m-10 bg-indigo-100">
      <div className="relative bg-indigo-100 ">
        <img className="w-3/6 rounded-xl" src={aboutPic} alt="" />
        <div className="absolute bottom-16 right-1/2 transform translate-x-1/2  w-auto h-20 p-6 bg-white rounded-xl shadow-lg">
          hello
        </div>
      </div>
    </div>
  );
}

export default About;
