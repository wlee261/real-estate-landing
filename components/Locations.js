import React from 'react';

import LocationCard from './LocationCard';

const Locations = () => {
  return (
    <div className="locations-container">
      <LocationCard
        className="location"
        image={'/locations/saratoga-location.jpg'}
        location="saratoga"
      />
      <LocationCard
        className="location"
        image={'/locations/sunnyvale-location.jpg'}
        location="sunnyvale"
      />
      <LocationCard
        className="location"
        image={'/locations/cupertino-location.jpg'}
        location="cupertino"
      />
      <LocationCard
        className="location"
        image={'/locations/palo-alto-location.jpg'}
        location="palo alto"
      />
      <LocationCard
        className="location"
        image={'/locations/los-altos-location.jpg'}
        location="los altos"
      />
      <LocationCard
        className="location"
        image={'/locations/los-gatos-location.jpg'}
        location="los gatos"
      />
    </div>
  );
};

export default Locations;
