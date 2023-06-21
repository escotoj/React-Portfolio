import { Grid, Typography } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Grid bgcolor="lavenderblush" spacing={2} textAlign="center" >
      <Grid item xs={12}>
      <Typography variant="h2" component="h2">
          Jos.E Portfolio, Round 2
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
