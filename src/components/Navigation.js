import { Whatshot } from "@material-ui/icons";
import { AppBar, Box, Toolbar, styled, Typography, Tab, Tabs } from "@mui/material";
import React from "react";
// import { StreamIcon } from "@material-ui/icons"

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const Icons = styled(Box)({
// backgroundColor:"white"
// });


const Navbar = () => {
  return (
    // <AppBar position="sticky">
    //   {" "}
    //   <StyledToolbar>
    //     {" "}
    //     <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Jose Escoto - JE - Portfolio Pt 2 </Typography>
    //     <Whatshot sx={{display:{xs:"block", sm:"none"}}}/>
    //   </StyledToolbar>
      
    // </AppBar>
<Tabs centered>
  <Tab label="Portfolio" />
  <Tab label="About Me" />
  <Tab label="Contact" />
  <Tab label="Resume/CV" />
</Tabs>
    
  );
};

export default Navbar;
