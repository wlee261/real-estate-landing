import React from "react";

import saratoga from "../assets/saratoga.jpg";
import cupertino from "../assets/cupertino.jpg";
import paloAlto from "../assets/paloAlto.jpg";
import losAltos from "../assets/los-altos.jpg";
import losGatos from "../assets/los-gatos.jpg";
import sunnyvale from "../assets/sunnyvale.jpg";

import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <div className="locations-container">
      <LocationCard className="location" image={saratoga} location="saratoga" />
      <LocationCard
        className="location"
        image={sunnyvale}
        location="sunnyvale"
      />
      <LocationCard
        className="location"
        image={cupertino}
        location="cupertino"
      />
      <LocationCard
        className="location"
        image={paloAlto}
        location="palo alto"
      />
      <LocationCard
        className="location"
        image={losAltos}
        location="los altos"
      />
      <LocationCard
        className="location"
        image={losGatos}
        location="los gatos"
      />
    </div>
  );
};

export default Locations;
