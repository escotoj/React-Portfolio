import { Box, Stack, Typography } from "@mui/material";
import NewProject from "../components/NewProjects";
import Project from "../components/Project";

function PortfolioPage() {
  return (
    <Box
    marginTop={5}
    >
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Portfolio
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: "50px",
              borderRadius: "8px",
              width: "80%",
            }} 
          >
            <Typography variant="body1" align="center">
              <h2>Projects</h2>
              <h3>Below is a a collection of my current and past work</h3>
              <p>
                Tech Stack: JavaScript (Node, Express, React), CSS (Bootstrap,
                Jquery, Bulma, Handlebars, MaterialUI), Databases (SQL, RESTful
                API, Sequelize, NoSQl, MongoDB){" "}
              </p>
            </Typography>
            <Box  
              sx={{ 
                width: { xs: "100%", sm: "100%", lg: "100%" },
                // height: { xs: 350, sm: 600, lg: 1000 },
              }} 
            >
              <NewProject />
              <Project />
            </Box>
          </Box>
        </div>
      </Stack>
    </Box>
  );
}

export default PortfolioPage;
