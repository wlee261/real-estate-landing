import React, { useState, useEffect } from "react";

import Backdrop from "@mui/material/Backdrop";
import ContactForm from "./ContactForm";

const ConnectButton = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        setShowContact(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleOpen = () => {
    setShowContact(true);
  };

  const handleClose = () => {
    setShowContact(false);
  };

  return (
    <div>
      <button className="connect-button" onClick={handleOpen}>
        Let&apos;s Connect
      </button>
      <Backdrop open={showContact}>
        <div className="contact-form">
          <ContactForm closeBackdrop={handleClose} />
        </div>
      </Backdrop>
    </div>
  );
};

export default ConnectButton;
