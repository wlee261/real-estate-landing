"use client";

import React from "react";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top--section">
        <div className="footer-text">
          <span className="footer-text--chunk">INFORMATION</span>
        </div>
      </div>
      <div className="footer-bottom--section">
        <div className="footer-text">
          <span className="footer-text--chunk">Copyright 2023</span>
          <span className="footer-text--chunk">
            Joan Sung, COMPASS, DRE 12312312
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
