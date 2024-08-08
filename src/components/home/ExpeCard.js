import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MdOutlineCheckCircle } from "react-icons/md";

const ExpeCard = () => {
  return (
    <div className="section-container-lg w-container">
      <div className="w-layout-grid new-grid">
        {/* Card-1 */}
        <div id="card-1" className="panel">
          <div className="panel-txt-container">
            <div>
              <h3 className="panel-heading">
                Your company's all-in-one compliance solution.
              </h3>
              <p className="text">
                Put all ongoing compliance, filings, and reports on autopilot.
                Never miss a deadline. Now includes beneficial ownership
                filings.
              </p>
              <div className="exp-btn">
                <button className="btn-click">See how its work</button>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  See Details
                </Link>
              </div>
            </div>
          </div>
          <div className="panel-img-container">
            <img
              src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/629827546cef920dbb7132b2_agent-img%20(1)-p-500.png"
              loading="lazy"
              alt="Formation - Image"
              className="panel-img"
            />
          </div>
        </div>

        {/* Card-4 */}
        <div id="card-4" className="panel">
          <div className="panel-img-container">
            <img
              src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/6571f6870be87076590b3a3f_Mailroom-spot-p-500.png"
              loading="lazy"
              alt="start with mailroom and agent"
              class="panel-img"
              style={{ height: "280px", width: "1040px", gap: "5px" }}
            />
          </div>
          <div className="panel-txt-container-2">
            <div>
              <h3 className="panel-heading">
                The smartest home for all your mail.
              </h3>
              <p className="text">
                Get a professional business address and virtual mailbox to
                instantly manage all your mailing needs - online, from any
                device.
              </p>
              <p style={{fontSize: "12px"}}> <MdOutlineCheckCircle style={{color: "green"}}/> Choose a premium address in California or New York.</p>
              <p style={{fontSize: "12px"}}> <MdOutlineCheckCircle style={{color: "green"}}/> View and manage your mail online, wherever you are.</p>
              <p style={{fontSize: "12px"}}> <MdOutlineCheckCircle style={{color: "green"}}/> Authorized by the United States Postal Service to securely and confidentially handle your mail.</p>
            </div>
              <div className="exp-btn">
                <button className="btn-click">See how its work</button>
                <Link style={{ textDecoration: "none", color: "white" }}>
                  See Details
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpeCard;
