import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";


function PortfolioPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
        PortfolioPage
        </Typography>
        <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
          <Typography variant="body1" align="center">
      <h2>Resume/CV</h2>
      <h3>FullStack Coding Bootcamp, UC Berkeley (2022) </h3>
      <p>Hands-on experience using HTML, CSS, and JavaScript to build projects from scratch. Experienced with terminal commands and backend coding through Node and Express.JS. Designed applications using frameworks like BootStap, Bulma and now Material UI. Built out several projects through GitHub using VS Code. </p>
      </Typography>
      </Box>
      </Stack>
      
      {/* <Footer/> */}
    </Box>
  );
}

export default PortfolioPage;