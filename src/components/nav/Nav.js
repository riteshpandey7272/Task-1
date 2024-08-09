import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FaBowlFood } from "react-icons/fa6";

const Nav = ({ onNavigate }) => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("collapsibleNavbar");
    if (navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FaBowlFood />
          TechQilla Task
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => {
                  onNavigate();
                  closeNavbar();
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown 1
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown1">
                <Link
                  className="dropdown-item"
                  to="/option1"
                  onClick={closeNavbar}
                >
                  Item 1
                </Link>
                <Link
                  className="dropdown-item"
                  to="/option2"
                  onClick={closeNavbar}
                >
                  Item 2
                </Link>
                <Link
                  className="dropdown-item"
                  to="/option3"
                  onClick={closeNavbar}
                >
                  Item 3
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown 2
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown2">
                <Link
                  className="dropdown-item"
                  to="/option4"
                  onClick={closeNavbar}
                >
                  Item 4
                </Link>
                <Link
                  className="dropdown-item"
                  to="/option5"
                  onClick={closeNavbar}
                >
                  Item 5
                </Link>
                <Link
                  className="dropdown-item"
                  to="/option6"
                  onClick={closeNavbar}
                >
                  Item 6
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/auth"
                onClick={() => {
                  onNavigate();
                  closeNavbar();
                }}
              >
                Auth
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
