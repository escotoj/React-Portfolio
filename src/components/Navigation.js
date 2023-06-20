import { Whatshot } from "@material-ui/icons";
import { AppBar, Box, Toolbar, styled, Typography } from "@mui/material";
import React from "react";
// import { StreamIcon } from "@material-ui/icons"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
backgroundColor:"white"
});


const Navbar = () => {
  return (
    <AppBar position="stick">
      {" "}
      <StyledToolbar>
        {" "}
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Jose Escoto - JE - Portfolio Pt 2 </Typography>
        <Whatshot sx={{display:{xs:"block", sm:"none"}}}/>
      </StyledToolbar>
      
    </AppBar>
  );
};

export default Navbar;
