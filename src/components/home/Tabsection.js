import React, { useState } from "react";
import './Home.css';

const Tabsection = () => {
  const [selectedTab, setSelectedTab] = useState("Tab 1");

  const renderImage = () => {
    switch (selectedTab) {
      case "Tab 1":
        return <img className="imgtab" src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/629642955eba6a2df1c0b236_CleanShot%202022-05-31%20at%2009.29.49%402x-p-1080.png" alt="Image 1" />;
      case "Tab 2":
        return <img className="imgtab" src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/6296430be5c07c5cc99ffbc7_CleanShot%202022-05-31%20at%2009.31.21%402x-p-1080.png" alt="Image 2" />;
      case "Tab 3":
        return <img className="imgtab" src="https://cdn.prod.website-files.com/609486d2fafa37698a57db5b/64ef4703681fdafd6f8f3c39_Carta-p-1080.png" alt="Image 3" />;
      default:
        return null;
    }
  };

  return (
    <div className="tab-activity">
      <div className="tabs-menu-4 w-tab-menu" role="tablist">
        <a
          data-w-tab="Tab 1"
          className={`tab-link-tab-1-4 w-inline-block w-tab-link ${selectedTab === "Tab 1" ? "w--current" : ""}`}
          id="w-tabs-0-data-w-tab-0"
          href="#w-tabs-0-data-w-pane-0"
          role="tab"
          aria-controls="w-tabs-0-data-w-pane-0"
          aria-selected={selectedTab === "Tab 1"}
          onClick={() => setSelectedTab("Tab 1")}
        >
          <div className="text-block-87">One application for all your needs.</div>
          <div className="text-block-88">
            No more re-entering your company data again. We securely transfer
            all your required onboarding information to each selected partner.
          </div>
        </a>
        <a
          data-w-tab="Tab 2"
          className={`tab-link-tab-1-4 w-inline-block w-tab-link ${selectedTab === "Tab 2" ? "w--current" : ""}`}
          id="w-tabs-0-data-w-tab-1"
          href="#w-tabs-0-data-w-pane-1"
          role="tab"
          aria-controls="w-tabs-0-data-w-pane-1"
          aria-selected={selectedTab === "Tab 2"}
          onClick={() => setSelectedTab("Tab 2")}
        >
          <div className="text-block-87">
            Integrations and rewards built for growth.
          </div>
          <div className="text-block-88">
            Grow your business with our partner integrations and get curated
            rewards, including cash incentives and credits.&nbsp;&nbsp;
          </div>
        </a>
        <a
          data-w-tab="Tab 3"
          className={`tab-link-tab-1-4 w-inline-block w-tab-link ${selectedTab === "Tab 3" ? "w--current" : ""}`}
          id="w-tabs-0-data-w-tab-2"
          href="#w-tabs-0-data-w-pane-2"
          role="tab"
          aria-controls="w-tabs-0-data-w-pane-2"
          aria-selected={selectedTab === "Tab 3"}
          onClick={() => setSelectedTab("Tab 3")}
        >
          <div className="text-block-87">Save time with automated onboarding.</div>
          <div className="text-block-88">
            Apply for any service your business needs and get onboarded across
            all of our partners in just a few minutes.
          </div>
        </a>
      </div>
      <div className="tab-render">
        {renderImage()}
      </div>
    </div>
  );
};

export default Tabsection;
