import { Box, Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <Box>
      <Navigation />
      <Header/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Project/>
      </Stack>
      <Footer/>
    </Box>
  );
}

export default App;
