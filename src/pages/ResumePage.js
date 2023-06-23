import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";


function ResumePage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Resume
        </Typography>
        <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
          <Typography variant="body1" align="center">
      <h2>Resume/CV</h2>
      <h3>Full Stack Coding Bootcamp, UC Berkeley (2022) </h3>
      <p align='left'>
      <li>Hands-on experience with building a diverse range of projects through Github Workflow using HTML, CSS, and JavaScript.</li>
            <li>Created full-stack web applications using third-party API, RESTful APIs, and AJAX methods.</li>
            <li>Implemented structured and unstructured databases creating dynamic websites.</li>
            <li>Experienced VScode, terminal commands and ChromeDev Tool for troubleshooting.</li>
            <li>Understanding of data structures and algorithms.</li>
            <li>Designed applications using frameworks like BootStrap and Bulma CDN.</li>
 </p>
      </Typography>
      </Box>
      </Stack>
      
      {/* <Footer/> */}
    </Box>
  );
}

export default ResumePage;