import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DescriptionIcon from "@mui/icons-material/Description";

import {
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Avatar,
  Paper,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { darkMode } = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={8}
            sx={{
              borderRadius: 4,
              p: 3,
              minHeight: 460,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: darkMode ? "#0F172A" : "#FFFFFF",
              border: "1px solid rgba(59,130,246,0.22)",
              boxShadow: "0 24px 60px rgba(15,23,42,0.26)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 32px 80px rgba(59,130,246,0.22)",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                borderRadius: 4,
                border: "1px solid rgba(59,130,246,0.18)",
                p: 4,
                bgcolor: darkMode ? "#111827" : "#F1F5F9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  borderRadius: 4,
                  bgcolor: "#3B82F6",
                  color: darkMode ? "#F8FAFC" : "#0F172A",
                  fontSize: { xs: "4rem", md: "5rem" },
                  fontWeight: 800,
                  boxShadow: "0 24px 60px rgba(59,130,246,0.22)",
                }}
              >
                PM
              </Avatar>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Hi There,
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.8rem", md: "3.8rem" },
              fontWeight: 800,
              color: darkMode ? "#F8FAFC" : "#0F172A",
              mb: 1,
            }}
          >
            Pranav M
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "text.secondary", mb: 1 }}
          >
            Computer Science Student
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ color: "primary.main", mb: 3, fontWeight: 600 }}
          >
            DevOps • MERN Stack • Linux
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: darkMode ? "#E2E8F0" : "#475569",
              mb: 3,
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            Learning, Building, and Improving Every Day.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              maxWidth: 680,
              mb: 4,
            }}
          >
            I enjoy building practical software solutions while continuously exploring DevOps, Linux, cloud technologies, and modern web development. Every project I build is an opportunity to learn, innovate, and solve real-world problems.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<RocketLaunchIcon />}
              component={Link}
              to="/projects"
              sx={{
                minWidth: 180,
                borderRadius: 3,
                py: 1.5,
                backgroundColor: "#3B82F6",
                color: "#F8FAFC",
                fontWeight: 600,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#2563EB",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                },
              }}
            >
               Explore Projects
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<DescriptionIcon />}
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              sx={{
                minWidth: 180,
                borderRadius: 3,
                py: 1.5,
                borderColor: "rgba(59,130,246,0.55)",
                color: darkMode ? "#E2E8F0" : "#475569",
                fontWeight: 600,
                textTransform: "none",
                transition: "all 0.3s ease",
                '&:hover': {
                  borderColor: "rgba(59,130,246,0.85)",
                  backgroundColor: "rgba(59,130,246,0.05)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.15)",
                },
              }}
            >
              📄 Resume
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
