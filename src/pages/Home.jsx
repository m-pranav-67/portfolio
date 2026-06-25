import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { darkMode } = useTheme();
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
        }}
      >
        <Hero />
        <About />
        <TechStack />
        <Achievements />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;    