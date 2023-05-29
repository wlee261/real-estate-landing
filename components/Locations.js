import React from "react";

import saratoga from "../assets/saratoga.jpg";

import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <div className="locations-container">
      <LocationCard className="location" image={saratoga} label="SARATOGA" />
      <LocationCard className="location" image={saratoga} label="SARATOGA" />
      <LocationCard className="location" image={saratoga} label="SARATOGA" />
      <LocationCard className="location" image={saratoga} label="SARATOGA" />
      <LocationCard className="location" image={saratoga} label="SARATOGA" />
      <LocationCard className="location" image={saratoga} label="SARATOGA" />
    </div>
  );
};

export default Locations;
