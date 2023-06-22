import { Whatshot } from "@material-ui/icons";
import { Tab, Tabs } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";


// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const Icons = styled(Box)({
// backgroundColor:"white"
// });


const Navbar = () => {
  return (
<Tabs centered>
  <Tab label="Portfolio" component={Link} to="/portfolio"/>
  <Tab label="About Me" component={Link} to="/about"/>
  <Whatshot sx={{ display: { xs: "block", sm: "none" } }} />
  <Tab label="Contact" component={Link} to="/contact"/>
  <Tab label="Resume/CV" component={Link} to="/resume" />
</Tabs>
    
  );
};

export default Navbar;
