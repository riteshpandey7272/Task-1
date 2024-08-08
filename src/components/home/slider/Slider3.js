import React from "react";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import "./Slider.css";

const Slider3 = () => {
  return (
    <div className="slider3" style={{ padding: "2rem" }}>
      <div className="icon-greeting">
        <PiHandsPrayingBold /> Namaste
      </div>
      <div className="content">
        "Hi! Just a quick hello to see how you're doing. Hope everything’s going
        great on your end. If you’ve got any news or just want to chat, I’m
        here!"
      </div>
      <div className="img">
        <FaUserAlt className="user-icon" />
        <div className="name-details">
          <span className="name">Aditya Pandey</span>
          <small>Backend Developer</small>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
