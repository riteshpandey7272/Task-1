import React from "react";
import "./Home.css";
import { FaRegEye } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { TbAlignBoxBottomRightFilled } from "react-icons/tb";

const GetMore = () => {
  return (
    <div className="GetMore">
      <div className="GetMore-header">
        <h3>Get more done with Firstbase.</h3>
        <small>
          Starting a company should be a celebration, not a nightmare.
        </small>
      </div>
      <div className="GetMore-card">
        <div className="card">
          <div>
            <FaRegEye className="getmore-icon"/>
          </div>
          <h4>No surprises or hidden fees</h4>
          <small>
            Our flat and transparent pricing includes everything your business
            needs.
          </small>
        </div>
        <div className="card">
          <div>
            <IoIosChatbubbles className="getmore-icon"/>
          </div>
          <h4>Global Customer Support</h4>
          <small>
            Get helpful, real human answers from our dedicated support teams
            wherever you are.
          </small>
        </div>
        <div className="card">
          <div>
            <TbAlignBoxBottomRightFilled className="getmore-icon"/>
          </div>
          <h4>7-Day Money Back <br/> Guarantee</h4>
          <small>
            If you’re not satisfied for any reason, you’ll get a full refund,
            minus state and third-party fees, within 7 days of purchase.
          </small>
        </div>
      </div>
    </div>
  );
};

export default GetMore;
