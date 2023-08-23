import { Grid, Typography } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
 
    <Grid bgcolor="lavenderblush" spacing={1} textAlign="center" container={true} sx={{
      width: { xs: 400, sm: 667, lg: "100%" },
      // height: { xs: 350, sm: 600, lg: 1000 },
    }} >
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
