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
      <Stack direction="row" spacing={2} justifyContent="space-between">
        AboutPage
      </Stack>
      <Footer/>
    </Box>
  );
}

export default AboutPage;