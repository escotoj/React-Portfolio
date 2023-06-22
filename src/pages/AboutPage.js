import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";


function AboutPage() {
  return (
    <Box display="flex" justifyContent="center" textAlign={"center"}>
      <Stack>
      <Typography>
      <h2>About Me</h2>
      <p>I'm a FullStack Web Development Student At UC Berkeley, CA and my name is Jos. E. Nearing the end of this program and soon to enter the job market. I am on a journey to learn and apply web development skills start a career as Software Engineer </p>
      </Typography>
      </Stack>
    </Box>
  );
}

export default AboutPage;