import { Whatshot } from "@material-ui/icons";
import { Tab, Tabs } from "@mui/material";
// import { Link } from 'react-router-dom';
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
  <Tab label="Portfolio" />
  <Tab label="About Me" />
  <Whatshot sx={{ display: { xs: "block", sm: "none" } }} />
  <Tab label="Contact" />
  <Tab label="Resume/CV" />
</Tabs>
    
  );
};

export default Navbar;
