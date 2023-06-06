import { TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const ContactForm = ({ closeBackdrop }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    closeBackdrop();
  };

  return (
    <form
      className="contact-form--container"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h2 className="contact-form--header">Get in contact with me!</h2>
      <IconButton
        onClick={closeBackdrop}
        className="contact-form--close-button"
      >
        <CloseIcon />
      </IconButton>
      <TextField
        label="Name"
        onChange={(e) => setName(e.target.value)}
        required
        variant="outlined"
        color="secondary"
        value={name}
        sx={{ mb: 3, width: "80%" }}
      />
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        variant="outlined"
        color="secondary"
        value={email}
        sx={{ mb: 3, width: "80%" }}
      />
      <TextField
        label="Phone"
        onChange={(e) => setPhone(e.target.value)}
        variant="outlined"
        color="secondary"
        value={phone}
        sx={{ mb: 3, width: "80%" }}
      />
      <TextField
        label="Message"
        onChange={(e) => setMessage(e.target.value)}
        variant="outlined"
        color="secondary"
        value={message}
        required
        multiline
        rows={4}
        sx={{ mb: 3, width: "80%" }}
      />
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
