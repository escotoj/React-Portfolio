import { Grid, Typography } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
 
    <Grid bgcolor="lavenderblush" spacing={1} textAlign="center" container={true} >
      <Grid item xs={12}>
      <Typography variant="h2" component="h2" style={{ fontWeight: '400' }}>
      Jose Escoto
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Navigation />
      </Grid>
    </Grid>
  );
};

export default Header;
