import React from "react";
import "./Home.css";
import AutoWriter from "./AutoWriter";
import Videocard from "./Videocard";
import Activities from "./Activities";
import ActivitiesCard from "./ActivitiesCard";
import Activitiestwo from "./Activitiestwo";
import Tabsection from "./Tabsection";
import Slider from "./Slider";
import ExpeCard from "./ExpeCard";
import Reward from "./Reward";
import IconSlider from "./IconSlider";
import Founder from "./Founder";
import GetMore from "./GetMore";
import Companies from "./Companies";
import GetStart from "./GetStart";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="card-1">
        <div className="auto-typer">
          <AutoWriter />
          <p>
            The simplest way for anyone to launch and run a US business. <br />
            Incorporate your company, access one-click growth tools, stay <br />
            compliant, and manage everything your business needs — all online,{" "}
            <br />
            from anywhere.
          </p>
          <button className="btn-click">Click on me</button>
        </div>
        <div className="video-card">
          <Videocard />
        </div>
      </div>
      <div className="activities">
        <Activities/>
        <ActivitiesCard/>
        <Activitiestwo/>
        <Tabsection/>
        <Slider/>
        <ExpeCard/>
        <Reward />
        <IconSlider/>
        <Founder/>
        <GetMore/>
        <Companies/>
        <GetStart/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
