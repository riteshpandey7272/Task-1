import React from "react";
import "./Home.css";

const ActivitiesCard = () => {
  return (
    <div className="section-container-lg w-container">
      <div className="w-layout-grid new-grid">
        {/* Card-1 */}
        <div id="card-1" className="panel">
          <div className="panel-txt-container">
            <div>
              <h3 className="panel-heading">Form your legal entity.</h3>
              <p className="text">
                Choose an LLC or Corporation and the registration state for your
                business. We'll guide you through which is best for your
                business if you don't know.
              </p>
            </div>
          </div>
          <div className="panel-img-container">
            <img
              src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/628fb67d6a5287cedb45d54c_inccccc.svg"
              loading="lazy"
              alt="Formation - Image"
              className="panel-img"
            />
          </div>
        </div>

        {/* Card-2 */}
        <div id="card-2" className="panel">
          <div className="panel-txt-container">
            <div>
              <h3 className="panel-heading">
                Open a bank account without an EIN.
              </h3>
              <p className="text">
                Don't wait on the IRS. We'll give you a bank account faster
                without needing an EIN. We're also authorized by the Internal
                Revenue Service (IRS) to offer expedited EIN services if needed.
                Get $100 cash back after depositing $1000 into your Mercury
                account.
              </p>
            </div>
          </div>
          <div className="panel-img-container">
            <img
              src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/629644bddcd05c1f604af666_ein.svg"
              loading="lazy"
              alt="Tax ID Number (EIN) - Image"
              class="panel-img"
            />
          </div>
        </div>

        {/* Card-3 */}
        <div id="card-3" className="panel">
          <div className="panel-txt-container">
            <div>
              <h3 className="panel-heading">
                Get Firstbase Accounting and start your company stress free.
              </h3>
              <p className="text">
                Get a dedicated bookkeeper to manage your books while you scale
                your business.
              </p>
              <button className="btn-click">Click on me</button>
            </div>
          </div>
          <div className="panel-img-container">
            <img
              src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/654a23e25059e88e248349fd_homepage%20image.png"
              loading="lazy"
              sizes="(max-width: 479px) 44vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, (max-width: 1279px) 49vw, 518px"
              alt=""
              width="783"
              srcset="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/654a23e25059e88e248349fd_homepage%20image-p-500.png 500w, https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/654a23e25059e88e248349fd_homepage%20image-p-800.png 800w, https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/654a23e25059e88e248349fd_homepage%20image-p-1080.png 1080w, https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/654a23e25059e88e248349fd_homepage%20image.png 1566w"
              class="panel-img custom"
            />
          </div>
        </div>

        {/* Card-4 */}
        <div id="card-4" className="panel">
          <div className="panel-txt-container">
            <div>
              <h3 className="panel-heading">
                Appoint a registered agent and get a US business address.
              </h3>
              <p className="text">
                To remain in compliant standing, founders who purchase Start™
                must purchase Agent™ starting at $149/yr and have a registered
                US business address.
              </p>
            </div>
          </div>
          <div className="panel-img-container">
            <img
              src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/63eead005d55535586687e64_Start%20with%20Mailroom%20and%20Agent.svg"
              loading="lazy"
              alt="start with mailroom and agent"
              class="panel-img"
              style={{ height: "280px", width: "1040px", gap: "5px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
