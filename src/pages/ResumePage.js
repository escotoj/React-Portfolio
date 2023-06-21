import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";


function ResumePage() {
  return (
    <Box>
      {/* <Navigation /> */}
      <Header/>
      ResumePage
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <h2>Resume/CV</h2>
      <p>FullStack Coding Bootcamp, UC Berkeley (2022) </p>
      <p>Hands-on experience using HTML, CSS, and JavaScript to build projects from scratch. Experienced with terminal commands and backend coding through Node and Express.JS. Designed applications using frameworks like BootStap, Bulma and now Material UI. Built out several projects through GitHub using VS Code. </p>
      </Stack>
      <Footer/>
    </Box>
  );
}

export default ResumePage;