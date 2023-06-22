import Image from "next/image";
import saratogaImg from "../../../assets/saratoga.jpg";

import locations from "@/data/locations.json";

export default function Page({ params }) {
  const location = locations.find(
    (location) => location.key === params.location
  );
  return (
    <div>
      <div className="location--background-image-container">
        <Image
          src={location.image}
          fill={true}
          className="location--background-image"
        />
        <div className="location--text-container">
          <span className="location--location-name">
            {location.location.toUpperCase()}
          </span>
          <span className="location--location-description">
            {location.titleDescription}
          </span>
        </div>
      </div>
      <p>Location: {params.location}</p>
    </div>
  );
}
