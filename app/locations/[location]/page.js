import Image from 'next/image';

import locations from '@/data/locations.json';

export default function Page({ params }) {
  const location = locations.find(
    (location) => location.key === params.location
  );
  return (
    <div className="location--page-container">
      <div className="location--background-image-container">
        <Image
          src={location?.image}
          fill={true}
          className="location--background-image"
          alt=""
        />
        <div className="location--text-container">
          <span className="location--location-name">
            {location?.location.toUpperCase()}
          </span>
          <span className="location--location-description">
            {location?.titleDescription}
          </span>
        </div>
      </div>
      <div className="location--brochure-container">
        <span className="location--brochure-header">
          WELCOME TO {location?.location.toUpperCase()}
        </span>
        <span className="location--brochure-description">
          {location?.description}
        </span>
        <div className="divider" />
        <div className="location--brochure-city-attributes">
          {location?.attributes.map((attribute) => {
            return (
              <div
                key={attribute.bottom}
                className="location--brochure-attribute-container"
              >
                <span>{attribute.top}</span>
                <span>{attribute.bottom}</span>
              </div>
            );
          })}
        </div>
        <span className="location--brochure-subheader">THINGS TO DO</span>
        <div className="divider" />
        <div className="location--brochure-city-activities">
          {location?.activities.map((activity) => {
            return (
              <div
                key={activity.title}
                className="location--brochure-activity-container"
              >
                <span className="location--brochure-activity-title">
                  {activity.title}
                </span>
                <div className="location--brochure-activity-description-container">
                  {activity.info.map((infoPiece) => {
                    return (
                      <span
                        key={infoPiece}
                        className="location--brochure-activity-description-piece"
                      >
                        {infoPiece}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
