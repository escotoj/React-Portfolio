import { Box, Stack, Typography, Link } from "@mui/material";

function ResumePage() {
  const googleDocsUrl = "https://docs.google.com/document/d/19UuLxmMCDgvzWAPsT7BQBAnOKfOtiZ6-ex2g1qJqadM/edit?usp=sharing";
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Resume
        </Typography>
        <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
          <Typography variant="body1" align="center">
      <h2>Resume/CV</h2>
      <h3>Full Stack Coding Bootcamp, UC Berkeley (2023) </h3>
      <p align='left'>
      <li>Hands-on experience with building a diverse range of projects through Github Workflow using HTML, CSS, and JavaScript.</li>
            <li>Created full-stack web applications using third-party API, RESTful APIs, and AJAX methods.</li>
            <li>Implemented structured and unstructured databases creating dynamic websites.</li>
            <li>Experienced VScode, terminal commands and ChromeDev Tool for troubleshooting.</li>
            <li>Understanding of data structures and algorithms.</li>
            <li>Designed applications using frameworks like BootStrap and Bulma CDN.</li>
 </p>
 <Typography align="center">
              <Link href={googleDocsUrl} download>
                Download Resume
              </Link>
            </Typography>
      </Typography>
      </Box>
      </Stack>
      
    </Box>
  );
}

export default ResumePage;