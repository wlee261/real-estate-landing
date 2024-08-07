'use client';

import React, { cloneElement, useState } from 'react';

import Link from 'next/link';

import { MenuItem, Menu } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import useScrollTrigger from '@mui/material/useScrollTrigger';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <NavbarLink label="Home" path="/" />
            <NavbarLink label="About" path="/about" />
            <NavbarLink label="Properties" path="/properties" />
            <Menu
              id="mobile-nav"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'mobile-nav-menu-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/about">About</Link>{' '}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/properties">Properties</Link>{' '}
              </MenuItem>
            </Menu>
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
      backgroundColor: trigger ? 'black' : 'rgba(0, 0, 0, 0.3)',
      transition: '0.3s',
    },
  });
};

const NavbarLink = ({ label, path }) => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
      <Typography
        variant="h6"
        component={Link}
        href={path}
        sx={{
          display: 'flex',
          color: 'inherit',
          textDecoration: 'none',
          fontWeight: 'inherit',
          fontSize: 16,
          '&:hover': {
            color: 'white',
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default Navbar;
