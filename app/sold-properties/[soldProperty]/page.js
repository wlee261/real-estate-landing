import React from 'react';

import Image from 'next/image';

import DescriptionCard from '@/components/DescriptionCard';

import soldProperties from '@/data/soldProperties.json';

export default function Page({ params }) {
  const soldPropertyInfo = soldProperties.find((soldProperty) => {
    return soldProperty.key === params.soldProperty;
  });
  return (
    <div className="sold-property-page">
      <div className="sold-property--background-image-container">
        <Image
          src={`/sold-properties${soldPropertyInfo.propertyImage}`}
          fill={true}
          className="sold-property--background-image"
        />
      </div>
      <DescriptionCard
        title={soldPropertyInfo.address}
        subtitle={`$${soldPropertyInfo.price} | ${soldPropertyInfo.fullAddress}`}
        paragraphs={[soldPropertyInfo.description]}
        image={`/sold-properties${soldPropertyInfo.propertyImage}`}
      />
    </div>
  );
}
