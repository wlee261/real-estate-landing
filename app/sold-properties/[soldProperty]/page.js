import React from "react";

import soldProperties from "@/data/soldProperties.json";

export default function Page({ params }) {
  const soldPropertyInfo = soldProperties.find((soldProperty) => {
    return soldProperty.key === params.soldProperty;
  });
  return (
    <div>
      <span>{soldPropertyInfo.description}</span>
    </div>
  );
}
