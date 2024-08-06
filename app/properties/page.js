'use client';

import React from 'react';

import Image from 'next/image';

import PropertyCard from '@/components/PropertyCard';

import soldProperties from '@/data/soldProperties.json';
import sceneryBridge from '@/assets/scenery-bridge.jpg';

const Properties = () => {
  return (
    <div className="properties-page--container">
      <div className="properties--background-image-container">
        <Image
          src="/background/properties.jpg"
          fill={true}
          className="properties--background-image"
        />
        <div className="properties--text-container">
          <span className="properties--header">Past Transactions</span>
          <span className="properties--subheader">
            View some of my recently sold listings.
          </span>
        </div>
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
              image={`/sold-properties${soldProperty.propertyImage}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Properties;
