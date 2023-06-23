import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="orange" display="flex" justifyContent="center">
      <a
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub sx={{ mr: 2 }} />
      </a>
      <a
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Email sx={{ mr: 2 }} />{" "}
      </a>

      <a
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none" }}
      >
        <LinkedIn sx={{ mr: 2 }} />
      </a>
    </Box>
  );
};

export default Footer;
