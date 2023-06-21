import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";


function AboutPage() {
  return (
    <Box>
      {/* <Navigation /> */}
      <Header/>
      AboutPage
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <h2>About Me</h2>
      <p>I'M A FULLSTACK WEB DEVELOPMENT STUDENT AT UC BERKELEY, CA and my name is Jos. E. I am on a journey to learn and apply web development skills start a career as Software Engineer </p>
      </Stack>
      <Footer/>
    </Box>
  );
}

export default AboutPage;