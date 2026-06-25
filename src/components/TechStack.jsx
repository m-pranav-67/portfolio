import React from "react";
import { Container, Grid, Paper, Typography, Divider, Chip, Stack, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { useTheme } from "../context/ThemeContext";

const techCards = [
  {
    icon: <CodeIcon fontSize="medium" sx={{ color: "primary.main" }} />,
    title: "Frontend",
    chips: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: <DeveloperModeIcon fontSize="medium" sx={{ color: "primary.main" }} />,
    title: "Backend",
    chips: ["Node.js", "Express.js", "Socket.io"],
  },
  {
    icon: <TerminalIcon fontSize="medium" sx={{ color: "primary.main" }} />,
    title: "Programming",
    chips: ["Python", "Java", "C", "C++"],
  },
  {
    icon: <StorageIcon fontSize="medium" sx={{ color: "primary.main" }} />,
    title: "Database",
    chips: ["MongoDB", "MySQL"],
  },
  {
    icon: <BuildIcon fontSize="medium" sx={{ color: "primary.main" }} />,
    title: "DevOps & Tools",
    chips: ["Linux", "Git", "GitHub", "VS Code", "Docker (Learning)"],
  },
  {
    icon: <CloudQueueIcon fontSize="medium" sx={{ color: "primary.main" }} />,
    title: "Cloud & Deployment",
    chips: ["Render", "Cloud Computing (Learning)"],
  },
];

function TechStack() {
  const { darkMode } = useTheme();
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: darkMode ? "#F8FAFC" : "#0F172A", mb: 1 }}>
          Technology Stack
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 720, mx: { xs: "auto", md: 0 } }}>
          Technologies I use to build reliable software solutions.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {techCards.map(({ icon, title, chips }) => (
          <Grid key={title} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                minHeight: 220,
                borderRadius: 3,
                border: "1px solid rgba(59,130,246,0.16)",
                bgcolor: darkMode ? "#0F172A" : "#FFFFFF",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                '&:hover': {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(59,130,246,0.18)",
                  borderColor: "rgba(59,130,246,0.35)",
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                {icon}
                <Typography variant="h6" sx={{ fontWeight: 700, color: darkMode ? "#F8FAFC" : "#0F172A" }}>
                  {title}
                </Typography>
              </Stack>
              <Divider sx={{ borderColor: "rgba(148,163,184,0.24)", mb: 2 }} />
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    label={chip}
                    size="small"
                    sx={{
                      bgcolor: "rgba(59,130,246,0.12)",
                      color: "#E2E8F0",
                      border: "1px solid rgba(59,130,246,0.22)",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TechStack;
