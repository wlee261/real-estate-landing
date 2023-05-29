import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";

const ConnectButton = () => {
  const [showContact, setShowContact] = useState(false);

  const handleOpen = () => {
    setShowContact(true);
  };

  const handleClose = () => {
    setShowContact(false);
  };

  return (
    <div>
      <button className="connect-button" onClick={handleOpen}>
        Let's Connect
      </button>
      <Backdrop open={showContact} onClick={handleClose} />
    </div>
  );
};

export default ConnectButton;
