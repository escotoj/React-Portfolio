import { Whatshot } from "@material-ui/icons";
import { Tab, Tabs, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => {
  return (
   <Box margin={2} >
    <Tabs centered
   sx={{
     width: { xs: '100%', sm: '100%', lg: "100%" },
     marginTop: "20px"
     // height: { xs: 350, sm: 600, lg: 1000 },
   
   }}>
<Tab label="Portfolio" component={Link} to="/portfolio"/>
<Tab label="About Me" component={Link} to="/React-Portfolio/"/>
<Whatshot sx={{ display: { xs: "block", sm: "none" } }} />
<Tab label="Contact" component={Link} to="/contact"/>
<Tab marginl label="Resume/CV" component={Link} to="/resume" />
</Tabs></Box> 

    
  );
};

export default Navbar;
