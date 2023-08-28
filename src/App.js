import { Box, Button, Stack } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";


function App() {
  return (
    <Box>
      <Router>
      <Header/>
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/React-Portfolio" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>

      <Footer/>
    </Box>
  );
}

export default App;
