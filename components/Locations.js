import React from "react";

import saratoga from "../assets/saratoga.jpg";

import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <div className="locations-container">
      <LocationCard className="location" image={saratoga} location="saratoga" />
      <LocationCard
        className="location"
        image={saratoga}
        location="palo alto"
      />
      <LocationCard
        className="location"
        image={saratoga}
        location="los altos"
      />
      <LocationCard className="location" image={saratoga} location="saratoga" />
      <LocationCard className="location" image={saratoga} location="saratoga" />
      <LocationCard className="location" image={saratoga} location="saratoga" />
    </div>
  );
};

export default Locations;
