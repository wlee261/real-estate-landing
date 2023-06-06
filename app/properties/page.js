"use client";

import React from "react";

import PropertyCard from "@/components/PropertyCard";

import soldProperties from "@/data/soldProperties.json";
import houseImg from "../../assets/house.jpg";

const Properties = () => {
  return (
    <div className="properties-page--container">
      <div className="sold-properties--cards-container">
        {soldProperties.map((soldProperty) => {
          return (
            <PropertyCard
              address={soldProperty.address}
              fullAddress={soldProperty.fullAddress}
              price={soldProperty.price}
              bedNum={soldProperty.bedNum}
              bathNum={soldProperty.bathNum}
              sqft={soldProperty.sqft}
              image={houseImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Properties;
