import { Box, Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";


function App() {
  return (
    <Box>
      {/* <Navigation /> */}
      <Router>
      <Header/>
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
        {/* Add other routes for different pages */}
      </Routes>
    </Router>

      <Footer/>
    </Box>
  );
}

export default App;
