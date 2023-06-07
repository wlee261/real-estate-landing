"use client";

import React from "react";

import Image from "next/image";

import PropertyCard from "@/components/PropertyCard";

import soldProperties from "@/data/soldProperties.json";
import sceneryBridge from "@/assets/scenery-bridge.jpg";

const Properties = () => {
  return (
    <div className="properties-page--container">
      <div className="properties--background-image-container">
        <Image
          src="/house-exterior.jpg"
          fill={true}
          className="properties--background-image"
        />
        <span className="properties--header">Past Transactions</span>
        <span className="properties--subheader">
          View some of my recently sold listings.
        </span>
      </div>
      <div className="sold-properties--cards-container">
        {soldProperties.map((soldProperty) => {
          return (
            <PropertyCard
              key={soldProperty.fullAddress}
              address={soldProperty.address}
              fullAddress={soldProperty.fullAddress}
              price={soldProperty.price}
              bedNum={soldProperty.numBeds}
              bathNum={soldProperty.numBaths}
              sqft={soldProperty.sqft}
              image="/house-exterior.jpg"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Properties;
