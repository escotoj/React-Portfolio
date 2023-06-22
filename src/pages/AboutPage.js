import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";


function AboutPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          About Me
        </Typography>
        <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px", borderRadius: "8px" }}>
          <Typography variant="body1" align="center">
          <h2>Jose Escoto </h2>
      <h3>FullStack Software Engineer </h3>
            I'm a FullStack Web Development Student At UC Berkeley, CA. Nearing the end of this program and soon to enter the job market. I am on a journey to learn and apply web development skills start a career as Software Engineer
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutPage;