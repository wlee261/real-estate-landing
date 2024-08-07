import React, { useState, useEffect } from 'react';

import { Snackbar } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import ContactForm from './ContactForm';

const ConnectButton = () => {
  const [showContact, setShowContact] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(
    'Your message has been successfully sent!'
  );

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        setShowContact(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleOpen = () => {
    setShowContact(true);
  };

  const handleClose = () => {
    setShowContact(false);
    setIsSnackbarOpen(true);
  };

  return (
    <div>
      <button className="connect-button" onClick={handleOpen}>
        Let&apos;s Connect
      </button>
      <Backdrop open={showContact}>
        <div className="contact-form">
          <ContactForm
            closeBackdrop={handleClose}
            setSnackbarMessage={setSnackbarMessage}
          />
        </div>
      </Backdrop>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  );
};

export default ConnectButton;
