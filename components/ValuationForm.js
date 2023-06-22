import { TextField, Button, IconButton } from "@mui/material";
import React, { useState } from "react";

const ValuationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        className="valuation-form--container"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <span className="valuation-form--header">
          What is your home really worth?
        </span>
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
          label="Address"
          onChange={(e) => setAddress(e.target.value)}
          variant="outlined"
          color="secondary"
          value={address}
          sx={{ mb: 3, width: "80%" }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ValuationForm;
