"use client";

import React from "react";
import ConnectButton from "./ConnectButton";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top--section">
        <ConnectButton />
        <span className="footer-text--contact">(408) 111-1111</span>
        <span className="footer-text--contact">email@compass.com</span>
        <div className="footer-text">
          <span className="footer-text--disclaimer">
            Joan Sung is a real estate agent licensed by the state of California
            affiliated with Compass. Compass is a real estate broker licensed by
            the state of California and abides by equal housing opportunity
            laws. All material presented herein is intended for informational
            purposes only. Information is compiled from sources deemed reliable
            but is subject to errors, omissions, changes in price, condition,
            sale, or withdrawal without notice. No statement is made as to
            accuracy of any description. All measurements and square footages
            are approximate. This is not intended to solicit property already
            listed. Nothing herein shall be construed as legal, accounting or
            other professional advice outside the realm of real estate
            brokerage.
          </span>
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
