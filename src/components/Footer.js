import React from "react";
import { Box } from "@mui/material";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="orange" display="flex" justifyContent="center" 
    >
      <GitHub sx={{ mr: 2 }}/>
      <Email sx={{ mr: 2 }}/>
      <LinkedIn sx={{ mr: 2 }}/>
    </Box>
  );
};

export default Footer;
