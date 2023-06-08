"use client";

import React, { cloneElement } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import useScrollTrigger from "@mui/material/useScrollTrigger";

import Link from "next/link";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ChangeColorOnScroll>
        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <NavbarLink label="Home" path="/" />
            <NavbarLink label="About" path="/about" />
            <NavbarLink label="Properties" path="/properties" />
            <NavbarLink label="Home Valuation" path="/valuation" />
          </Toolbar>
        </AppBar>
      </ChangeColorOnScroll>
    </Box>
  );
};

const ChangeColorOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return cloneElement(children, {
    style: {
      backgroundColor: trigger ? "black" : "transparent",
      color: "white",
      transition: "0.3s",
    },
  });
};

const NavbarLink = ({ label, path }) => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
      <Typography
        variant="h6"
        component={Link}
        href={path}
        sx={{
          display: "flex",
          color: "white",
          textDecoration: "none",
          fontWeight: "inherit",
          fontSize: 16,
          "&:hover": {
            color: "white",
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default Navbar;
