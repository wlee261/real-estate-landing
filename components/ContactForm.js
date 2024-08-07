import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = ({ closeBackdrop, setSnackbarMessage }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b0uyif7', 'template_bjmp9ma', form.current, {
        publicKey: 'rCa6tU-rd_l0HsrQ0',
      })
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
    closeBackdrop();
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="contact-form--container">
        <h2 className="contact-form--header">Get in contact with me!</h2>
        <IconButton
          onClick={closeBackdrop}
          className="contact-form--close-button"
        >
          <CloseIcon />
        </IconButton>
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
