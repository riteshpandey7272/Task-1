import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaBowlFood } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon">
          <Link className="navbar-brand" to="/">
            <FaBowlFood />
            TechQilla Task
          </Link>
        </div>
        <div className="footer-details">
          <div className="product">
            <small className="f-head">Products</small>
            <ul>
              <li>
                <Link className="f-link" to="/task1">
                  Task 1
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/task2">
                  Task 2
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/task3">
                  Task 3
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/rewards">
                  Rewards
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="company">
            <small className="f-head">Company</small>
            <ul>
              <li>
                <Link className="f-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/career">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="s&R">
            <small className="f-head">Support & Resources</small>
            <ul>
              <li>
                <Link className="f-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="f-link" to="/help-center">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
