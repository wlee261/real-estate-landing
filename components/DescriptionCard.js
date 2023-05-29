"use client";

import React from "react";

import Image from "next/image";

const DescriptionCard = ({ title, paragraphs, image }) => {
  return (
    <div className="description-card--container">
      <div className="description-card--text">
        <h1>{title}</h1>
        {paragraphs.map((paragraph, index) => {
          return (
            <span key={index} className="description-card--paragraph">
              {paragraph}
            </span>
          );
        })}
      </div>
      <div className="description-card--image">
        <Image src={image} alt="profile pic" width={400} height={400} />
      </div>
    </div>
  );
};

export default DescriptionCard;
