import React from "react";
import Image from "next/image";

const LocationCard = ({ image, label }) => {
  return (
    <div className="location-card--container">
      <Image src={image} fill alt="location" />
      <div className="location-card--overlay">
        <div className="location-card--overlay-border">{label}</div>
      </div>
    </div>
  );
};

export default LocationCard;
