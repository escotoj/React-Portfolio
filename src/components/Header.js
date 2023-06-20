import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box bgcolor="lavenderblush" flex={6}>
      HEADER - JE - Jose Escoto
      {/* <Stack direction="row" justifyContent="center">
        <Typography variant="h1" component="h2">
          JE - Portfolio, Round 2
        </Typography>
      </Stack> */}
    </Box>
  );
};

export default Header;
