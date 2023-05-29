"use client";

import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import profile from "../assets/profile.jpg";

const DescriptionCard = ({ text, image }) => {
  return (
    <Card sx={{ maxWidth: "80%", display: "flex" }}>
      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            About Joan
          </Typography>
          <Typography gutterBottom>
            A 30-year Bay Area resident, Joan holds a long-term perspective on
            the Bay Area real estate market. Over decades of acquiring and
            renovating properties in the Bay Area, Joan honed a keen
            understanding of navigating the home buying process and property
            valuation.
          </Typography>
          <Typography gutterBottom>
            To Joan, the foundation of this business is integrity. While staying
            on top of a dynamic real estate market, she strives to be forthright
            and diligent in her representation, placing her clients' interests
            above all else. As the agent for both current and prospective
            homeowners, Joan serves as a steadfast advisor during one of the
            most important decisions in life.
          </Typography>
          <Typography>
            Joan was born in Taipei, Taiwan, and is fluent in both Mandarin and
            Taiwanese. She immigrated to Silicon Valley in the early 1990s,
            where she later fulfilled her dream of becoming a homeowner. She has
            been attached to the Valley ever since, knowing what it takes to be
            a homeowner through the boom and busts of dot-com, 2008, and the
            tech resurgence. While she lives and breathes real estate, Joan is a
            foodie at heart. She is passionate about cooking farm-to-table
            dishes from her garden, golf, and travel.
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={profile}
          alt="green iguana"
        />
      </Box>
    </Card>
  );
};

export default DescriptionCard;
