"use client";

import ValuationForm from "@/components/ValuationForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="valuation--background-image-container">
        <Image
          className="valuation--background-image"
          src={"/house-interior.jpg"}
          fill
          alt="house background image"
        />
        <ValuationForm />
      </div>
    </div>
  );
};

export default page;
