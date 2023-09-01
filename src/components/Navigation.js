import { Whatshot } from "@material-ui/icons";
import { Tab, Tabs, Box, Hidden} from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => {
  return (
  
      <Tabs centered
        sx={{
          width: { xs: '100%', sm: '100%', lg: "100%" },
          marginTop: "20px"
        }}>
        <Box centered>
        <Tab label="Portfolio" component={Link} to="/portfolio" />
        <Tab label="About Me" component={Link} to="/React-Portfolio/" />
        <Hidden smDown>
          <Whatshot sx={{ display: "block" }} />
        </Hidden>
        <Tab label="Contact" component={Link} to="/contact" />
        <Tab label="Resume/CV" component={Link} to="/resume" />
        </Box>

      </Tabs>
    
    
  );
};

export default Navbar;
