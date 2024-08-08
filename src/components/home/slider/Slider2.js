import React from "react";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import "./Slider.css";

const Slider2 = () => {
  return (
    <div className="slider2" style={{ padding: "2rem" }}>
      <div className="icon-greeting">
        <PiHandsPrayingBold /> Namaste
      </div>
      <div className="content">
        "Good afternoon. I trust this message finds you well. If there’s
        anything you need assistance with or if you’d like to catch up, please
        don’t hesitate to reach out. Wishing you a pleasant day."
      </div>
      <div className="img">
        <FaUserAlt className="user-icon" />
        <div className="name-details">
          <span className="name">Rishu Pandey</span>
          <small>Frontend Developer</small>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
