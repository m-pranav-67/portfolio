import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <Box>
      <Navbar />
      <Contact />
      <Footer />
    </Box>
  );
}

export default ContactPage;
