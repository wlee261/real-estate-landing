import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import makeUrlFriendly from "@/utils/makeUrlFriendly";

const PropertyCard = ({
  address,
  fullAddress,
  price,
  bedNum,
  bathNum,
  sqft,
  image,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/sold-properties/${makeUrlFriendly(fullAddress)}`);
  };
  return (
    <div className="property-card--container" onClick={handleClick}>
      <div className="property-card--image-container">
        <Image src={image} alt={address} fill />
      </div>
      <div className="property-card--text-container">
        <div className="property-card--address-price-container">
          <span className="property-card--address-text">{address}</span>
          <span className="property-card--price-text">${price}</span>
        </div>
        <span className="property-card--full-address-text">{fullAddress}</span>
        <span className="property-card--rooms-text">
          {bedNum} Beds | {bathNum} Baths | {sqft} Sq.Ft.
        </span>
        <span className="property-card--more-details-text">More Details</span>
      </div>
    </div>
  );
};

export default PropertyCard;
