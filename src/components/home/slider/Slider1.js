import React from "react";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import "./Slider.css";

const Slider1 = () => {
  return (
    <div className="slider1" style={{ padding: "2rem" }}>
      <div className="icon-greeting">
        <PiHandsPrayingBold /> Namaste
      </div>
      <div className="content">
        "Hey there! 😊 Hope you're having a fantastic day. Just wanted to check
        in and see how things are going. Let me know if there's anything
        exciting or new with you!"
      </div>
      <div className="img">
        <FaUserAlt className="user-icon" />
        <div className="name-details">
          <span className="name">Ritesh Pandey</span>
          <small>Full Stack Developer</small>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
