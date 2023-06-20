import { Box, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Grid bgcolor="lavenderblush" spacing={2}>
      <Grid item xs={4}>
        HEADER - JE - Jose Escoto
      </Grid>
      <Grid item xs={8}>
        <Navigation />
      </Grid>
      
      {/* <Stack direction="row" justifyContent="center">
        <Typography variant="h1" component="h2">
          JE - Portfolio, Round 2
        </Typography>
      </Stack> */}
      
    </Grid>
  );
};

export default Header;
