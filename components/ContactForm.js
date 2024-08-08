import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = ({
  closeBackdrop,
  setSnackbarMessage,
  setIsSnackbarOpen,
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSnackbarMessage('Your message has been successfully sent!');
        },
        (error) => {
          setSnackbarMessage(
            'Something went wrong... Please contact me directly via phone or email!'
          );
        }
      );
    form.current.reset();
    setIsSnackbarOpen(true);
    closeBackdrop();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form--container">
        <h2 className="contact-form--header">Get in contact with me!</h2>
        <div className="contact-form--close-button">
          <IconButton onClick={closeBackdrop}>
            <CloseIcon />
          </IconButton>
        </div>
        <TextField
          type="text"
          name="user_name"
          label="Name"
          required
          sx={{ mb: 3, width: '80%' }}
        />
        <TextField
          type="email"
          name="user_email"
          label="Email"
          required
          sx={{ mb: 3, width: '80%' }}
        />
        <TextField
          name="message"
          label="Message"
          required
          multiline
          rows={4}
          sx={{ mb: 3, width: '80%' }}
        />
        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
