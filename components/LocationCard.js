import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import makeUrlFriendly from '@/utils/makeUrlFriendly';
import Link from 'next/link';

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
          <Link
            className="location-card--text"
            href={`/locations/${makeUrlFriendly(location)}`}
          >
            {location.toUpperCase()}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
