import React from "react";
import { Box, Container, Typography, Card, CardContent, Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "../context/ThemeContext";

const Achievements = () => {
  const { darkMode } = useTheme();
  const achievements = [
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: "#3B82F6" }} />,
      title: "Special Mention",
      subtitle: "SNS International MUN",
      description: "UNHRC Committee",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: "#3B82F6" }} />,
      title: "Elite Gold",
      subtitle: "NPTEL Python",
      description: "Score: 94%",
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: "#3B82F6" }} />,
      title: "Innovation",
      subtitle: "Hardware & Software Hackathons",
      description: "Research Projects",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: "#3B82F6" }} />,
      title: "Continuous Learning",
      subtitle: "Linux, DevOps, Cloud",
      description: "German Language",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: darkMode ? "#F8FAFC" : "#0F172A",
              mb: 2,
            }}
          >
            Achievements
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: darkMode ? "#CBD5E1" : "#475569",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Important milestones throughout my academic and technical journey.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {achievements.map((achievement, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                  },
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{achievement.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      fontWeight: 600,
                      color: darkMode ? "#F8FAFC" : "#0F172A",
                      mb: 1,
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      fontWeight: 500,
                      color: "#3B82F6",
                      mb: 1,
                    }}
                  >
                    {achievement.subtitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      color: darkMode ? "#CBD5E1" : "#475569",
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Achievements;