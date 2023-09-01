import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
 
    <Grid bgcolor="lavenderblush" textAlign="center" sx={{
     display:'block',
     alignItems:'center'
    }} >
      <Grid item xs={12}>
      <Typography variant="h2" component="h2" style={{ fontWeight: '400' }}>
      Jose Escoto
        </Typography>
      </Grid>
<Box><Navigation />
</Box>
      

    </Grid>
  );
};

export default Header;
