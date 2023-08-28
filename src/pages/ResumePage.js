import { Box, Stack, Typography, Link } from "@mui/material";

function ResumePage() {
  const googleDocsUrl =
    "https://docs.google.com/document/d/1VjKX8TcjWob5BjA9Wt6QcZL4SY4SVnhN9R4zMrk2tAY/edit?usp=sharing";
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      marginBottom={32}
      marginTop={5}
    >
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Resume
        </Typography>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "50px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="body1" align="center">
            <h3>Resume/CV</h3>
            <h3>Full Stack Coding Bootcamp, UC Berkeley (2023) </h3>
            <p align="left">
              <li>
              Utilized hands-on experience with constructing full-stack projects through GitHub Workflow using Object-Oriented programming (OOP) and the Model-View-Controller (MVC) paradigm.
              </li>
              <li>
              Made use of MongoDB, Express, React, and Node (MERN Stack) to deploy applications on Heroku. 
              </li>
              <li>
              Applied a range of testing tools including Postman, Workbench, Compass, and Jest. 
              </li>
              <li>
              Effectively leveraged third-party APIs, RESTful APIs, GraphQL, and AJAX (fetch API) methods.
              </li>
              <li>Implemented structured and unstructured databases creating dynamic websites.
</li>
              <li>
              Experienced with VScode, terminal commands, and ChromeDev Tool for troubleshooting.
              </li>
              <li>
              Solid understanding of data structures and algorithms (Time Complexity, Big O notation). 

              </li>
              <li>
              Designed applications on the front end using frameworks like BootStrap, Bulma CDN, and Material UI.

              </li>
            </p>

          </Typography>
          
        </Box>
        <Typography align="center" marginTop={8}>
              <Link href={googleDocsUrl} download>
                Download Resume
              </Link>
            </Typography>
      </Stack>
      
    </Box>
  );
}

export default ResumePage;
