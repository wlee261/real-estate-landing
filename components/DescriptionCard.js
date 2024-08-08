'use client';

import React from 'react';

import Image from 'next/image';

const DescriptionCard = ({ title, subtitle, paragraphs, image }) => {
  return (
    <div className="description-card--container">
      <div className="description-card--text">
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
        {paragraphs.map((paragraph, index) => {
          return (
            <span key={index} className="description-card--paragraph">
              {paragraph}
            </span>
          );
        })}
      </div>
      <div className="description-card--image">
        <Image src={image} alt="profile pic" width={380} height={380} />
      </div>
    </div>
  );
};

export default DescriptionCard;
