import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import makeUrlFriendly from "@/utils/makeUrlFriendly";

const LocationCard = ({ image, location }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/locations/${makeUrlFriendly(location)}`);
  };
  return (
    <div className="location-card--container" onClick={handleClick}>
      <Image src={image} fill alt="location" />
      <div className="location-card--overlay">
        <div className="location-card--overlay-border">
          {location.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
