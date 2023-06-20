import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="h2">
        JE - Portfolio, Round 2
      </Typography>
      <Header/>
      <Footer/>
      <Navigation/>
      <Project/>
    </div>
  );
}

export default App;
