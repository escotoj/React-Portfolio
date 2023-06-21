import React from "react";
import { Box } from "@mui/material";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="orange" flex={4} display="flex" justifyContent="center" alignItems="center">
      <GitHub />
      <Email />
      <LinkedIn />
    </Box>
  );
};

export default Footer;
