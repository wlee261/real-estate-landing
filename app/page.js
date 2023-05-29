"use client";

import "../scss/main.scss";

import DescriptionCard from "../components/DescriptionCard";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        <span className="home-background--name">Joan Sung</span>
        <span className="home-background--license">CA DRE #12312312</span>
        <span className="home-background--area">Bay Area</span>
      </div>
      <div>
        <DescriptionCard />
      </div>
      <div>TESTOMONIALS</div>
    </div>
  );
};

export default HomePage;
