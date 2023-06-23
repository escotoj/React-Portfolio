import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";


function PortfolioPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
        Portfolio
        </Typography>
        <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
          <Typography variant="body1" align="center">
      <h2>Projects</h2>
      <h3>Below is a a collection of my current and past work</h3>
      <p>Technologies used: JavaScript (Node, Express, React), CSS (Bootstrap, Jquery, Bulma, Handlebars), Databases (SQL, RESTful API, Sequelize)  </p>
      </Typography>
      </Box>
      </Stack>
      
      {/* <Footer/> */}
    </Box>
  );
}

export default PortfolioPage;