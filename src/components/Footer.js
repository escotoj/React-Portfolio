import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="orange" display="flex" justifyContent="center">
      <a
        href="https://github.com/escotoj"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none" }}
      >
        <GitHub sx={{ mr: 2 }} />
      </a>
      {/* <a
        href="href=mailto:jaetheillust@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Email sx={{ mr: 2 }} />{" "}
      </a> */}

      <a
        href="https://www.linkedin.com/in/jose-escoto-b9519a146/"
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
