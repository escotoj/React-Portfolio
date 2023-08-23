import { Whatshot } from "@material-ui/icons";
import { Tab, Tabs } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => {
  return (
<Tabs centered
        sx={{
          width: { xs: 400, sm: 600, lg: "100%" },
          // height: { xs: 350, sm: 600, lg: 1000 },
        }}>
  <Tab label="Portfolio" component={Link} to="/portfolio"/>
  <Tab label="About Me" component={Link} to="/React-Portfolio/"/>
  <Whatshot sx={{ display: { xs: "block", sm: "none" } }} />
  <Tab label="Contact" component={Link} to="/contact"/>
  <Tab label="Resume/CV" component={Link} to="/resume" />
</Tabs>
    
  );
};

export default Navbar;
